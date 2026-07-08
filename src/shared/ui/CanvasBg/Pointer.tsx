import { useFrame } from "@react-three/fiber";
import { BallCollider, RapierRigidBody, RigidBody } from "@react-three/rapier";
import type { JSX } from "react";
import { useRef } from "react";
import * as THREE from "three/webgpu";

import { canvasBgConfig } from "@/shared/config";

type PointerProps = {
  motionVector?: THREE.Vector3;
};

export const Pointer = ({ motionVector = new THREE.Vector3() }: PointerProps): JSX.Element => {
  const pointerBodyRef = useRef<RapierRigidBody>(null);

  useFrame(({ mouse, viewport }) => {
    pointerBodyRef.current?.setNextKinematicTranslation(
      motionVector.set(
        (mouse.x * viewport.width) / 2,
        (mouse.y * viewport.height) / 2,
        canvasBgConfig.physics.pointerZ,
      ),
    );
  });

  return (
    <RigidBody type="kinematicPosition" colliders={false} ref={pointerBodyRef}>
      <BallCollider args={[canvasBgConfig.physics.colliderRadius]} />
    </RigidBody>
  );
};
