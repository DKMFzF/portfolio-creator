"use client";

import { Environment, Lightformer } from "@react-three/drei";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { BallCollider, Physics, RigidBody } from "@react-three/rapier";
import { easing } from "maath";
import type { JSX } from "react";
import { useLayoutEffect, useMemo, useReducer, useRef } from "react";
import { bloom } from "three/examples/jsm/tsl/display/BloomNode.js";
import { ssr } from "three/examples/jsm/tsl/display/SSRNode.js";
import { traa } from "three/examples/jsm/tsl/display/TRAANode.js";
import * as TSL from "three/tsl";
import * as THREE from "three/webgpu";

import cn from "@/shared/lib/cn";
import { ssgi } from "@/shared/lib/ssgi/SSGINode";

import styles from "./CanvasBg.module.css";

const bem = cn("CanvasBg");

const accents = ["#ff4060", "#ffcc00", "#20ffa0", "#2060ff"];

const shuffle = (accent = 0) => [
  { color: "#444" },
  { color: "#444" },
  { color: "#444" },
  { color: "white" },
  { color: "white" },
  { color: "white" },
  { color: accents[accent], accent: true },
  { color: accents[accent], accent: true },
  { color: accents[accent], accent: true },
  { color: "#444" },
  { color: "#444" },
  { color: "#444" },
  { color: "white" },
  { color: "white" },
  { color: "white" },
  { color: accents[accent], accent: true },
  { color: accents[accent], accent: true },
  { color: accents[accent], accent: true },
];

type SphereProps = {
  position?: [number, number, number];
  color?: string;
  accent?: boolean;
};

type SphereBodyRef = {
  applyImpulse: (impulse: THREE.Vector3) => void;
  translation: () => THREE.Vector3;
};

type PointerBodyRef = {
  setNextKinematicTranslation: (translation: THREE.Vector3) => void;
};

export const CanvasBg = (): JSX.Element => {
  const [accent, click] = useReducer((state: number) => (state + 1) % accents.length, 0);
  const connectors = useMemo(() => shuffle(accent), [accent]);

  return (
    <div className={styles[bem()]}>
      <Canvas
        dpr={[1, 1.5]}
        gl={(props) => {
          const renderer = new THREE.WebGPURenderer({
            canvas: props.canvas as HTMLCanvasElement,
            antialias: false,
          });

          return renderer.init().then(() => renderer);
        }}
        onClick={click}
        camera={{ position: [0, 0, 30], fov: 17.5 }}
      >
        <color attach="background" args={["#eee"]} />
        <ambientLight intensity={2} />
        <Physics timeStep="vary" gravity={[0, 0, 0]}>
          <Pointer />
          {connectors.map((props, i) => (
            <Sphere key={i} {...props} />
          ))}
        </Physics>
        <Environment>
          <group rotation={[-Math.PI / 3, 0, 1]}>
            <Lightformer
              form="circle"
              intensity={100}
              rotation-x={Math.PI / 2}
              position={[0, 5, -9]}
              scale={2}
            />
            <Lightformer form="circle" intensity={0} rotation-y={Math.PI / 2} position={[-5, 1, -1]} scale={2} />
            <Lightformer form="circle" intensity={0} rotation-y={Math.PI / 2} position={[-5, -1, -1]} scale={2} />
            <Lightformer form="circle" intensity={2} rotation-y={-Math.PI / 2} position={[10, 1, 0]} scale={8} />
            <Lightformer
              form="ring"
              color="red"
              intensity={80}
              onUpdate={(self) => self.lookAt(0, 0, 0)}
              position={[10, 10, 0]}
              scale={10}
            />
          </group>
        </Environment>
        <Effects />
      </Canvas>
    </div>
  );
};

function Sphere({
  position,
  vec = new THREE.Vector3(),
  r = THREE.MathUtils.randFloatSpread,
  color = "white",
  ...props
}: SphereProps & { vec?: THREE.Vector3; r?: (range: number) => number }) {
  const api = useRef<unknown>(null);
  const ref = useRef<THREE.Mesh>(null);
  const pos = useMemo<[number, number, number]>(() => position ?? [r(10), r(10), r(10)], [position, r]);

  useFrame((_, delta) => {
    const clampedDelta = Math.min(0.1, delta);
    const bodyApi = api.current as SphereBodyRef | null;

    bodyApi?.applyImpulse(vec.copy(bodyApi.translation()).negate().multiplyScalar(0.25));

    if (ref.current?.material && "color" in ref.current.material) {
      easing.dampC((ref.current.material as THREE.MeshPhysicalMaterial).color, color, 0.2, clampedDelta);
    }
  });

  return (
    <RigidBody
      linearDamping={4}
      angularDamping={1}
      friction={0.1}
      position={pos}
      ref={api as never}
      colliders={false}
    >
      <BallCollider args={[1]} />
      <mesh ref={ref} castShadow receiveShadow>
        <sphereGeometry args={[1, 64, 64]} />
        <meshPhysicalMaterial {...props} metalness={0.5} roughness={0.2} />
      </mesh>
    </RigidBody>
  );
}

