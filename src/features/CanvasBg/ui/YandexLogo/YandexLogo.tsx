import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { RapierRigidBody, RigidBody } from "@react-three/rapier";
import type { JSX } from "react";
import { useMemo, useRef } from "react";
import * as THREE from "three/webgpu";

import { canvasBgConfig } from "../../config";

const MODEL_PATH = "/yandex_3d-logo.glb";

type GLTFScene = {
  scene: THREE.Group<THREE.Object3DEventMap>;
};

export const YandexLogo = (): JSX.Element => {
  const { scene } = useGLTF(MODEL_PATH) as GLTFScene;
  const bodyRef = useRef<RapierRigidBody>(null);
  const motionVector = useMemo(() => new THREE.Vector3(), []);

  const model = useMemo(() => {
    const clonedModel = scene.clone(true);

    clonedModel.traverse((node) => {
      if (node instanceof THREE.Mesh) {
        node.castShadow = true;
        node.receiveShadow = true;
      }
    });

    return clonedModel;
  }, [scene]);

  useFrame(() => {
    const body = bodyRef.current;

    // Держим модель в "облаке" шаров, как и остальные динамические объекты сцены.
    body?.applyImpulse(
      motionVector.copy(body.translation()).negate().multiplyScalar(canvasBgConfig.physics.impulseMultiplier),
      true,
    );
  });

  return (
    <RigidBody
      ref={bodyRef}
      colliders="hull"
      position={[0, 0, 0]}
      linearDamping={canvasBgConfig.physics.linearDamping}
      angularDamping={canvasBgConfig.physics.angularDamping}
      friction={canvasBgConfig.physics.friction}
    >
      <primitive object={model} scale={1.8} />
    </RigidBody>
  );
};

useGLTF.preload(MODEL_PATH);
