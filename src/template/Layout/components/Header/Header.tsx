import { logo, pen } from "../../../../assets";
import * as S from "./Header.styled";

export const Header = () => (
  <S.Wrapper>
    <S.LogoWrapper>
      <img src={logo} alt="gnNews logo" />
    </S.LogoWrapper>
    <S.IconWrapper>
      <S.Icon>
        <img src={pen} alt="tiles view" />
      </S.Icon>
      <S.Icon>
        <img src={pen} alt="favourites " />
      </S.Icon>
    </S.IconWrapper>
  </S.Wrapper>
);
