import { Canvas } from "@react-three/fiber";
import type { JSX } from "react";
import { useMemo, useReducer } from "react";

import { canvasBgConfig } from "../../config";
import { buildConnectors, createWebGpuRenderer } from "../../lib";

import { PhysicsScene } from "../PhysicsScene";
import { PostProcessingEffects } from "../PostProcessingEffects";
import { SceneLighting } from "../SceneLighting";

export const CanvasBgRoot = (): JSX.Element => {
  const [accentIndex, nextAccent] = useReducer(
    (state: number) => (state + 1) % canvasBgConfig.colors.accentPalette.length,
    0,
  );
  const connectors = useMemo(() => buildConnectors(accentIndex), [accentIndex]);

  return (
    <Canvas
      dpr={canvasBgConfig.renderer.dpr}
      gl={(props) => createWebGpuRenderer(props.canvas as HTMLCanvasElement)}
      onClick={nextAccent}
      camera={canvasBgConfig.camera}
    >
      <color attach="background" args={[canvasBgConfig.colors.background]} />
      <ambientLight intensity={canvasBgConfig.lighting.ambientIntensity} />
      <PhysicsScene connectors={connectors} />
      <SceneLighting />
      <PostProcessingEffects />
    </Canvas>
  );
};
