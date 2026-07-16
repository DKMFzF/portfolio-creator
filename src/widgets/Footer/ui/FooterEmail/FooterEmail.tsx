import type { JSX } from "react";

import cn from "@/shared/lib/cn";

import styles from "./FooterEmail.module.css";

const bem = cn("FooterEmail");

type Props = {
  label: string;
  value: string;
};

export const FooterEmail = ({ label, value }: Props): JSX.Element => {
  return (
    <div className={styles[bem()]}>
      <div className={styles[bem("label")]}>{label}</div>
      <div className={styles[bem("value")]}>{value}</div>
    </div>
  );
};
