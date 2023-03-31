import { changeLanguage } from "../../../../../../store/features/viewSlice";
import { useAppDispatch } from "../../../../../../store/hooks";
import * as S from "./DropdownButton.styled";

type DropdownButton = {
  title: string;
  lang: string;
  icon: string;
};

export const DropdownButton = ({ title, lang, icon }: DropdownButton) => {
  const dispatch = useAppDispatch();
  return (
    <S.Button type="button" onClick={() => dispatch(changeLanguage(lang))}>
      <S.ImageWrapper>
        <img src={icon} alt={`${title} flag`} />
      </S.ImageWrapper>
    </S.Button>
  );
};
