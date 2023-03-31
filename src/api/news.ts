import { config } from "../config";
import { api } from "./apiConfig";

export const getNews = (country: string) =>
  api.get<ArticlesResponse>(
    `/top-headlines?country=${country}&pageSize=100&apiKey=${config.API_KEY}`
  );
