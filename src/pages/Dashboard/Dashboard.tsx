import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchNews } from "../../store/features/newsSlice";
import { useAppDispatch, useAppSelector } from "../../store/hooks";

export const Dashboard = () => {
  const params = useParams();

  const view: string = useAppSelector((state) => state?.view?.displayStyle);
  const articles: News[] = useAppSelector((state) => state?.news?.articles);

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (params.countryName) {
      dispatch(fetchNews(params.countryName));
    } else {
      dispatch(fetchNews("pl"));
    }
  }, [params.countryName]);

  return (
    <div>
      <div>Mamy widok: {view}</div>
      <br />
      {articles.map((article) => (
        <p>{article.title}</p>
      ))}
    </div>
  );
};
