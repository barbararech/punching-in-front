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
    font-size: 16px;
    font-weight: 600;
    font-family: "Poppins";
    margin-top: 30px;
    justify-content: space-between;
  }
`;

export const ContainerTasks = styled.section`
    display:flex;
    flex-direction:column;

    .form-inline {  
    display: flex;
    flex-flow: row wrap;
    align-items: center;
  }


  .subtitle {
    display: flex;
    font-size: 16px;
    font-weight: 600;
    font-family: "Poppins";
    margin-top: 30px;
    justify-content: space-between;
  }
`;
