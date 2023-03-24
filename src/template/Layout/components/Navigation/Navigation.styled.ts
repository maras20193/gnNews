import styled from "styled-components";

export const Wrapper = styled.nav`
  width: 200px;
  background-color: ${({ theme }) => theme.colors.background.primary};
  border-top: 4px solid ${({ theme }) => theme.colors.primary};
  border-bottom: 4px solid ${({ theme }) => theme.colors.primary};
`;
