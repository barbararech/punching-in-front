import styled from "styled-components";
import homebackground from "../../assets/images/homebackground.svg";

export const Main = styled.main`
  overflow: hidden;
`;

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  overflow: visible !important;
  background: -webkit-linear-gradient(45deg, #adc8b3 10%, #dab386 90%);
  background: -moz-linear-gradient(45deg, #adc8b3 10%, #dab386 90%);
  background: -ms-linear-gradient(45deg, #adc8b3 10%, #dab386 90%);
  background: -o-linear-gradient(45deg, #adc8b3 10%, #dab386 90%);
  background: linear-gradient(45deg, #adc8b3 10%, #dab386 90%);

  @media (max-width: 1140px) {
    flex-direction: column;
  }
`;
