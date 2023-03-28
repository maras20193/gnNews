import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { config } from "../../config";
import { fetchNews } from "../../store/features/newsSlice";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { ListView } from "./components";
import * as S from "./Dashboard.styled";

export const Dashboard = () => {
  const params = useParams();

  const view: string = useAppSelector((state) => state?.view?.displayStyle);
  const articles: Article[] = useAppSelector((state) => state?.news?.articles);

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (params.countryName) {
      dispatch(fetchNews(params.countryName));
    } else {
      dispatch(fetchNews("pl"));
    }
  }, [params.countryName]);

  return (
    <S.Wrapper>
      {view === config.VIEW_VARIANTS.LINES ? (
        <ListView data={articles} />
      ) : null}
    </S.Wrapper>
  );
};
