import { render, screen } from "@testing-library/react";
import Button from "./Button";
import { BookieThemeProvider } from "../../context/themeContext";

describe("Button", () => {
  it("should render correctly", () => {
    render(
      <BookieThemeProvider>
        <Button size="Large" schema="normal" disabled>
          버튼 테스트
        </Button>
      </BookieThemeProvider>
    );
    expect(screen.getByText("버튼 테스트")).toBeInTheDocument();
  });

  it("apply size props", () => {
    const { container } = render(
      <BookieThemeProvider>
        <Button size="Large" schema="normal" disabled>
          버튼 테스트
        </Button>
      </BookieThemeProvider>
    );
    expect(container.firstChild).toHaveStyle("font-size: 18px");
  });

  it("apply schema props", () => {
    const { container } = render(
      <BookieThemeProvider>
        <Button size="Large" schema="normal" disabled>
          버튼 테스트
        </Button>
      </BookieThemeProvider>
    );
    expect(container.firstChild).toHaveStyle("background-color: lightgrey");
    expect(container.firstChild).toHaveStyle("color: black");
  });
});
