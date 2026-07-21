import * as THREE from "three/webgpu";

import { shapeGridBgConfig } from "../config";

import { createShapeGridMaterial } from "./createShapeGridMaterial";

const getRandomPaletteColor = (): string => {
  const { palette } = shapeGridBgConfig.colors;
  return palette[Math.floor(Math.random() * palette.length)];
};

const createShapeBox = (geometry: THREE.BoxGeometry): THREE.Mesh => {
  const { rotation } = shapeGridBgConfig;
  const box = new THREE.Mesh(
    geometry,
    createShapeGridMaterial(getRandomPaletteColor(), getRandomPaletteColor()),
  );

  box.rotation.z = rotation.quarterTurn * Math.floor(Math.random() * rotation.zSteps);

  return box;
};

export const createShapeGrid = (): THREE.Group => {
  const { grid } = shapeGridBgConfig;
  const group = new THREE.Group();
  const offset = -((grid.size - 1) * grid.boxSize) / 2;
  const geometry = new THREE.BoxGeometry(
    grid.boxSize,
    grid.boxSize,
    grid.boxSize,
    grid.boxSegments,
    grid.boxSegments,
    grid.boxSegments,
  );

  for (let column = 0; column < grid.size; column += 1) {
    for (let row = 0; row < grid.size; row += 1) {
      const box = createShapeBox(geometry);

      box.position.set(
        column * grid.boxSize + offset,
        row * grid.boxSize + offset,
        grid.zPosition,
      );
      group.add(box);
    }
  }

  return group;
};
