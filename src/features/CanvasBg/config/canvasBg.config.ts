import type { CanvasBgConfig } from "../lib/canvasBg.types";

import {
  CANVAS_BG_ACCENT_PALETTE,
  CANVAS_BG_CLASS_NAME,
  CANVAS_BG_COLOR_BACKGROUND,
  CANVAS_BG_COLOR_DARK,
  CANVAS_BG_COLOR_LIGHT,
  CANVAS_BG_COLOR_RING,
  CANVAS_BG_FADE_ANIMATION,
} from "./canvasBg.constants";

export const canvasBgConfig: CanvasBgConfig = {
  className: CANVAS_BG_CLASS_NAME,
  wrapper: {
    zIndex: 0,
  },
  fadeAnimation: CANVAS_BG_FADE_ANIMATION,
  colors: {
    dark: CANVAS_BG_COLOR_DARK,
    light: CANVAS_BG_COLOR_LIGHT,
    background: CANVAS_BG_COLOR_BACKGROUND,
    ring: CANVAS_BG_COLOR_RING,
    accentPalette: [...CANVAS_BG_ACCENT_PALETTE],
  },
  camera: {
    position: [0, 0, 30],
    fov: 17.5,
  },
  renderer: {
    dpr: [.5, .8],
    antialias: false,
  },
  physics: {
    timeStep: "vary",
    gravity: [0, 0, 0],
    linearDamping: 4,
    angularDamping: 1,
    friction: 0.1,
    impulseMultiplier: 0.25,
    spawnSpread: 10,
    colliderRadius: 1,
    pointerZ: 0,
    deltaClampMax: 0.1,
    colorDamping: 0.2,
  },
  geometry: {
    sphereRadius: 1,
    widthSegments: 64,
    heightSegments: 64,
    metalness: 0.5,
    roughness: 0.2,
  },
  lighting: {
    ambientIntensity: 2,
    environmentRotation: [-Math.PI / 3, 0, 1],
    lightformers: [
      {
        form: "circle",
        intensity: 100,
        rotationX: Math.PI / 2,
        position: [0, 5, -9],
        scale: 2,
      },
      {
        form: "circle",
        intensity: 0,
        rotationY: Math.PI / 2,
        position: [-5, 1, -1],
        scale: 2,
      },
      {
        form: "circle",
        intensity: 0,
        rotationY: Math.PI / 2,
        position: [-5, -1, -1],
        scale: 2,
      },
      {
        form: "circle",
        intensity: 2,
        rotationY: -Math.PI / 2,
        position: [10, 1, 0],
        scale: 8,
      },
      {
        form: "ring",
        color: CANVAS_BG_COLOR_RING,
        intensity: 80,
        position: [10, 10, 0],
        scale: 10,
        lookAtOrigin: true,
      },
    ],
  },
  effects: {
    renderPriority: 1,
    scenePassFilter: "NearestFilter",
    ssr: {
      maxDistance: 5,
      blurQuality: 1,
      thickness: 0.15,
      resolutionScale: 0.5,
    },
    bloom: {
      strength: 0.1,
      radius: 0.8,
      threshold: 0.9,
    },
    ssgi: {
      sliceCount: 2,
      stepCount: 8,
      radius: 25,
      giIntensity: 100,
      aoIntensity: 3,
      thickness: 0.5,
    },
  },
};
