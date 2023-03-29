import styled from "styled-components";
import { device } from "../../../../styles";

export const LinesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-width: calc(100vw - 78px);

  @media ${device.tablet} {
    max-width: calc(100vw - 245px);
  }
`;

export const TilesWrapper = styled(LinesWrapper)`
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`;
