import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders bookie link", () => {
  render(<App />);
  const linkElement = screen.getByText(/bookie/i);
  expect(linkElement).toBeInTheDocument();
});
