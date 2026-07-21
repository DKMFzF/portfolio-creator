import * as THREE from "three/webgpu";

export const disposeShapeGrid = (group: THREE.Group): void => {
  const mesh = group.children.find((child): child is THREE.Mesh => child instanceof THREE.Mesh);

  mesh?.geometry.dispose();
  group.traverse((child) => {
    if (child instanceof THREE.Mesh) {
      child.material.dispose();
    }
  });
  group.clear();
};
