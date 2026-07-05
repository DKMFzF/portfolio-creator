import type { JSX } from "react";

import cn from "@/shared/lib/cn";
import { Link, Logo } from "@/shared/ui";

import styles from "./HeaderLogo.module.css";

const bem = cn("HeaderLogo");

export const HeaderLogo = (): JSX.Element => {
  return (
    <div className={styles[bem()]}>
      <Link href="/">
        <Logo src="/label.svg" alt="DKMFZF" />
      </Link>
    </div>
  );
};
