import type { JSX, PropsWithChildren, CSSProperties } from "react";

import cn from '@/shared/lib/cn';

import styles from "./Sector.module.css";

const bem = cn('Sector');

const paddingPage = "--padding-page";

type Props = PropsWithChildren & {
  display?: CSSProperties["display"];
  justify?: CSSProperties["justifyContent"];
  align?: CSSProperties["alignItems"];
  backgroundColor?: CSSProperties["backgroundColor"];
  padding?: CSSProperties["padding"];
  height?: CSSProperties["height"];
  minHeight?: CSSProperties["minHeight"];
  position?: CSSProperties["position"];
  top?: CSSProperties["top"];
  left?: CSSProperties["left"];
  right?: CSSProperties["right"];
  bottom?: CSSProperties["bottom"];
  zIndex?: CSSProperties["zIndex"];
  marginTop?: CSSProperties["marginTop"];
  marginBottom?: CSSProperties["marginBottom"];
  marginLeft?: CSSProperties["marginLeft"];
  marginRight?: CSSProperties["marginRight"];
};

export const Sector = ({
 children,
 display = "default",
 justify = "default",
 align = "default",
 backgroundColor = "white",
 padding = paddingPage,
 height,
 minHeight,
 position = "relative",
 top,
 left,
 right,
 bottom,
 zIndex,
 marginTop,
 marginBottom,
 marginLeft,
 marginRight,
}: Props): JSX.Element => {
  return (
    <section className={styles[bem()]} style={{
      display: `${display}`,
      justifyContent: `${justify}`,
      alignItems: `${align}`,
      backgroundColor: `${backgroundColor}`,
      padding: `${padding}`,
      height: `${height}`,
      minHeight: `${minHeight}`,
      position: `${position}`,
      top: `${top}`,
      left: `${left}`,
      right: `${right}`,
      bottom: `${bottom}`,
      zIndex: `${zIndex}`,
      marginTop: `${marginTop}`,
      marginBottom: `${marginBottom}`,
      marginLeft: `${marginLeft}`,
      marginRight: `${marginRight}`,
    }}>
      {children}
    </section>
  );
}