import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getNews } from "../../api/news";

type initialStateType = {
  articles: Article[];
  loading: boolean;
  error: boolean;
};

const initialState: initialStateType = {
  articles: [],
  loading: false,
  error: false,
};

export const fetchNews = createAsyncThunk(
  "news/fetchNews",
  async (country: string) => {
    const response = await getNews(country);
    return response.data.articles;
  }
);

export const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchNews.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchNews.rejected, (state) => {
      state.loading = false;
      state.error = true;
    });
    builder.addCase(fetchNews.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.articles = payload;
    });
  },
});

export default newsSlice.reducer;
