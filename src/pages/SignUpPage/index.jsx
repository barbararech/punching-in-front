import React from "react";
import Banner from "../../components/Banner/index";
import SignUpForm from "../../components/SignUpForm/index";
import { Main, Container } from "./styles"

export default function SignUpPage() {

  return (
    <Main>
      <Container>
        <Banner />
        <SignUpForm />
      </Container>
    </Main>
  );
}