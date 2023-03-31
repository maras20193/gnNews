import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Loader } from "../../components";
import { fetchNews } from "../../store/features/newsSlice";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { MainContent } from "./components";
import * as S from "./Dashboard.styled";

export const Dashboard = () => {
  const params = useParams();

  const { articles, loading } = useAppSelector((state) => state?.news);

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
      {loading ? <Loader /> : <MainContent data={articles} />}
    </S.Wrapper>
  );
};
