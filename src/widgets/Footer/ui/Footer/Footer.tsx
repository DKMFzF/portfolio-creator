import type { JSX } from "react";
import { forwardRef } from "react";

import cn from "@/shared/lib/cn";
import { Sector } from "@/shared/ui/Sector";

import styles from "./Footer.module.css";

const bem = cn("Footer");

export const Footer = forwardRef<HTMLElement, object>(
  (_, ref): JSX.Element => {
    return (
      <Sector backgroundColor={"black"} padding={"0"} height={"100vh"}>
        <footer ref={ref} className={styles[bem()]} />
      </Sector>
    );
  },
);

Footer.displayName = "Footer";