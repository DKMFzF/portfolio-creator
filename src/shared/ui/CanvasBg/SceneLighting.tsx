import { Environment, Lightformer } from "@react-three/drei";
import type { JSX } from "react";

import { canvasBgConfig } from "@/shared/config";

export const SceneLighting = (): JSX.Element => {
  return (
    <Environment>
      <group rotation={canvasBgConfig.lighting.environmentRotation}>
        {canvasBgConfig.lighting.lightformers.map((item, index) => (
          <Lightformer
            key={index}
            form={item.form}
            color={item.color}
            intensity={item.intensity}
            rotation-x={item.rotationX}
            rotation-y={item.rotationY}
            position={item.position}
            scale={item.scale}
            onUpdate={item.lookAtOrigin ? (self) => self.lookAt(0, 0, 0) : undefined}
          />
        ))}
      </group>
    </Environment>
  );
};
