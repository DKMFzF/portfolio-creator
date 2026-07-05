import {JSX, PropsWithChildren} from "react";

import cn from "@/shared/lib/cn";

import styles from "./Text.module.css";

const bem = cn("Text");

type Color = "default" | "ghost";
type Props = PropsWithChildren & {
  color?: Color;
  fontSize?: number;
}

export const Text = ({
  children,
  fontSize = 30,
  color = "default",
}: Props): JSX.Element => {
  return (
    <span
      className={styles[bem()]}
      style={{
        fontSize: `${fontSize}px`,
        // TODO: убрать стилизацию через js и добавить классы
        color: `${color?.startsWith("default") ? "white" : "rgb(255, 255, 255, 19%)"}`,
      }}
    >
      {children}
    </span>
  );
}