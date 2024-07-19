import { render, screen } from "@testing-library/react";
import InputText from "./InputText";
import { BookieThemeProvider } from "../../context/themeContext";
import React from "react";

describe("InputText", () => {
  it("should render correctly", () => {
    render(
      <BookieThemeProvider>
        <InputText placeholder="입력 테스트" />
      </BookieThemeProvider>
    );
    expect(screen.getByPlaceholderText("입력 테스트")).toBeInTheDocument();
  });

  it("should apply placeholder props", () => {
    const { container } = render(
      <BookieThemeProvider>
        <InputText placeholder="입력 테스트" />
      </BookieThemeProvider>
    );
    expect(container.firstChild).toHaveAttribute("placeholder", "입력 테스트");
  });

  it("forward ref test", () => {
    const ref = React.createRef<HTMLInputElement>();
    render(
      <BookieThemeProvider>
        <InputText ref={ref} placeholder="입력 테스트" />
      </BookieThemeProvider>
    );
    expect(ref.current).toBeInstanceOf(HTMLInputElement);
  });
});
