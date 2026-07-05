import { Sector, Main } from "@/shared/ui";

import { AboutMe } from "../AboutMe";

export function Home() {
  return (
    <Main>
      <Sector display={"flex"} justify={"start"} align={"end"}>
        <AboutMe />
      </Sector>
    </Main>
  );
}
