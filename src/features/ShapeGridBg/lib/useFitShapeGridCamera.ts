import { useThree } from "@react-three/fiber";
import { useLayoutEffect } from "react";
import * as THREE from "three/webgpu";

import { shapeGridBgConfig } from "../config";

export const useFitShapeGridCamera = (grid: THREE.Group): void => {
  const { camera, size } = useThree();

  useLayoutEffect(() => {
    if (!(camera instanceof THREE.PerspectiveCamera)) {
      return;
    }

    const bounds = new THREE.Box3().setFromObject(grid);
    const boundsSize = bounds.getSize(new THREE.Vector3());
    const center = bounds.getCenter(new THREE.Vector3());
    const halfFovTangent = Math.tan(THREE.MathUtils.degToRad(camera.fov) / 2);
    const verticalDistance = boundsSize.y / (2 * halfFovTangent);
    const horizontalDistance = boundsSize.x / (2 * halfFovTangent * camera.aspect);
    const distance = Math.min(verticalDistance, horizontalDistance);

    camera.position.set(center.x, center.y, center.z + distance * shapeGridBgConfig.camera.fitPadding);
    camera.updateProjectionMatrix();
  }, [camera, grid, size.height, size.width]);
};
