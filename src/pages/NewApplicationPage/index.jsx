import React from "react";
import { Main, Container } from "../HomePage/styles";
import { ResponsiveAppBar } from "../../components/Navbar/index";
import NewCard from '../../components/NewCard/index' 

export default function NewApplicationPage() {
  return (
    <Main>
      <Container>
        <ResponsiveAppBar />
        <NewCard/>
      </Container>
    </Main>
  );
}
