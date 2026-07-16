import type { JSX } from "react";

import cn from "@/shared/lib/cn";
import { Sector } from "@/shared/ui/Sector";

import styles from "./Footer.module.css";

const bem = cn("Footer");

export const Footer = (): JSX.Element => {
    return (
        <Sector backgroundColor={"black"} padding={"0"} height={"100vh"}>
            <footer className={styles[bem()]}>
                
            </footer>
        </Sector>
    );
}