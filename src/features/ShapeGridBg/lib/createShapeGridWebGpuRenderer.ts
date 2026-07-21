import * as THREE from "three/webgpu";

import { shapeGridBgConfig } from "../config";

export const createShapeGridWebGpuRenderer = async (
  canvas: HTMLCanvasElement,
): Promise<THREE.WebGPURenderer> => {
  const renderer = new THREE.WebGPURenderer({
    canvas,
    antialias: shapeGridBgConfig.renderer.antialias,
  });

  return renderer.init().then(() => renderer);
};
