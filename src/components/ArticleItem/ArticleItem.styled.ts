import styled from "styled-components";
import { device } from "../../styles";

export const Wrapper = styled.article`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 4px;
  background-color: ${({ theme }) => theme.colors.background.primaryLight};
  padding: 16px 12px;
  border-radius: 10px;
  transition: 0.3s;
  cursor: pointer;

  @media ${device.tablet} {
    padding: 20px;
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

export const Info = styled.p`
  font-size: 14px;
  opacity: 0.7;
`;
