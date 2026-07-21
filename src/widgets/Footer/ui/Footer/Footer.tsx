import type { JSX } from "react";
import { forwardRef } from "react";

import cn from "@/shared/lib/cn";
import { Sector } from "@/shared/ui/Sector";

import { FooterLogo } from "../FooterLogo";
import { FooterTopInfo } from "../FooterTopInfo";

import styles from "./Footer.module.css";

const bem = cn("Footer");

export const Footer = forwardRef<HTMLElement, object>(
  (_, ref): JSX.Element => {
    return (
      <Sector
        position={"fixed"}
        bottom={"0"}
        left={"0"}
        right={"0"}
        backgroundColor={"black"}
        height={"100vh"}
        zIndex={"0"}
      >
        <footer ref={ref} className={styles[bem()]}>
          <FooterTopInfo />
          <FooterLogo />
        </footer>
      </Sector>
    );
  },
);

Footer.displayName = "Footer";
