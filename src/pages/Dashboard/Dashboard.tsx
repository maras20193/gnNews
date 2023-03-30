import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchNews } from "../../store/features/newsSlice";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { MainContent } from "./components";
import * as S from "./Dashboard.styled";

export const Dashboard = () => {
  const params = useParams();

  const articles: Article[] = useAppSelector((state) => state?.news?.articles);

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (params.countryName) {
      dispatch(fetchNews(params.countryName));
    } else {
      dispatch(fetchNews("us"));
    }
  }, [params.countryName]);

  return (
    <S.Wrapper>
      <MainContent data={articles} />
    </S.Wrapper>
  );
};
