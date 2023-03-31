import { FormattedMessage } from "react-intl";
import { TimeCounter } from "../../../../components";
import { useAppSelector } from "../../../../store/hooks";
import * as S from "./Footer.styled";

export const Footer = () => {
  const articles: Article[] = useAppSelector((state) => state?.news?.articles);

  return (
    <S.Wrapper>
      <p>
        {`( ${articles.length} `}
        <FormattedMessage id="article" />
        {` )`}
      </p>
      <TimeCounter />
    </S.Wrapper>
  );
};
