import { ArticleItem } from "../../../../components";
import { config } from "../../../../config";
import { useAppSelector } from "../../../../store/hooks";
import * as S from "./MainContent.styled";

type MainContentProps = {
  data: Article[];
};

export const MainContent = ({ data }: MainContentProps) => {
  const view: string = useAppSelector((state) => state?.view?.displayStyle);
  return (
    <div>
      {view === config.VIEW_VARIANTS.LINES ? (
        <S.LinesWrapper>
          {data.map((article) => (
            <ArticleItem data={article} key={article.title} />
          ))}
        </S.LinesWrapper>
      ) : (
        <S.TilesWrapper>
          {data.map((article) => (
            <ArticleItem data={article} key={article.title} advanced />
          ))}
        </S.TilesWrapper>
      )}
    </div>
  );
};
