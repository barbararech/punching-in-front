import React from "react";
import Banner from "../../components/Banner/index";
import SignUpForm from "../../components/SignUpForm/index";
import { Main, Container, Form } from "./styles"

export default function SignUpPage() {

  return (
    <Main>
      <Container>
        <Banner />
        <SignUpForm />
        
      {/* <Link to="/">Switch back to log in</Link> */}
      </Container>
    </Main>
  );
}