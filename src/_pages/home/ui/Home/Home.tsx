import { JSX } from "react";

import { CanvasBg } from "@/features/CanvasBg";
import { Main, Sector } from "@/shared/ui";
import { Gallery } from "@/widgets/Gallery";

import { AboutMe } from "../AboutMe";

export function Home(): JSX.Element {
  return (
    <Main>
      <Sector display={"flex"} justify={"start"} align={"end"} height={"100vh"}>
        <CanvasBg />
        <AboutMe />
      </Sector>
      <Sector backgroundColor={"black"} padding={"0"} height={"100%"}>
        <Gallery />
      </Sector>
      <Sector backgroundColor={"black"} padding={"0"} height={"100vh"}>
          Тестовая секция
      </Sector>
    </Main>
  );
}
