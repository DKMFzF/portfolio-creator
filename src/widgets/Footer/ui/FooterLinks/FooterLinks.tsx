import type { JSX } from "react";

import { routes } from "@/shared/config/routes";
import cn from "@/shared/lib/cn";

import { FooterLink } from "../FooterLink";

import styles from "./FooterLinks.module.css";

const bem = cn("FooterLinks");

const FOOTER_LINKS_COUNT = 3;

export const FooterLinks = (): JSX.Element => {
  const items = routes.slice(0, FOOTER_LINKS_COUNT);

  return (
    <div className={styles[bem()]}>
      {items.map((item) => (
        <FooterLink item={item} key={`${item.name}-${item.link}`} />
      ))}
    </div>
  );
};
