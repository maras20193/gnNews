import { noNews } from "../../../assets";
import { truncateText } from "../../../utils";
import * as S from "./ArticleItemModalBody.styled";

type ArticleItemModalBodyProps = {
  data: Article;
};

export const ArticleItemModalBody = ({ data }: ArticleItemModalBodyProps) => (
  <S.Wrapper>
    <S.ImageWrapper>
      <img src={data.urlToImage ? data.urlToImage : noNews} alt={data.title} />
    </S.ImageWrapper>
    <p>{data.content}</p>
    <S.Author>{data.author}</S.Author>
    <S.ArticleLink href={data.url} rel="noreferrer nofollow" target="_blank">
      {truncateText(data.url, 60)}
    </S.ArticleLink>
  </S.Wrapper>
);
