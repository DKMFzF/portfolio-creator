import type { JSX } from "react";
import { forwardRef } from "react";

import { routes } from "@/shared/config/routes";

import cn from "@/shared/lib/cn";

import { HeaderList } from "../HeaderList";
import { HeaderLogo } from "../HeaderLogo";

import styles from "./Header.module.css";

const bem = cn('Header');

export const Header = forwardRef<HTMLElement, object>(
  (_, ref): JSX.Element => {
    return (
      <header ref={ref} className={styles[bem()]}>
        <HeaderLogo />
        <HeaderList items={routes} />
      </header>
    );
  },
);

Header.displayName = "Header";