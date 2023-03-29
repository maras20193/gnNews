import styled from "styled-components";
import { device } from "../../../../styles";

export const Wrapper = styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.background.primary};
  border-bottom: 3px solid ${({ theme }) => theme.colors.primary};
  position: fixed;
  z-index: 10;

  margin: 0 auto;
  height: 70px;
  padding: 0 24px;

  @media ${device.tablet} {
    height: 84px;
    padding: 0 60px;
  }
  @media ${device.laptop} {
    padding: 0 90px;
  }
`;

export const LogoWrapper = styled.div`
  width: 110px;
  margin-top: 8px;
  cursor: pointer;

  @media ${device.tablet} {
    width: 130px;
  }

  img {
    width: 100%;
  }
`;

export const IconsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 16px;
`;

export const IconButton = styled.button`
  display: flex;
  flex-direction: row;
  cursor: pointer;
  background-color: transparent;
  border: none;

  @media ${device.tablet} {
    width: 24px;
  }

  span {
    font-size: 24px;
    color: ${({ theme }) => theme.colors.primary};
    transition: 0.3s;

    &:hover {
      opacity: 0.5;
      transform: scale(1.2);
    }
  }
`;
