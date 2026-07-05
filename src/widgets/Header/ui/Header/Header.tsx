import type { JSX } from "react";

import { routes } from "@/shared/config/routes";

import cn from "@/shared/lib/cn";

import { HeaderList } from "../HeaderList";
import { HeaderLogo } from "../HeaderLogo";

import styles from "./Header.module.css";

const bem = cn('Header');

export const Header = (): JSX.Element => {
  return (
    <header className={styles[bem()]}>
      <HeaderLogo />
      <HeaderList items={routes} />
    </header>
  );
};