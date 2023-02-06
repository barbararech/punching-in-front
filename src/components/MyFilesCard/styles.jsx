import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 80px;

  @media (max-width: 1140px) {
    padding: 40px 0px;
  }
`;

export const Description = styled.div`
  background-color: rgb(184, 194, 167, 0.2);
  border-radius: 3px;
  padding: 10px;
`;
