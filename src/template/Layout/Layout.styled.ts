import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.background.primary};
`;

export const MainWrapper = styled.main`
  display: flex;
  flex-direction: row;
  background-color: ${({ theme }) => theme.colors.background.secondary};
  flex-grow: 1;
`;

export const Content = styled.div``;
