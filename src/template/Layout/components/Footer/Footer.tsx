import { TimeCounter } from "../../../../components";
import { useAppSelector } from "../../../../store/hooks";
import * as S from "./Footer.styled";

export const Footer = () => {
  const articles: News[] = useAppSelector((state) => state?.news?.articles);

  return (
    <S.Wrapper>
      <p>{`(${articles.length} articles)`}</p>
      <TimeCounter />
    </S.Wrapper>
  );
};
