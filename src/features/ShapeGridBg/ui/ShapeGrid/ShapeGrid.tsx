import type { JSX } from "react";

import { useFitShapeGridCamera, useShapeGrid } from "../../lib";

export const ShapeGrid = (): JSX.Element => {
  const grid = useShapeGrid();
  useFitShapeGridCamera(grid);

  return <primitive object={grid} />;
};
