import styled from "styled-components";
import { device } from "../../styles";

export const Wrapper = styled.div`
  display: flex;
  padding: 30px 20px 30px 20px;
  background-color: ${({ theme }) => theme.colors.background.primary};
  height: calc(100vh - 84px - 60px - 20px);
  width: calc(100vw - 85px);

  @media ${device.tablet} {
    width: calc(100vw - 255px);
  }

  overflow-y: scroll;

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
