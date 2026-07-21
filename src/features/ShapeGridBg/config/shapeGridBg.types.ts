export type ShapeGridBgConfig = {
  className: string;
  colors: {
    background: string;
    palette: readonly string[];
  };
  renderer: {
    antialias: boolean;
    dpr: [number, number];
  };
  camera: {
    fov: number;
    position: [number, number, number];
    fitPadding: number;
  };
  grid: {
    size: number;
    boxSize: number;
    boxSegments: number;
    zPosition: number;
  };
  patterns: {
    half: RangeConfig;
  centeredCircle: ProbabilityOriginRangeConfig;
  cornerCircle: ProbabilityOriginRangeConfig;
    diagonal: ProbabilityThresholdConfig;
  };
  rotation: {
    quarterTurn: number;
    zSteps: number;
  };
  wrapper: {
    zIndex: number;
  };
};

type RangeConfig = {
  start: number;
  end: number;
};

type ProbabilityRangeConfig = RangeConfig & {
  probability: number;
};

type ProbabilityOriginRangeConfig = ProbabilityRangeConfig & {
  origin: number;
};

type ProbabilityThresholdConfig = {
  probability: number;
  threshold: number;
};
