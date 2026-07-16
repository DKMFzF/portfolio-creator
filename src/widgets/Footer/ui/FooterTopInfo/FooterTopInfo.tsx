import type { JSX } from "react";

import cn from "@/shared/lib/cn";

import { FooterDescription } from "../FooterDescription";
import { FooterSummary } from "../FooterSummary";

import styles from "./FooterTopInfo.module.css";

const bem = cn("FooterTopInfo");

export const FooterTopInfo = (): JSX.Element => {
  return (
    <div className={styles[bem()]}>
      <FooterDescription />
      <FooterSummary />
    </div>
  );
};
