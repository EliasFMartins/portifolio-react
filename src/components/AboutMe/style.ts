import styled from "styled-components";

export const AboutContainer = styled.main`
  width: 100vw;
  height: calc(100vh - 80px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: ${({ theme }) => theme.septenary};
`;
