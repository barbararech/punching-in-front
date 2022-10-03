import styled from "styled-components";

export const Container = styled.section`
  padding: 100px;

  .editIcon {
    position: absolute;
    right: 35px;
    top: 6px;
    color: #9b9999;
  }

  .archiveIcon {
    position: absolute;
    right: 0px;
    top: 6px;
    font-size: 26px;
    color: #9b9999;
  }

  .title {
    font-size: 20px;
    font-weight: 600;
    font-family: "Poppins";
  }

  .subtitle {
    font-size: 16px;
    font-weight: 400;
    font-family: "Poppins";
    color: #828282;
    display:flex;
    align-items:center;
  }

  .expand {
    margin-left: -20px;
    margin-right: 10px;
  }

  .divider {
    margin-left: 30px;
    margin-bottom: 8px;
  }

  .content{
    margin-left: 30px;
    margin-right: 40%;
  }

  .subcontent{
    display: flex;
    justify-content:space-between;
  }

  .contentTasks{
    margin-left: 40px;
    margin-right: 38.5%;
  }

  .task{
    display:flex;
    align-items: center;
  }

  .tasksLabel{
    font-size: 16px;
  }

  .openInNewIcon{
    margin-left: 10px;
  }

  .checkIcon{
    margin-right: 10px;
  }

  .heardback{
    color: ${(props) => (props.heardBack ? "#1cd34a" : "#b81111")};
  }
`;

