import styled from "styled-components";

export const Wrapper = styled.nav<{ isOpen: boolean }>`
  min-width: ${({ isOpen }) => (isOpen ? "250px" : "80px")};
  background-color: ${({ theme }) => theme.colors.background.primary};
  border-top: 4px solid ${({ theme }) => theme.colors.primary};
  border-bottom: 4px solid ${({ theme }) => theme.colors.primary};
`;

export const Nav = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 20px;
  margin-bottom: 20px;
`;
