import styled from "styled-components";

export const Main = styled.main`
  overflow: hidden;
`;

export const Container = styled.div`
  display: flex;
  @media (max-width: 1140px) {
    flex-direction: column;
  }
`;

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;