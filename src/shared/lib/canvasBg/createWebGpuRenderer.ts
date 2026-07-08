import * as THREE from "three/webgpu";

import { canvasBgConfig } from "@/shared/config";

export const createWebGpuRenderer = (canvas: HTMLCanvasElement): Promise<THREE.WebGPURenderer> => {
  // WebGPU-рендерер должен быть инициализирован асинхронно до первого кадра Canvas.
  const renderer = new THREE.WebGPURenderer({
    canvas,
    antialias: canvasBgConfig.renderer.antialias,
  });

  return renderer.init().then(() => renderer);
};
