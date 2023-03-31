import { render, screen } from "@testing-library/react";
import { TimeCounter } from "./TimeCounter";

describe("TimeCounter", () => {
  test("renders TimeCounter component", () => {
    render(<TimeCounter />);

    expect(screen.getByTestId("counter")).toBeInTheDocument();
  });
});
