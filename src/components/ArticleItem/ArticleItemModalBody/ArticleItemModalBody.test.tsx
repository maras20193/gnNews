import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { theme } from "../../../styles";
import { ArticleItemModalBody } from "./ArticleItemModalBody";

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

  test("renders ArticleItemModalBody component", () => {
    render(
      <ThemeProvider theme={theme}>
        <Router>
          <ArticleItemModalBody data={mockData} />
        </Router>
      </ThemeProvider>
    );

    expect(screen.getByTestId("articleItemModalBody")).toBeInTheDocument();
    expect(screen.getByText("Content")).toBeInTheDocument();
    expect(screen.getByText("Author")).toBeInTheDocument();
    expect(
      screen.getByText(
        "https://www.newsnationnow.com/us-news/cdc-warns-of-drug-resi..."
      )
    ).toBeInTheDocument();
    expect(screen.getByRole("img")).toBeInTheDocument();
  });

  test("check a link has href", () => {
    render(
      <ThemeProvider theme={theme}>
        <Router>
          <ArticleItemModalBody data={mockData} />
        </Router>
      </ThemeProvider>
    );

    expect(screen.getByRole("link")).toHaveAttribute(
      "href",
      "https://www.newsnationnow.com/us-news/cdc-warns-of-drug-resistant-deadly-fungus-how-is-it-spread/"
    );
  });
});
