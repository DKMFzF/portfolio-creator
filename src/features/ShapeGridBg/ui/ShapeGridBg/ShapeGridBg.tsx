"use client";

import type { CSSProperties, JSX } from "react";

import cn from "@/shared/lib/cn";

import { shapeGridBgConfig } from "../../config";
import { ShapeGridBgRoot } from "../ShapeGridBgRoot";
import styles from "./ShapeGridBg.module.css";

const bem = cn(shapeGridBgConfig.className);

const cssVariables: CSSProperties = {
  "--shape-grid-bg-z-index": shapeGridBgConfig.wrapper.zIndex,
} as CSSProperties;

export const ShapeGridBg = (): JSX.Element => {
  return (
    <div className={styles[bem()]} style={cssVariables}>
      <ShapeGridBgRoot />
    </div>
  );
};
