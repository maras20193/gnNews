import * as S from "./ArticleItem.styled";

type ArticleItemProps = {
  data: Article;
};

export const ArticleItem = ({ data }: ArticleItemProps) => (
  <S.Wrapper>
    <S.Title>{data.title}</S.Title>
    <S.Info>{data.source.name}</S.Info>
    <S.Info>{data.publishedAt}</S.Info>
  </S.Wrapper>
);
