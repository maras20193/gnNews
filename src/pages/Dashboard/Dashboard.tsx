import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getNews } from "../../api/news";

type News = {
  source: {
    id: string;
    name: string;
  };
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
};

export const Dashboard = () => {
  const [countries, setCountries] = useState<News[]>([]);
  const params = useParams();

  const fetchNews = async (country: string) => {
    try {
      const response = await getNews(country);
      setCountries(response.data.articles);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (params.countryName) {
      fetchNews(params.countryName);
    } else {
      fetchNews("pl");
    }
  }, [params.countryName]);

  return (
    <div>
      {countries.map((country) => (
        <p>{country.title}</p>
      ))}
    </div>
  );
};
