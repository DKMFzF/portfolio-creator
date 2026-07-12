import type { JSX, PropsWithChildren } from "react";

import cn from "@/shared/lib/cn";

import styles from "./Main.module.css";

const bem = cn('Main');

export const Main = ({ children }: PropsWithChildren): JSX.Element => {
  return (
    <main className={styles[bem()]}>{children}</main>
  );
}