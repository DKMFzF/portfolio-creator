import {JSX, PropsWithChildren} from "react";

import cn from "@/shared/lib/cn";

import styles from "./Text.module.css";

const bem = cn("Text");
const defaultFontSize = 'var(--font-size)';

type Color = "default" | "ghost";
type Props = PropsWithChildren & {
  color?: Color;
  fontSize?: string;
}

export const Text = ({
  children,
  fontSize = defaultFontSize,
  color = "default",
}: Props): JSX.Element => {
  return (
    <span
      className={styles[bem()]}
      style={{
        fontSize: `${fontSize}`,
        // TODO: убрать стилизацию через js и добавить классы
        color: `${color?.startsWith("default") ? "white" : "rgb(255, 255, 255, 19%)"}`,
      }}
    >
      {children}
    </span>
  );
}