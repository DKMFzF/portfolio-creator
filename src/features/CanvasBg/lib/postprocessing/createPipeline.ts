import { bloom } from "three/examples/jsm/tsl/display/BloomNode.js";
import { ssr } from "three/examples/jsm/tsl/display/SSRNode.js";
import { traa } from "three/examples/jsm/tsl/display/TRAANode.js";
import * as TSL from "three/tsl";
import * as THREE from "three/webgpu";

import { canvasBgConfig } from "../../config";
import { ssgi } from "@/shared/lib/ssgi/SSGINode";
import type { SSGIPassNode } from "../canvasBg.types";

type CreateCanvasBgPipelineParams = {
  scene: THREE.Scene;
  camera: THREE.Camera;
  postProcessing: THREE.PostProcessing;
};

export const createCanvasBgPipeline = ({
  scene,
  camera,
  postProcessing,
}: CreateCanvasBgPipelineParams): void => {
  const scenePassFilter = THREE[canvasBgConfig.effects.scenePassFilter];

  const scenePass = TSL.pass(scene, camera, {
    minFilter: scenePassFilter,
    magFilter: scenePassFilter,
  });

  // В MRT сохраняем буферы, которые используются в SSR/SSGI/TRAA.
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
  ssrPass.maxDistance.value = canvasBgConfig.effects.ssr.maxDistance;
  ssrPass.blurQuality.value = canvasBgConfig.effects.ssr.blurQuality;
  ssrPass.thickness.value = canvasBgConfig.effects.ssr.thickness;
  ssrPass.resolutionScale = canvasBgConfig.effects.ssr.resolutionScale;

  const bloomPass = bloom(
    scenePassColor,
    canvasBgConfig.effects.bloom.strength,
    canvasBgConfig.effects.bloom.radius,
    canvasBgConfig.effects.bloom.threshold,
  );

  const ssgiPass = ssgi(scenePassColor, scenePassDepth, sceneNormal, camera) as SSGIPassNode<
    typeof scenePassColor.rgb,
    typeof scenePassColor.a
  >;

  ssgiPass.sliceCount.value = canvasBgConfig.effects.ssgi.sliceCount;
  ssgiPass.stepCount.value = canvasBgConfig.effects.ssgi.stepCount;
  ssgiPass.radius.value = canvasBgConfig.effects.ssgi.radius;
  ssgiPass.giIntensity.value = canvasBgConfig.effects.ssgi.giIntensity;
  ssgiPass.aoIntensity.value = canvasBgConfig.effects.ssgi.aoIntensity;
  ssgiPass.thickness.value = canvasBgConfig.effects.ssgi.thickness;

  // Композит сохраняет художественный баланс: AO затемняет, GI подсвечивает.
  const finalColor = TSL.vec4(
    TSL.add(scenePassColor.rgb.mul(ssgiPass.a), scenePassColor.rgb.mul(ssgiPass.rgb)),
    scenePassColor.a,
  );

  const blendPassAO = finalColor.add(bloomPass);
  const compositePass = TSL.blendColor(blendPassAO, ssrPass);
  const traaPass = traa(compositePass, scenePassDepth, scenePassVelocity, camera);

  postProcessing.outputNode = traaPass;
  postProcessing.needsUpdate = true;
};
