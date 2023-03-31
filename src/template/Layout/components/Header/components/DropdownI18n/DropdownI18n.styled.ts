import styled from "styled-components";
import { device } from "../../../../../../styles";

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
