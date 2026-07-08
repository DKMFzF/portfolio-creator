import { useFrame } from "@react-three/fiber";
import { BallCollider, RapierRigidBody, RigidBody } from "@react-three/rapier";
import { easing } from "maath";
import type { JSX } from "react";
import { useMemo, useRef } from "react";
import * as THREE from "three/webgpu";

import { canvasBgConfig } from "../../config";
import type { SphereProps } from "../../lib";

type SphereComponentProps = SphereProps & {
  randomPosition: (spread: number) => number;
  motionVector?: THREE.Vector3;
};

export const Sphere = ({
  position,
  color = "white",
  randomPosition,
  motionVector = new THREE.Vector3(),
}: SphereComponentProps): JSX.Element => {
  const bodyRef = useRef<RapierRigidBody>(null);
  const meshRef = useRef<THREE.Mesh>(null);
  const spawnPosition = useMemo<[number, number, number]>(
    () =>
      position ?? [
        randomPosition(canvasBgConfig.physics.spawnSpread),
        randomPosition(canvasBgConfig.physics.spawnSpread),
        randomPosition(canvasBgConfig.physics.spawnSpread),
      ],
    [position, randomPosition],
  );

  useFrame((_, delta) => {
    const clampedDelta = Math.min(canvasBgConfig.physics.deltaClampMax, delta);
    const body = bodyRef.current;

    // Нулевая гравитация компенсируется импульсом к центру, чтобы шары "пружинили" вокруг origin.
    body?.applyImpulse(
      motionVector.copy(body.translation()).negate().multiplyScalar(canvasBgConfig.physics.impulseMultiplier),
      true,
    );

    if (meshRef.current?.material && "color" in meshRef.current.material) {
      easing.dampC(
        (meshRef.current.material as THREE.MeshPhysicalMaterial).color,
        color,
        canvasBgConfig.physics.colorDamping,
        clampedDelta,
      );
    }
  });

  return (
    <RigidBody
      linearDamping={canvasBgConfig.physics.linearDamping}
      angularDamping={canvasBgConfig.physics.angularDamping}
      friction={canvasBgConfig.physics.friction}
      position={spawnPosition}
      ref={bodyRef}
      colliders={false}
    >
      <BallCollider args={[canvasBgConfig.physics.colliderRadius]} />
      <mesh ref={meshRef} castShadow receiveShadow>
        <sphereGeometry
          args={[
            canvasBgConfig.geometry.sphereRadius,
            canvasBgConfig.geometry.widthSegments,
            canvasBgConfig.geometry.heightSegments,
          ]}
        />
        <meshPhysicalMaterial
          metalness={canvasBgConfig.geometry.metalness}
          roughness={canvasBgConfig.geometry.roughness}
        />
      </mesh>
    </RigidBody>
  );
};
