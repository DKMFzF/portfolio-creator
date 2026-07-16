import type { JSX } from "react";

import cn from "@/shared/lib/cn";

import { FooterEmail } from "../FooterEmail";

import styles from "./FooterEmails.module.css";

const bem = cn("FooterEmails");

const emails = [
  { label: "work email", value: "flim.win@yandex.ru" },
  { label: "studio email", value: "dorohev.kir@gmail.com" },
] as const;

export const FooterEmails = (): JSX.Element => {
  return (
    <div className={styles[bem()]}>
      {emails.map((email) => (
        <FooterEmail key={email.label} label={email.label} value={email.value} />
      ))}
    </div>
  );
};
