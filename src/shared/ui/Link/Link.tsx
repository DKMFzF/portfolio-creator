import type { AnchorHTMLAttributes, JSX, PropsWithChildren } from "react";

import cn from "@/shared/lib/cn";

import styles from "./Link.module.css";

const bem = cn("Link");

type Props = PropsWithChildren & AnchorHTMLAttributes<HTMLAnchorElement>;

export const Link = ({ children, className, ...props }: Props): JSX.Element => {
  const linkClassName = className ? `${styles[bem()]} ${className}` : styles[bem()];

  return (
    <a className={linkClassName} {...props}>
      {children}
    </a>
  );
};
