import { JSX } from "react";

import { Gallery } from "@/widgets/Gallery";
import { CanvasBg } from "@/features/CanvasBg";
import { Sector } from "@/shared/ui";

import { AboutMe } from "../AboutMe";

export function Home(): JSX.Element {
  return (
      <>
        <Sector
          display={"flex"}
          justify={"start"}
          align={"end"}
          height={"100vh"}
          position={"sticky"}
          top={"0"}
          zIndex={"0"}
        >
          <CanvasBg />
          <AboutMe />
        </Sector>

        <Sector
          position={"relative"}
          backgroundColor={"black"}
          padding={"0"}
          height={"100vh"}
        >
        </Sector>

        <Sector backgroundColor={"black"} padding={"0"} height={"100%"}>
          <Gallery />
        </Sector>
      </>
  );
}
