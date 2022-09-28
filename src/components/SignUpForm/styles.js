// import styled from "styled-components";

// export const Container = styled.div`
//   .split {
//     display: flex;
//     flex-direction: row;
//   }

//   .form {
//     padding-top: 300px;
//     background-color: #333333;
//     width: 40vw;
//     display: flex;
//     flex-direction: column;
//   }

//   .logo {
//     color: #ffffff;
//     background-color: #151515;
//     width: 60vw;
//     height: 100vh;
//     padding-top: 300px;

//     h1 {
//       padding: 0 0 0 10vw;
//       font-size: 106px;
//       font-weight: 700;
//       font-family: "Passion One";
//     }

//     h3 {
//       font-size: 43px;
//       padding: 0em 0px 0em 10vw;
//       font-family: "Oswald";
//     }
//   }

//   .error {
//     color: #fc8181;
//     font-size: 0.75rem;
//     //text-align: left;
//     margin-top: 0.2rem;
//     margin-bottom: 0.6rem;
//   }

//   form {
//     margin: 0 2vw 0 2vw;
//     display: flex;
//     flex-direction: column;
//     align-items: center;

//     h6 {
//       margin-top: 22px;
//       text-decoration: underline;
//       color: #ffffff;
//       font-family: "Lato";
//       font-size: 20px;
//     }
//   }

//   input,
//   select {
//     width: 85%;
//     padding: 0.65rem 0.5rem;
//     margin-bottom: 13px;
//     font-size: 27px;
//     color: black;
//     border: 2px solid #4a5568;
//     background-color: #ffffff;
//     border-radius: 6px;
//     outline: none;
//     font-family: "Oswald";
//   }

//   input:focus,
//   select:focus {
//     border-color: #4299e1;
//   }

//   input::placeholder,
//   select::placeholder {
//     color: #a0aec0;
//   }

//   button {
//     display: block;
//     padding: 0.6rem 0.5rem;
//     background-color: #1877f2;
//     color: #ffffff;
//     margin-top: 12px;
//     border: none;
//     border-radius: 6px;
//     width: 85%;
//     font-size: 27px;
//     font-weight: bold;
//     cursor: pointer;
//     box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
//     font-family: "Oswald";
//     opacity: ${(props) => (props.enable ? "1" : "0.7")};
//     pointer-events: ${(props) => (props.enable ? "auto" : "none")};
//   }

//   input.input-error,
//   select.input-error {
//     margin: 15px 0 5px 0;
//     border-color: #fc8181;
//     background-color: #49312b;
//   }

//   button:disabled {
//     opacity: 0.35;
//   }

//   @media (max-width: 935px) {
//     .split {
//       display: flex;
//       flex-direction: column;
//       align-items: center;
//       justify-content: center;
//       width: 100%;
//       margin: 0;
//       padding: 0;
//     }

//     .form {
//       padding-top: 40px;
//       width: 100%;
//       height: 100vh;
//     }

//     .logo {
//       width: 100%;
//       height: 175px;
//       text-align: center;
//       padding-top: 10px;

//       h1 {
//         padding: 0 0 0 0vw;
//         font-size: 76px;
//         font-weight: 700;
//         line-height: 83px;
//       }

//       h3 {
//         font-size: 23px;
//         line-height: 34px;
//         padding: 0em 0px 0em 0vw;
//       }
//     }

//     form {
//       width: 100%;

//       h6 {
//         font-size: 17px;
//       }
//     }

//     input,
//     select {
//       font-size: 22px;
//     }

//     button {
//       font-size: 22px;
//     }
//   }
// `;

import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Form = styled.form`
  width: 30%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  position: fixed;
  right: 2%;
  font-family: "Montserrat", sans-serif;

  .form__field {
    font-family: inherit;
    width: 100%;
    border: 0;
    border-bottom: 2px solid #ac7435;
    outline: 0;
    font-size: 1.1rem;
    color: #f6f6f4;
    font-weight: 700;
    padding: 0px 0;
    background: transparent;
    transition: border-color 0.2s;

    &::placeholder {
      color: transparent;
    }
  }

  .form__label {
    transition: 0.2s;
    font-size: 1rem;
    color: #ac7435;
    /* font-weight: 700; */
  }

  .form__label:focus {
    transition: 0.2s;
    font-size: 1rem;
    color: #ac7435;
  }

  .form__field:focus {
    padding-bottom: 6px;
    font-weight: 700;
    border-width: 3px;
    border-image: linear-gradient(to right, #ac7435, #fff);
    border-image-slice: 1;
  }
  /* reset input */

  a {
    text-decoration: none;
    text-align: center;
    color: #ac7435;
    font-weight: 700;
  }

  p {
    text-align: center;
    color: #ac7435;
    font-weight: 700;
    font-size: 25px;
    margin-bottom: 40px;
  }

  button {
    border: 1mm solid #ac7435;
    height: 40px;
    border-radius: 50px;
    margin-top: 10px;
    background-color: #ac7435;
    color: #ffffff;
    font-size: 18px;
    width: 80%;
  }

  .submitButton {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  @media (max-width: 1140px) {
    position: inherit;
    width:80%;
    margin-bottom: 60px;

    .form__field {
    font-family: inherit;
    width: 100%;
    border: 0;
    border-bottom: 2px solid #ac7435;
    outline: 0;
    font-size: 1.0rem;
    color: #f6f6f4;
    font-weight: 700;
    padding: 0px 0;
    background: transparent;
    transition: border-color 0.2s;

    &::placeholder {
      color: transparent;
    }
  }

  .form__label {
    transition: 0.2s;
    font-size: 0.9rem;
    color: #ac7435;
    /* font-weight: 700; */
  }

  .form__label:focus {
    transition: 0.2s;
    font-size: 1rem;
    color: #ac7435;
  }

  .form__field:focus {
    padding-bottom: 6px;
    font-weight: 700;
    border-width: 3px;
    border-image: linear-gradient(to right, #ac7435, #fff);
    border-image-slice: 1;
  }
  /* reset input */

  a {
    font-size:14px;
  }

  p {
    font-size: 20px;
  }

  button {
    height: 30px;
    font-size: 16px;
    width: 70%;
  }
  }
`;
