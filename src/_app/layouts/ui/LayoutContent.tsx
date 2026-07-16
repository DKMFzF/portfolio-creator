"use client";

import type { JSX, PropsWithChildren } from "react";
import { useRef } from "react";

import { Footer } from "@/widgets/Footer";
import { Header } from "@/widgets/Header";
import { Main } from "@/shared/ui";
import type { Nullable } from "@/shared/types/nullable";

import { useHeaderVisibilityOnFooter } from "../lib";

export const LayoutContent = ({ children }: PropsWithChildren): JSX.Element => {
  const headerRef = useRef<Nullable<HTMLElement>>(null);
  const footerRef = useRef<Nullable<HTMLElement>>(null);

  useHeaderVisibilityOnFooter({
    headerRef,
    footerRef,
  });

  return (
    <>
      <Header ref={headerRef} />
      <Main>{children}</Main>
      <Footer ref={footerRef} />
    </>
  );
};
