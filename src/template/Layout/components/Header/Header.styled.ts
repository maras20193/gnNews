import styled from "styled-components";
import { device } from "../../../../styles";

export const Wrapper = styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.background.primary};

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

export const IconWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 12px;
`;

export const Icon = styled.div`
  display: flex;
  flex-direction: row;
  width: 20px;

  @media ${device.tablet} {
    width: 24px;
  }

  img {
    width: 100%;
  }
`;
