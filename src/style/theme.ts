export type ThemeName = "light" | "dark";
type ColorKey = "primary" | "background" | "secondary" | "third";

interface Theme {
  name: ThemeName;
  color: Record<ColorKey, string>;
}

export const light: Theme = {
  name: "light",
  color: {
    primary: "brown",
    background: "lightgrey",
    secondary: "deepskyblue",
    third: "deepgreen",
  },
};

export const dark: Theme = {
  name: "dark",
  color: {
    primary: "coral",
    background: "midnightblue",
    secondary: "darkblue",
    third: "darkgreen",
  },
};

export const getTheme = (themeName: ThemeName): Theme => {
  return themeName === "light" ? light : dark;
};