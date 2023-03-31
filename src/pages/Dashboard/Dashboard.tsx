import { useEffect } from "react";
import { FormattedMessage } from "react-intl";
import { useParams } from "react-router-dom";
import { Loader } from "../../components";
import { messages } from "../../i18n/messages";
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
      <FormattedMessage id="hello" />
      {loading ? <Loader /> : <MainContent data={articles} />}
    </S.Wrapper>
  );
};
