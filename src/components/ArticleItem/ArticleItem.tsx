import { noNews } from "../../assets";
import { truncateText } from "../../utils";
import * as S from "./ArticleItem.styled";

type ArticleItemProps = {
  data: Article;
  advanced?: boolean;
};

export const ArticleItem = ({ data, advanced }: ArticleItemProps) => (
  <S.Wrapper advanced={advanced}>
    {advanced ? (
      <div>
        <S.ImageWrapper>
          <img
            src={data.urlToImage ? data.urlToImage : noNews}
            alt={data.title}
          />
        </S.ImageWrapper>
        <S.Title>{data.title}</S.Title>
        <S.Content>{data.content && truncateText(data.content, 80)}</S.Content>
      </div>
    ) : (
      <S.Title>{data.title}</S.Title>
    )}
    <S.InfoWrapper>
      <S.Info>{data.source.name}</S.Info>
      <S.Info>{data.publishedAt}</S.Info>
    </S.InfoWrapper>
  </S.Wrapper>
);
