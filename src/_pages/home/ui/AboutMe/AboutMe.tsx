import type { JSX } from "react";

import cn from "@/shared/lib/cn";
import {Logo, Text} from "@/shared/ui";

import styles from "./AboutMe.module.css";

const bem = cn("AboutMe");

export const AboutMe = (): JSX.Element => {
  return (
    <div className={styles[bem()]}>
      <div className={styles[bem("name")]}>
        <Text>kirill doroshev</Text>
        <Text color={"ghost"}>engineer at etl data platform</Text>
      </div>
      <Logo src={"/arrow.svg"} alt={"arrow on my photos"} />
    </div>
  );
}