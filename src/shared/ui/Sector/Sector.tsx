import type { JSX, PropsWithChildren, CSSProperties } from "react";

import cn from '@/shared/lib/cn';

import styles from "./Sector.module.css";

const bem = cn('Sector');

type Props = PropsWithChildren & {
  display?: CSSProperties["display"];
  justify?: CSSProperties["justifyContent"];
  align?: CSSProperties["alignItems"];
};

export const Sector = ({
 children,
 display = "default",
 justify = "default",
 align = "default",
}: Props): JSX.Element => {
  return (
    <section className={styles[bem()]} style={{
      display: `${display}`,
      justifyContent: `${justify}`,
      alignItems: `${align}`,
    }}>
      {children}
    </section>
  );
}