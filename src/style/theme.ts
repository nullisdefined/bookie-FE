export type ThemeName = "light" | "dark";

export type ColorKey =
  | "primary"
  | "background"
  | "secondary"
  | "third"
  | "border"
  | "text";

export type HeadingSize = "large" | "medium" | "small";

export type ButtonSize = "Large" | "Medium" | "Small";

export type ButtonSchema = "primary" | "normal";

export type LayoutWidth = "large" | "medium" | "small";

interface Theme {
  name: ThemeName;
  color: Record<ColorKey, string>;
  heading: {
    [key in HeadingSize]: {
      fontSize: string;
      fontWeight: number;
    };
  };
  button: {
    [key in ButtonSize]: {
      fontSize: string;
      padding: string;
    };
  };
  buttonSchema: {
    [key in ButtonSchema]: {
      color: string;
      backgroundColor: string;
    };
  };
  borderRadius: {
    default: string;
  };
  layout: {
    width: {
      [key in LayoutWidth]: string;
    };
  };
}

export const light: Theme = {
  name: "light",
  color: {
    primary: "rgb(160, 99, 230)",
    background: "lightgrey",
    secondary: "deepskyblue",
    third: "deepgreen",
    border: "lightgrey",
    text: "black",
  },
  heading: {
    large: {
      fontSize: "24px",
      fontWeight: 700,
    },
    medium: {
      fontSize: "18px",
      fontWeight: 500,
    },
    small: {
      fontSize: "12px",
      fontWeight: 300,
    },
  },
  button: {
    Large: {
      fontSize: "18px",
      padding: "10px 20px",
    },
    Medium: {
      fontSize: "14px",
      padding: "8px 16px",
    },
    Small: {
      fontSize: "12px",
      padding: "6px 12px",
    },
  },
  buttonSchema: {
    primary: {
      color: "white",
      backgroundColor: "midnightblue",
    },
    normal: {
      color: "black",
      backgroundColor: "lightgrey",
    },
  },
  borderRadius: {
    default: "4px",
  },
  layout: {
    width: {
      large: "1020px",
      medium: "760px",
      small: "320px",
    },
  },
};

export const dark: Theme = {
  ...light,
  name: "dark",
  color: {
    primary: "coral",
    background: "midnightblue",
    secondary: "darkblue",
    third: "darkgreen",
    border: "lightgrey",
    text: "white",
  },
};

export const getTheme = (themeName: ThemeName): Theme => {
  return themeName === "light" ? light : dark;
};
