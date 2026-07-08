import type { ConnectorColorToken } from "@/shared/types";

export const CANVAS_BG_CLASS_NAME = "CanvasBg";

export const CANVAS_BG_ACCENT_PALETTE = [
  "#ff4060",
  "#ffcc00",
  "#20ffa0",
  "#2060ff",
] as const;

export const CANVAS_BG_COLOR_DARK = "#444";
export const CANVAS_BG_COLOR_LIGHT = "white";
export const CANVAS_BG_COLOR_BACKGROUND = "#eee";
export const CANVAS_BG_COLOR_RING = "red";

export const CANVAS_BG_CONNECTOR_PATTERN: ConnectorColorToken[] = [
  "dark",
  "dark",
  "dark",
  "light",
  "light",
  "light",
  "accent",
  "accent",
  "accent",
  "dark",
  "dark",
  "dark",
  "light",
  "light",
  "light",
  "accent",
  "accent",
  "accent",
];

export const CANVAS_BG_FADE_ANIMATION = {
  durationSeconds: 5,
  delaySeconds: 0.5,
  easing: "ease",
} as const;
