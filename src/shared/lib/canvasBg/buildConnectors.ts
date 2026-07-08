import { canvasBgConfig, CANVAS_BG_CONNECTOR_PATTERN } from "@/shared/config";
import type { ConnectorColorToken, ConnectorItem } from "@/shared/types";

const resolveColorToken = (token: ConnectorColorToken, accentColor: string): ConnectorItem => {
  if (token === "accent") {
    return { color: accentColor, accent: true };
  }

  if (token === "light") {
    return { color: canvasBgConfig.colors.light };
  }

  return { color: canvasBgConfig.colors.dark };
};

export const buildConnectors = (accentIndex: number): ConnectorItem[] => {
  const accentColor = canvasBgConfig.colors.accentPalette[accentIndex];

  return CANVAS_BG_CONNECTOR_PATTERN.map((token) => resolveColorToken(token, accentColor));
};
