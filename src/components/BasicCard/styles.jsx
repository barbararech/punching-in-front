import styled from "styled-components";

export const Container = styled.section`
  padding-left: 10%;
  padding-right: 10%;
  padding-top: 80px;

  .editIcon {
    position: absolute;
    right: 35px;
    top: 6px;
    color: #9b9999;
    z-index: 1;
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
    display: flex;
    align-items: center;
  }

  .expand {
    margin-left: -20px;
    margin-right: 10px;
  }

  .divider {
    margin-left: 30px;
    margin-bottom: 8px;
  }

  .content {
    margin-left: 30px;
    margin-right: 20%;
  }

  .subcontent {
    display: flex;
    justify-content: space-between;
  }

  .contentTasks {
    margin-left: 40px;
  }

  .circleIcon{
      font-size:10px;
      margin-right:5px;
  }

  .task {
    display: flex;
    align-items: center;
    
  }

  .tasksLabel {
    display:flex;
    flex-direction:column;
    align-items:flex-start;
    justify-content: flex-start;
    font-size: 16px;
    width:113px;

    margin-right: 14%;
  }

  .tasksDeadline {
    font-size: 12px;
    color:gray;
  }

  .openInNewIcon {
    margin-left: 3px;
    font-size:20px;
    padding-bottom:10px;
  }

  .checkIcon {
    margin-right: 10px;
  }

  .priority {
    position: absolute;
    right: 0px;
    top: 6px;
    font-size: 26px;
    color: ${({ priority }) => handleColorType(priority)};
    background: ${({ priority }) => handleBackgroundType(priority)};
    border-radius: 18px;
    font-size: 14px;
    line-height: 15px;
    width: 130px;
    height: 30px;
    font-weight: 600;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .attachments {
    margin-left: 10px;
  }

  .observations {
    margin-left: 30px;
  }

  .myattachment {
    display: flex;
  }

  .articleIcon {
    margin-right: 10px;
  }
`;

const handleColorType = (priority) => {
  switch (priority) {
    case "high":
      return "#eb5757";
    case "medium":
      return "#219653";
    default:
      return "#2F80ED";
  }
};

const handleBackgroundType = (priority) => {
  switch (priority) {
    case "high":
      return "rgba(235, 87, 87, 0.2)";
    case "medium":
      return "rgba(36, 151, 86, 0.2);";
    default:
      return " rgba(47, 128, 237, 0.25);";
  }
};
