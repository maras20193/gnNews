import { FormattedMessage } from "react-intl";
import * as S from "./ThoughtsModalBody.styled";

export const ThoughtsModalBody = () => (
  <S.Wrapper>
    <S.Title>The coolest &#128512;:</S.Title>

    <FormattedMessage id="coolestThing" />

    <S.Title>The hardest &#x1f4aa;:</S.Title>
    <FormattedMessage id="hardestThing" />
  </S.Wrapper>
);
