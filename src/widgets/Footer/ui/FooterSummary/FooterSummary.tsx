import type { JSX } from "react";

import cn from "@/shared/lib/cn";

import { FooterEmails } from "../FooterEmails";
import { FooterLinks } from "../FooterLinks";

import styles from "./FooterSummary.module.css";

const bem = cn("FooterSummary");

export const FooterSummary = (): JSX.Element => {
  return (
    <div className={styles[bem()]}>
      <FooterLinks />
      <FooterEmails />
    </div>
  );
};
