export const SHAPE_GRID_BG_CLASS_NAME = "ShapeGridBg";

export const SHAPE_GRID_BG_COLOR_BACKGROUND = "#000000";
export const SHAPE_GRID_BG_PALETTE = [
  "#132a13",
  "#31572c",
  "#4f772d",
  "#90a955",
  "#ecf39e",
] as const;

export const SHAPE_GRID_BG_RENDERER = {
  antialias: true,
  dpr: [0.5, 1] as [number, number],
} as const;

export const SHAPE_GRID_BG_CAMERA = {
  fov: 75,
  position: [0, 0, 12] as [number, number, number],
  fitPadding: 1.05,
} as const;

export const SHAPE_GRID_BG_GRID = {
  size: 20,
  boxSize: 1,
  boxSegments: 1,
  zPosition: 0,
} as const;

export const SHAPE_GRID_BG_PATTERNS = {
  half: {
    start: 0.5,
    end: 0.501,
  },
  centeredCircle: {
    probability: 0.1,
    origin: 0.5,
    start: 0.45,
    end: 0.451,
  },
  cornerCircle: {
    probability: 0.5,
    origin: 0,
    start: 0.5,
    end: 0.501,
  },
  diagonal: {
    probability: 0.75,
    threshold: 1,
  },
} as const;

export const SHAPE_GRID_BG_ROTATION = {
  quarterTurn: Math.PI * 0.5,
  zSteps: 4,
} as const;

export const SHAPE_GRID_BG_WRAPPER = {
  zIndex: 0,
} as const;
