import type { JSX } from "react";

import type { Route } from "@/shared/config";
import cn from "@/shared/lib/cn";
import { Link } from "@/shared/ui";

import styles from "./FooterLink.module.css";

const bem = cn("FooterLink");

type Props = {
  item: Route;
};

export const FooterLink = ({ item }: Props): JSX.Element => {
  return (
    <Link href={item.link} className={styles[bem()]}>
      {item.name}
    </Link>
  );
};
