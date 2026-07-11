import type { JSX, PropsWithChildren } from "react";

import cn from  "@/shared/lib/cn";

import styles from "./DefaultBg.module.css";

const bem = cn("DefaultBg");

export const DefaultBg = ({children}: PropsWithChildren): JSX.Element => {
    return (
        <div className={styles[bem()]}>
            {children}
        </div>
    );
}