import {
  SHAPE_GRID_BG_CAMERA,
  SHAPE_GRID_BG_CLASS_NAME,
  SHAPE_GRID_BG_COLOR_BACKGROUND,
  SHAPE_GRID_BG_GRID,
  SHAPE_GRID_BG_PALETTE,
  SHAPE_GRID_BG_PATTERNS,
  SHAPE_GRID_BG_RENDERER,
  SHAPE_GRID_BG_ROTATION,
  SHAPE_GRID_BG_WRAPPER,
} from "./shapeGridBg.constants";
import type { ShapeGridBgConfig } from "./shapeGridBg.types";

export const shapeGridBgConfig: ShapeGridBgConfig = {
  className: SHAPE_GRID_BG_CLASS_NAME,
  colors: {
    background: SHAPE_GRID_BG_COLOR_BACKGROUND,
    palette: SHAPE_GRID_BG_PALETTE,
  },
  renderer: SHAPE_GRID_BG_RENDERER,
  camera: SHAPE_GRID_BG_CAMERA,
  grid: SHAPE_GRID_BG_GRID,
  patterns: SHAPE_GRID_BG_PATTERNS,
  rotation: SHAPE_GRID_BG_ROTATION,
  wrapper: SHAPE_GRID_BG_WRAPPER,
};
