import type { JSX, PropsWithChildren } from "react";

export const Main = ({ children }: PropsWithChildren): JSX.Element => {
  return (
    <main>{children}</main>
  );
}