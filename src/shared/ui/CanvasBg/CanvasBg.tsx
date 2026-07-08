"use client";

import type { CSSProperties, JSX } from "react";

import { canvasBgConfig } from "@/shared/config";
import cn from "@/shared/lib/cn";

import styles from "./CanvasBg.module.css";
import { CanvasBgRoot } from "./CanvasBgRoot";

const bem = cn(canvasBgConfig.className);

const cssVariables: CSSProperties = {
  "--canvas-bg-z-index": canvasBgConfig.wrapper.zIndex,
  "--canvas-bg-fade-duration": `${canvasBgConfig.fadeAnimation.durationSeconds}s`,
  "--canvas-bg-fade-delay": `${canvasBgConfig.fadeAnimation.delaySeconds}s`,
  "--canvas-bg-fade-easing": canvasBgConfig.fadeAnimation.easing,
} as CSSProperties;

export const CanvasBg = (): JSX.Element => {
  return (
    <div className={styles[bem()]} style={cssVariables}>
      <CanvasBgRoot />
    </div>
  );
};
