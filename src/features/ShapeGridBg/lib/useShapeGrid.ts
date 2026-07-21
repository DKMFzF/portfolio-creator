import { useEffect, useMemo } from "react";
import type * as THREE from "three/webgpu";

import { createShapeGrid } from "./createShapeGrid";
import { disposeShapeGrid } from "./disposeShapeGrid";

export const useShapeGrid = (): THREE.Group => {
  const grid = useMemo(() => createShapeGrid(), []);

  useEffect(() => () => disposeShapeGrid(grid), [grid]);

  return grid;
};
