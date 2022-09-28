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
  gap: 0.7rem;
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
    cursor: pointer;
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
    cursor: pointer;
    opacity: ${(props) => (props.enable ? "1" : "0.7")};
    pointer-events: ${(props) => (props.enable ? "auto" : "none")};
  }

  .submitButton {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .error {
    color: #fc8181;
    font-size: 0.75rem;
    text-align: left;
    margin-top: 0.2rem;
    margin-bottom: 0.6rem;
  }

  .form__field.input-error,
  select.input-error {
    margin: 0px 0 5px 0;
    border-color: #fc8181;
  }

  @media (max-width: 1140px) {
    position: inherit;
    width: 80%;
    margin-bottom: 60px;

    .form__field {
      font-family: inherit;
      width: 100%;
      border: 0;
      border-bottom: 2px solid #ac7435;
      outline: 0;
      font-size: 1rem;
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
      font-size: 14px;
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
