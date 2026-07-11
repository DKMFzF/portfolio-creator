import { CanvasBg } from "@/features/CanvasBg";
import { Main, Sector } from "@/shared/ui";

import { AboutMe } from "../AboutMe";

export function Home() {
  return (
    <Main>
      <Sector display={"flex"} justify={"start"} align={"end"}>
        <CanvasBg />
        <AboutMe />
      </Sector>
      <Sector display={"flex"} justify={"center"} align={"center"} backgroundColor={"black"}>
        <h1>Привет мир!</h1>
      </Sector>
    </Main>
  );
}
