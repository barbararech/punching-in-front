import styled from 'styled-components';

export const Main = styled.main`
  overflow: auto;
  height: 100vh;
  width: 100vw;

  background: -webkit-linear-gradient(45deg, #adc8b3 10%, #dab386 90%);
  background: -moz-linear-gradient(45deg, #adc8b3 10%, #dab386 90%);
  background: -ms-linear-gradient(45deg, #adc8b3 10%, #dab386 90%);
  background: -o-linear-gradient(45deg, #adc8b3 10%, #dab386 90%);
  background: linear-gradient(45deg, #adc8b3 10%, #dab386 90%);
`;

export const Container = styled.div`
  overflow: visible !important;
  padding-bottom: 10%;
  @media (max-width: 1140px) {
    flex-direction: column;
  }
`;

export const Message = styled.h6`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 20px;
`;
