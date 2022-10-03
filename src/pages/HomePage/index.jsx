import React from "react";
import { Main, Container } from "./styles";
import { ResponsiveAppBar } from "../../components/Navbar/index";
import BasicCard from "../../components/Card/index";

export default function HomePage() {
  return (
    <Main>
      <Container>
        <ResponsiveAppBar />
        <BasicCard />
      </Container>
    </Main>
  );
}
