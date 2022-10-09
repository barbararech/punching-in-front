import styled from "styled-components";

export const Container = styled.section`
  padding-left: 10%;
  padding-right: 10%;
  padding-top: 80px;

  .title {
    font-size: 20px;
    font-weight: 600;
    font-family: "Poppins";
  }

  .subtitle {
    display: flex;
    font-size: 18px;
    font-weight: 600;
    font-family: "Poppins";
    margin-top: 30px;
  }

  .submitButton {
    background-color: rgba(36, 151, 86, 0.2);
    margin-left: 10px;
    margin-bottom: 10px;
  }

  @media (max-width: 1140px) {
    padding: 40px 0;
  }
`;

export const ContainerTasks = styled.section`
  display: flex;
  flex-direction: column;
  padding-right: 10px;
  width: 100%;

  .form-inline {
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    width: 100%;
  }

  .selectInputTasks {
    margin-top: 20px;
    margin-bottom: 20px;
  }

  button {
    border: none;
    background-color: Transparent;
  }

  .addIcon {
    color: #05995b;
    font-size: 20px;
    cursor: pointer;
  }

  .removeIcon {
    color: #df2a1d;
    font-size: 20px;
    cursor: pointer;
  }

  .paragraph {
    display: flex;
    font-size: 16px;
    font-weight: 600;
    font-family: "Poppins";
    margin-top: 10px;
  }
`;
