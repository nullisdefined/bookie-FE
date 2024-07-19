import { render, screen } from "@testing-library/react";
import Title from "./Title";
import { BookieThemeProvider } from "../../context/themeContext";

describe("Title", () => {
  it("should render correctly", () => {
    render(
      <BookieThemeProvider>
        <Title size="large" color="primary">
          제목 테스트
        </Title>
      </BookieThemeProvider>
    );
    expect(screen.getByText("제목 테스트")).toBeInTheDocument();
  });

  it("apply size props", () => {
    const { container } = render(
      <BookieThemeProvider>
        <Title size="large" color="primary">
          제목 테스트
        </Title>
      </BookieThemeProvider>
    );
    expect(container.firstChild).toHaveStyle("font-size: 24px");
  });

  it("apply color props", () => {
    const { container } = render(
      <BookieThemeProvider>
        <Title size="large" color="primary">
          제목 테스트
        </Title>
      </BookieThemeProvider>
    );
    expect(container.firstChild).toHaveStyle("color: brown");
  });
});
