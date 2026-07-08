import { Main, Sector } from "@/shared/ui";

import { AboutMe } from "../AboutMe";
import { CanvasBg } from "../CanvasBg";

export function Home() {
  return (
    <Main>
      <Sector display={"flex"} justify={"start"} align={"end"}>
        <CanvasBg />
        <AboutMe />
      </Sector>
    </Main>
  );
}
