import { Canvas } from "@react-three/fiber";
import type { JSX } from "react";

import { shapeGridBgConfig } from "../../config";
import { createShapeGridWebGpuRenderer } from "../../lib";

import { ShapeGrid } from "../ShapeGrid";

export const ShapeGridBgRoot = (): JSX.Element => {
  return (
    <Canvas
      dpr={shapeGridBgConfig.renderer.dpr}
      gl={(props) => createShapeGridWebGpuRenderer(props.canvas as HTMLCanvasElement)}
      camera={shapeGridBgConfig.camera}
    >
      <color attach="background" args={[shapeGridBgConfig.colors.background]} />
      <ShapeGrid />
    </Canvas>
  );
};
