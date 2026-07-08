export type NumericUniform = {
  value: number;
};

export type ConnectorColorToken = "dark" | "light" | "accent";

export type ConnectorItem = {
  color: string;
  accent?: boolean;
};

export type CanvasCameraConfig = {
  position: [number, number, number];
  fov: number;
};

export type CanvasRendererConfig = {
  dpr: [number, number];
  antialias: boolean;
};

export type CanvasPhysicsConfig = {
  timeStep: "vary";
  gravity: [number, number, number];
  linearDamping: number;
  angularDamping: number;
  friction: number;
  impulseMultiplier: number;
  spawnSpread: number;
  colliderRadius: number;
  pointerZ: number;
  deltaClampMax: number;
  colorDamping: number;
};

export type CanvasGeometryConfig = {
  sphereRadius: number;
  widthSegments: number;
  heightSegments: number;
  metalness: number;
  roughness: number;
};

export type LightformerItemConfig = {
  form: "circle" | "ring";
  color?: string;
  intensity: number;
  rotationX?: number;
  rotationY?: number;
  position: [number, number, number];
  scale: number;
  lookAtOrigin?: boolean;
};

export type CanvasLightingConfig = {
  ambientIntensity: number;
  environmentRotation: [number, number, number];
  lightformers: LightformerItemConfig[];
};

export type CanvasEffectsConfig = {
  renderPriority: number;
  scenePassFilter: "NearestFilter";
  ssr: {
    maxDistance: number;
    blurQuality: number;
    thickness: number;
    resolutionScale: number;
  };
  bloom: {
    strength: number;
    radius: number;
    threshold: number;
  };
  ssgi: {
    sliceCount: number;
    stepCount: number;
    radius: number;
    giIntensity: number;
    aoIntensity: number;
    thickness: number;
  };
};

export type CanvasBgConfig = {
  className: string;
  wrapper: {
    zIndex: number;
  };
  fadeAnimation: {
    durationSeconds: number;
    delaySeconds: number;
    easing: string;
  };
  colors: {
    dark: string;
    light: string;
    background: string;
    ring: string;
    accentPalette: [string, string, string, string];
  };
  camera: CanvasCameraConfig;
  renderer: CanvasRendererConfig;
  physics: CanvasPhysicsConfig;
  geometry: CanvasGeometryConfig;
  lighting: CanvasLightingConfig;
  effects: CanvasEffectsConfig;
};

export type SphereProps = ConnectorItem & {
  position?: [number, number, number];
};

export type SSGIPassNode<TRgb = unknown, TAlpha = unknown> = {
  sliceCount: NumericUniform;
  stepCount: NumericUniform;
  radius: NumericUniform;
  giIntensity: NumericUniform;
  aoIntensity: NumericUniform;
  thickness: NumericUniform;
  rgb: TRgb;
  a: TAlpha;
};
