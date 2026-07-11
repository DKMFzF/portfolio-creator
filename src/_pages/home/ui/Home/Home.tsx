import { CanvasBg } from "@/features/CanvasBg";
import { Main, Sector } from "@/shared/ui";
import { Gallery } from "@/widgets/Gallery";

import { AboutMe } from "../AboutMe";

export function Home() {
  return (
    <Main>
      <Sector display={"flex"} justify={"start"} align={"end"}>
        <CanvasBg />
        <AboutMe />
      </Sector>
      <Sector backgroundColor={"black"} padding={"0"} height={"100%"}>
        <Gallery />
      </Sector>
    </Main>
  );
}
