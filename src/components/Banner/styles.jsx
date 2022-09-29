import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  justify-content: center;
  height: 100vh;
  width: 100%;
  padding: 0 180px 0 100px;

  * {
    box-sizing: border-box;
  }

  img:nth-child(1) {
    width: 57%;
    height: auto;
  }

  img:nth-child(2) {
    width: 60%;
    height: auto;
    margin-top: 40px;
  }

  img:nth-child(3) {
    width: 100%;
    position: fixed;
    right: 0;
    z-index: 0;
  }

  @media (max-width: 1140px) {
    padding: 50px 0px;
    align-items: center;
    justify-content: flex-start;
    height: 100%;

    img:nth-child(1) {
      width: 90%;
      height: auto;
    }

    img:nth-child(2) {
      width: 60%;
      height: auto;
      margin-top: 10px;
    }

    img:nth-child(3) {
      display: none;
    }
  }

  @media (min-width: 1540px) {
    img:nth-child(1) {
      width: 47%;
      height: auto;
    }

    img:nth-child(2) {
      width: 40%;
      height: auto;
      margin-top: 40px;
    }

    img:nth-child(3) {
      width: 90%;
      /* height: 100vw; */
      position: fixed;
      right: 0;
      z-index: 0;
    }
  }
`;
