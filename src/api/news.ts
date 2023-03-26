import { config } from "../config";
import { api } from "./apiConfig";

export const getNews = (country: string) =>
  api.get(`/top-headlines?country=${country}&apiKey=${config.API_KEY}`);
