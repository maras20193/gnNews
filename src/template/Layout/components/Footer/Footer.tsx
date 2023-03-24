import { TimeCounter } from "../../../../components";
import * as S from "./Footer.styled";

export const Footer = () => (
  <S.Wrapper>
    <p>(X articles)</p>
    <TimeCounter />
  </S.Wrapper>
);
