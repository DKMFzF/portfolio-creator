import { color, Fn, materialColor, step, uv } from "three/tsl";
import * as THREE from "three/webgpu";

import { shapeGridBgConfig } from "../config";

const createShapeMask = () =>
  Fn(() => {
    const { patterns } = shapeGridBgConfig;
    const probability = Math.random();

    if (probability < patterns.centeredCircle.probability) {
      return uv().distance(patterns.centeredCircle.origin).remapClamp(
        patterns.centeredCircle.start,
        patterns.centeredCircle.end,
      );
    }
    if (probability < patterns.cornerCircle.probability) {
      return uv().distance(patterns.cornerCircle.origin).remapClamp(
        patterns.cornerCircle.start,
        patterns.cornerCircle.end,
      );
    }
    if (probability > patterns.diagonal.probability) {
      return step(uv().x.add(uv().y), patterns.diagonal.threshold);
    }

    return uv().x.remapClamp(patterns.half.start, patterns.half.end);
  })();

export const createShapeGridMaterial = (
  primaryColor: string,
  secondaryColor: string,
): THREE.MeshBasicNodeMaterial => {
  const material = new THREE.MeshBasicNodeMaterial({
    color: primaryColor,
    side: THREE.DoubleSide,
    transparent: true,
  });
  const shapeMask = createShapeMask();

  material.colorNode = materialColor.mul(shapeMask).add(color(secondaryColor).mul(shapeMask.oneMinus()));

  return material;
};
