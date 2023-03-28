import styled from "styled-components";

export const Wrapper = styled.footer`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  gap: 20px;
  width: 100%;
  height: 60px;
  background-color: ${({ theme }) => theme.colors.background.primary};
  color: ${({ theme }) => theme.colors.text.primary};
  border-top: 3px solid ${({ theme }) => theme.colors.primary};
  padding: 0 24px;
`;
