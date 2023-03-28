import { ArticleItem } from "../../../../components";
import * as S from "./ListView.styled";

type ListViewProps = {
  data: Article[];
};

export const ListView = ({ data }: ListViewProps) => (
  <S.Wrapper>
    {data.map((article) => (
      <ArticleItem data={article} />
    ))}
  </S.Wrapper>
);
