import React from "react";
import { Main, Container } from "./styles";
import {ResponsiveAppBar} from "../../components/Navbar/index";

export default function HomePage() {
  return (
    <Main>
      <Container>
        <ResponsiveAppBar />
      </Container>
    </Main>
  );
}
