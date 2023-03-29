import styled from "styled-components";
import { device } from "../../../../styles";

export const Wrapper = styled.nav`
  max-width: 80px;
  background-color: ${({ theme }) => theme.colors.background.primary};
  position: fixed;
  height: calc(100vh - 70px - 60px - 20px);
  overflow-y: auto;

  @media ${device.tablet} {
    min-width: 250px;
    height: calc(100vh - 84px - 60px - 20px);
  }

  ::-webkit-scrollbar {
    width: 6px;
  }

  ::-webkit-scrollbar-track {
    background-color: ${({ theme }) => theme.colors.background.primary};
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.colors.primary};
    border-radius: 10px;

    &:hover {
      background-color: ${({ theme }) => theme.colors.primaryHover};
    }
  }
`;

export const Nav = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 10px;
  margin-bottom: 10px;
`;
