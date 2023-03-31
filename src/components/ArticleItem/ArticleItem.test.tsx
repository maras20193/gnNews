import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { theme } from "../../styles";
import { ArticleItem } from "./ArticleItem";

describe("ArticleItem", () => {
  const mockData = {
    source: {
      id: "1",
      name: "Test source",
    },
    author: "Author",
    title: "Test Title",
    description: "Test description",
    url: "https://www.newsnationnow.com/us-news/cdc-warns-of-drug-resistant-deadly-fungus-how-is-it-spread/",
    urlToImage:
      "https://www.newsnationnow.com/wp-content/uploads/sites/108/2023/03/GettyImages-1363494943-1.jpg?w=1280",
    publishedAt: "23:03:1993",
    content: "Content",
  };

  test("renders ArticleItem component", () => {
    render(
      <ThemeProvider theme={theme}>
        <Router>
          <ArticleItem data={mockData} />
        </Router>
      </ThemeProvider>
    );

    expect(screen.getByTestId("articleItem")).toBeInTheDocument();
    expect(screen.getByText("Test Title")).toBeInTheDocument();
    expect(screen.getByText("Test source")).toBeInTheDocument();
    expect(screen.getByText("23:03:1993")).toBeInTheDocument();
  });

  test("renders ArticleItem component with styles", () => {
    render(
      <ThemeProvider theme={theme}>
        <Router>
          <ArticleItem data={mockData} />
        </Router>
      </ThemeProvider>
    );

    expect(screen.getByTestId("articleItem")).toHaveStyle(
      `display: flex; padding: 16px 12px; background-color: ${theme.colors.background.primaryLight}`
    );
    expect(screen.getByText("Test Title")).toHaveStyle("font-weight: 600");
  });

  test("renders ArticleItem with advanced prop", () => {
    render(
      <ThemeProvider theme={theme}>
        <Router>
          <ArticleItem data={mockData} advanced />
        </Router>
      </ThemeProvider>
    );

    expect(screen.getByTestId("articleItem")).toBeInTheDocument();
    expect(screen.getByText("Test description")).toBeInTheDocument();
    expect(screen.getByRole("img")).toBeInTheDocument();
  });

  test("renders ArticleItem with advanced prop with styles", () => {
    render(
      <ThemeProvider theme={theme}>
        <Router>
          <ArticleItem data={mockData} advanced />
        </Router>
      </ThemeProvider>
    );

    expect(screen.getByTestId("articleItem")).toHaveStyle(`width: 100%`);
    expect(screen.getByText("Test Title")).toHaveStyle("font-weight: 600");
    expect(screen.getByRole("img")).toHaveStyle("width: 100%; height: 100%");
  });

  test("modal open properly", () => {
    render(
      <ThemeProvider theme={theme}>
        <Router>
          <ArticleItem data={mockData} />
        </Router>
      </ThemeProvider>
    );
    fireEvent.click(screen.getByTestId("articleItem"));
    expect(screen.getByText("Content")).toBeInTheDocument();
  });
});