function Pointer({ vec = new THREE.Vector3() }: { vec?: THREE.Vector3 }) {
  const ref = useRef<unknown>(null);

  useFrame(({ mouse, viewport }) => {
    const pointerBody = ref.current as PointerBodyRef | null;

    pointerBody?.setNextKinematicTranslation(
      vec.set((mouse.x * viewport.width) / 2, (mouse.y * viewport.height) / 2, 0),
    );
  });

  return (
    <RigidBody type="kinematicPosition" colliders={false} ref={ref as never}>
      <BallCollider args={[1]} />
    </RigidBody>
  );
}

function Effects() {
  const { gl, scene, camera } = useThree();
  const postProcessingRef = useRef<THREE.PostProcessing | null>(null);

  useLayoutEffect(() => {
    const postProcessing = new THREE.PostProcessing(gl as unknown as THREE.WebGPURenderer);
    postProcessingRef.current = postProcessing;
    const scenePass = TSL.pass(scene, camera, {
      minFilter: THREE.NearestFilter,
      magFilter: THREE.NearestFilter,
    });

    scenePass.setMRT(
      TSL.mrt({
        output: TSL.output,
        normal: TSL.directionToColor(TSL.normalView),
        metalrough: TSL.vec2(TSL.metalness, TSL.roughness),
        velocity: TSL.velocity,
      }),
    );

    const scenePassColor = scenePass.getTextureNode("output");
    const scenePassNormal = scenePass.getTextureNode("normal");
    const scenePassDepth = scenePass.getTextureNode("depth");
    const scenePassVelocity = scenePass.getTextureNode("velocity");
    const scenePassMetalRough = scenePass.getTextureNode("metalrough");
    const sceneNormal = TSL.sample((uv) => TSL.colorToDirection(scenePassNormal.sample(uv)));
    const ssrPass = ssr(scenePassColor, scenePassDepth, sceneNormal, scenePassMetalRough.r, scenePassMetalRough.g);

    ssrPass.maxDistance.value = 5;
    ssrPass.blurQuality.value = 1;
    ssrPass.thickness.value = 0.15;
    ssrPass.resolutionScale = 0.5;

    const bloomPass = bloom(scenePassColor, 0.1, 0.8, 0.9);
    const ssgiPass = ssgi(scenePassColor, scenePassDepth, sceneNormal, camera) as unknown as {
      sliceCount: { value: number };
      stepCount: { value: number };
      radius: { value: number };
      giIntensity: { value: number };
      aoIntensity: { value: number };
      thickness: { value: number };
      rgb: typeof scenePassColor.rgb;
      a: typeof scenePassColor.a;
    };

    ssgiPass.sliceCount.value = 2;
    ssgiPass.stepCount.value = 8;
    ssgiPass.radius.value = 25;
    ssgiPass.giIntensity.value = 100;
    ssgiPass.aoIntensity.value = 3;
    ssgiPass.thickness.value = 0.5;

    const gi = ssgiPass.rgb;
    const ao = ssgiPass.a;
    const finalColor = TSL.vec4(
      TSL.add(scenePassColor.rgb.mul(ao), scenePassColor.rgb.mul(gi)),
      scenePassColor.a,
    );

    const blendPassAO = finalColor.add(bloomPass);
    const compositePass = TSL.blendColor(blendPassAO, ssrPass);
    const traaPass = traa(compositePass, scenePassDepth, scenePassVelocity, camera);

    postProcessing.outputNode = traaPass;
    postProcessing.needsUpdate = true;
    
    return () => {
      if (postProcessingRef.current === postProcessing) {
        postProcessingRef.current = null;
      }
    };
  }, [camera, gl, scene]);

  useFrame(() => {
    postProcessingRef.current?.render();
  }, 1);

  return null;
}
