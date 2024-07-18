import { createGlobalStyle } from "styled-components";
import "sanitize.css";
import { ThemeName } from "./theme";

interface Props {
  themeName: ThemeName;
}

export const GlobalStyle = createGlobalStyle<Props>`
  body {
    padding: 0;
    margin: 0;
    background-color: ${(props) =>
      props.themeName === "light" ? "white" : "black"};
    color: ${(props) => (props.themeName === "light" ? "black" : "white")};
    transition: background-color 0.3s, color 0.3s;
  }

  h1 {
    margin: 0;
    color: ${(props) => (props.themeName === "light" ? "black" : "white")};
  }

  p {
    color: ${(props) => (props.themeName === "light" ? "gray" : "lightgray")};
  }

  a {
    color: ${(props) => (props.themeName === "light" ? "blue" : "lightblue")};
    text-decoration: none;
  }

  button {
    background-color: ${(props) =>
      props.themeName === "light" ? "lightgray" : "darkgray"};
    color: ${(props) => (props.themeName === "light" ? "black" : "white")};
    border: none;
    padding: 10px;
    cursor: pointer;
    transition: background-color 0.3s, color 0.3s;
  }

  * {
    box-sizing: border-box;
  }
`;
