import { useFrame, useThree } from "@react-three/fiber";
import { useLayoutEffect, useRef } from "react";
import * as THREE from "three/webgpu";

import type { Nullable } from "@/shared/types/nullable";

import { canvasBgConfig } from "../../config";
import { createCanvasBgPipeline } from "../../lib";

export const PostProcessingEffects = (): null => {
  const { gl, scene, camera } = useThree();
  const postProcessingRef = useRef<Nullable<THREE.PostProcessing>>(null);

  useLayoutEffect(() => {
    // webgpu postprocessing строится один раз на mount
    // иначе в каждом кадре будут пересоздаваться GPU-ресурсы.
    const postProcessing = new THREE.PostProcessing(gl as unknown as THREE.WebGPURenderer);
    postProcessingRef.current = postProcessing;

    // Последовательность pass-ов важна: сначала G-Buffer, затем SSGI/SSR/Bloom, и только потом TRAA.
    createCanvasBgPipeline({ scene, camera, postProcessing });

    return () => {
      if (postProcessingRef.current === postProcessing) {
        postProcessingRef.current = null;
      }
    };
  }, [camera, gl, scene]);

  // Приоритет > 0 гарантирует, что композитный пост-эффект отрисуется после базового прохода r3f.
  useFrame(() => {
    postProcessingRef.current?.render();
  }, canvasBgConfig.effects.renderPriority);

  return null;
};
