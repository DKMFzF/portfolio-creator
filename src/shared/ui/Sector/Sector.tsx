import type { JSX, PropsWithChildren } from "react";

import cn from '@/shared/lib/cn';

import styles from "./Sector.module.css";

const bem = cn('Sector');

type Props = PropsWithChildren & {};

export const Sector = ({ children }: Props): JSX.Element => {
  return (
    <section className={styles[bem()]}>
      {children}
    </section>
  );
}