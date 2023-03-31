import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { theme } from "../../styles";
import { CountryLink } from "./CountryLink";

describe("CountryLink", () => {
  test("renders img", () => {
    render(
      <ThemeProvider theme={theme}>
        <Router>
          <CountryLink name="Poland" symbol="PL" />
        </Router>
      </ThemeProvider>
    );
    expect(screen.getByRole("img")).toBeInTheDocument();
    expect(screen.getByRole("img")).toHaveAttribute(
      "src",
      "https://flagsapi.com/PL/shiny/32.png"
    );
    expect(screen.getByRole("img")).toHaveAttribute("alt", "Poland flag");
  });

  test("link has a href attribute", () => {
    render(
      <ThemeProvider theme={theme}>
        <Router>
          <CountryLink name="Poland" symbol="PL" />
        </Router>
      </ThemeProvider>
    );
    expect(screen.getByRole("link")).toHaveAttribute("href", "/country/pl");
  });

  test("render CountryLink on desktop width", () => {
    render(
      <ThemeProvider theme={theme}>
        <Router>
          <CountryLink name="Poland" symbol="PL" />
        </Router>
      </ThemeProvider>
    );

    global.innerWidth = 1400;
    global.dispatchEvent(new Event("resize"));

    expect(screen.getByText("Poland")).toBeInTheDocument();
  });
});
