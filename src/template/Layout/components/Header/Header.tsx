import { logo, pen } from "../../../../assets";
import { config } from "../../../../config";
import { changeView } from "../../../../store/features/viewSlice";
import { useAppDispatch } from "../../../../store/hooks";
import * as S from "./Header.styled";

export const Header = () => {
  const dispatch = useAppDispatch();

  return (
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
        <button
          type="button"
          onClick={() => dispatch(changeView(config.VIEW_VARIANTS.LINES))}
        >
          LINES
        </button>
        <button
          type="button"
          onClick={() => dispatch(changeView(config.VIEW_VARIANTS.TILES))}
        >
          TILES
        </button>
      </S.IconWrapper>
    </S.Wrapper>
  );
};
