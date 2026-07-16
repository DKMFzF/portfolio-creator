import type { JSX } from "react";

import cn from "@/shared/lib/cn";

import styles from "./FooterDescription.module.css";

const bem = cn("FooterDescription");

export const FooterDescription = (): JSX.Element => {
  return (
    <div className={styles[bem()]}>
      I want to engage in important work, have a vision, and see my plans through to completion.
    </div>
  );
};
