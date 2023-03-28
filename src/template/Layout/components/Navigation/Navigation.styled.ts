import styled from "styled-components";
import { device } from "../../../../styles";

export const Wrapper = styled.nav`
  max-width: 80px;
  background-color: ${({ theme }) => theme.colors.background.primary};

  @media ${device.tablet} {
    min-width: 250px;
  }
`;

export const Nav = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 20px;
  margin-bottom: 20px;
`;
