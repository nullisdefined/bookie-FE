import { useContext } from "react";
import { ThemeContext } from "../../context/themeContext";
import { ThemeName } from "../../style/theme";

function ThemeSwitcher() {
  const { themeName, toggleTheme } = useContext(ThemeContext);

  return (
    <>
      <button onClick={toggleTheme}>
        {themeName === "light" ? "Dark mode" : "Light mode"}
      </button>
    </>
  );
}

export default ThemeSwitcher;
