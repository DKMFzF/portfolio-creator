"use client";

import type { JSX, PropsWithChildren } from "react";
import { useRef } from "react";

import { Footer } from "@/widgets/Footer";
import { Header } from "@/widgets/Header";
import cn from "@/shared/lib/cn";
import type { Nullable } from "@/shared/types/nullable";
import { Main } from "@/shared/ui";

import { useHeaderVisibilityOnFooter } from "../../lib";

import styles from "./LayoutContent.module.css";

const bem = cn("LayoutContent");

export const LayoutContent = ({ children }: PropsWithChildren): JSX.Element => {
  const headerRef = useRef<Nullable<HTMLElement>>(null);
  const footerRef = useRef<Nullable<HTMLElement>>(null);

  useHeaderVisibilityOnFooter({
    headerRef,
    footerRef,
  });

  return (
    <div className={styles[bem()]}>
      <Header ref={headerRef} />
      <div className={styles[bem("main")]}>
        <Main>{children}</Main>
      </div>
      <Footer ref={footerRef} />
    </div>
  );
};
