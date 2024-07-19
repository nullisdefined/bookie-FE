import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import ThemeSwitcher from "./components/header/ThemeSwitcher";
import { useContext } from "react";
import { BookieThemeProvider, ThemeContext } from "./context/themeContext";

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
