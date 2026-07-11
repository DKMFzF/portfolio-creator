import { JSX } from "react";

import { CanvasBg } from "@/features/CanvasBg";
import { Main, Sector } from "@/shared/ui";
import { Gallery } from "@/widgets/Gallery";

import { AboutMe } from "../AboutMe";

export function Home(): JSX.Element {
  return (
    <Main>
      <Sector
        display={"flex"}
        justify={"start"}
        align={"end"}
        height={"100vh"}
        position={"fixed"}
        top={"0"}
        left={"0"}
        right={"0"}
        bottom={"0"}
        zIndex={-2}
      >
        <CanvasBg />
        <AboutMe />
      </Sector>

      <Sector
        marginTop={"100vh"}
        position={"relative"}
        zIndex={1}
        backgroundColor={"black"}
        padding={"0"}
        height={"100vh"}
      >
      </Sector>

      <Sector backgroundColor={"black"} padding={"0"} height={"100%"}>
        <Gallery />
      </Sector>
      <Sector backgroundColor={"black"} padding={"0"} height={"100vh"}>
      </Sector>
    </Main>
  );
}
