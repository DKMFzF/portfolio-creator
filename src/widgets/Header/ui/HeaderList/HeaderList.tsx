import type { JSX } from "react";

import type { Route } from "@/shared/config";
import cn from "@/shared/lib/cn";

import { HeaderItem } from "../HeaderItem";

import styles from "./HeaderList.module.css";

const bem = cn("HeaderList");

type Props = {
  items: Route[];
};

export const HeaderList = ({ items }: Props): JSX.Element => {
  return (
    <ul className={styles[bem()]}>
      {items.map((item) => (
        <HeaderItem item={item} key={`${item.name}-${item.link}`} />
      ))}
    </ul>
  );
};
