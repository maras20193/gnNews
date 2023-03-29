import styled from "styled-components";
import { device } from "../../styles";

export const Wrapper = styled.article<{ advanced?: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  gap: 4px;
  background-color: ${({ theme }) => theme.colors.background.primaryLight};
  padding: 16px 12px;
  border-radius: 10px;
  transition: 0.3s;
  cursor: pointer;

  width: ${({ advanced }) => (advanced ? "100%" : null)};

  @media ${device.mobileXL} {
    width: ${({ advanced }) => (advanced ? "45%" : null)};
  }

  @media ${device.tablet} {
    padding: 20px;
  }

  @media ${device.laptop} {
    width: ${({ advanced }) => (advanced ? "30%" : null)};
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary};
  }
`;

export const Title = styled.h1`
  font-weight: 600;
  line-height: 20px;
  align-self: flex-start;
  margin-bottom: 6px;
  transition: 0.3s;
`;

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
  align-self: flex-end;
`;

export const Info = styled.p`
  font-size: 14px;
  opacity: 0.7;
  align-self: flex-end;
`;
export const Content = styled.p`
  margin-top: 10px;
  margin-bottom: 10px;
`;
export const ImageWrapper = styled.div`
  width: 100%;
  margin-bottom: 6px;
  background-color: black;

  height: 140px;

  @media ${device.mobileL} {
    height: 280px;
  }

  @media ${device.mobileXL} {
    height: 180px;
  }

  @media ${device.laptop} {
    height: 160px;
  }

  @media ${device.laptopM} {
    height: 240px;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;
