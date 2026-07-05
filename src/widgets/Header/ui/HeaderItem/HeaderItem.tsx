import type { JSX } from "react";

import type { Route } from "@/shared/config";
import cn from "@/shared/lib/cn";
import { Link } from "@/shared/ui";

import styles from "./HeaderItem.module.css";

const bem = cn("HeaderItem");

type Props = {
  item: Route;
};

export const HeaderItem = ({ item }: Props): JSX.Element => {
  return (
    <li className={styles[bem()]}>
      <Link
        href={item.link}
        target={item.target}
        rel={item.target === "_blank" ? "noopener noreferrer" : undefined}
      >
        {item.name}
      </Link>
    </li>
  );
};
