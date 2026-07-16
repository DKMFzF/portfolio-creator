import type { JSX } from "react";

import cn from "@/shared/lib/cn";
import { Logo } from "@/shared/ui";

import styles from "./FooterLogo.module.css";

const bem = cn("FooterLogo");

export const FooterLogo = (): JSX.Element => {
  return (
    <div className={styles[bem()]}>
      <Logo src="/footer_logo_dkmfzf.svg" alt="DKMFZF" />
    </div>
  );
};
