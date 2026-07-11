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
    }}>
      {children}
    </section>
  );
}