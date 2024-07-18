import { createContext, useEffect, useState } from "react";
import { ThemeName } from "../style/theme";
import { ThemeProvider } from "styled-components";
import { getTheme } from "../style/theme";
import { GlobalStyle } from "../style/global";

const DEFAULT_THEME_NAME = "light";
const THEME_LOCAL_STORAGE_KEY = "bookie_theme";

interface State {
  themeName: ThemeName;
  toggleTheme: () => void;
}

export const state = {
  themeName: "light" as ThemeName,
  toggleTheme: () => {},
};

export const ThemeContext = createContext<State>(state);

export const BookieThemeProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [themeName, setThemeName] = useState<ThemeName>("light");

  const toggleTheme = () => {
    setThemeName(themeName === "light" ? "dark" : "light");
    localStorage.setItem(
      THEME_LOCAL_STORAGE_KEY,
      themeName === "light" ? "dark" : "light"
    );
  };

  useEffect(() => {
    const savedThemeName = localStorage.getItem(
      THEME_LOCAL_STORAGE_KEY
    ) as ThemeName;
    if (savedThemeName) {
      setThemeName(savedThemeName);
    }
  }, []);

  return (
    <ThemeContext.Provider value={{ themeName, toggleTheme }}>
      <ThemeProvider theme={getTheme(themeName)}>
        <GlobalStyle themeName={themeName} />
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};
