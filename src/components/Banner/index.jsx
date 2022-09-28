import React from "react";
import { Container } from "./styles";
import mainDraw from "../../assets/images/mainDraw2.png";
import waves from "../../assets/images/wave.svg";
import logo from "../../assets/images/logo.png";

export default function Banner() {
  return (
    <Container>
      <img src={logo} />
      <img src={mainDraw} />
      <img src={waves} />
    </Container>
  );
}
