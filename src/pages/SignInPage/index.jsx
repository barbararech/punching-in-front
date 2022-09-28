import React from "react";
import Banner from "../../components/Banner";
import SignInForm from "../../components/SignInForm/index";
import { Main, Container } from "../SignUpPage/styles";

export default function SignInPage() {
  return (
    <Main>
      <Container>
        <Banner />
        <SignInForm />
      </Container>
    </Main>
  );
}