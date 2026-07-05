import type { JSX } from "react";

import cn from "@/shared/lib/cn";

import styles from "./Header.module.css";

const bem = cn('Header');

export const Header = (): JSX.Element => {
  return (
    <header className={styles[bem()]}>
      Header
    </header>
  );
}