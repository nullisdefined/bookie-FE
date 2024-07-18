import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import { GlobalStyle } from "./style/global";
import { getTheme, ThemeName } from "./style/theme";
import ThemeSwitcher from "./components/header/ThemeSwitcher";
import { useContext, useState } from "react";
import { BookieThemeProvider, ThemeContext } from "./context/themeContext";
import { ThemeProvider } from "styled-components";

function App() {
  const { themeName, toggleTheme } = useContext(ThemeContext);

  return (
    <BookieThemeProvider>
      <ThemeSwitcher />
      <Layout>
        <Home />
      </Layout>
    </BookieThemeProvider>
  );
}

export default App;
