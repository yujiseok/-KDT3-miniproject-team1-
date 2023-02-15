import colors from "constants/colors";
import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

body {
  font-family: "Pretendard", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  background-color: #333;
  font-size: 16px;
  color: ${colors["GRAY-9"]};
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

button {
  cursor: pointer;
  border: none;
  background-color: transparent;
  font-family: inherit; 
  font-size: inherit;
}

a {
  text-decoration: none;
  color: inherit;
}

img {
  display: block;
}

input {
  border: none;
  outline: none;
  font-family: inherit;
  font-size: inherit;
}

.App {
  max-width: 390px;
  margin-inline: auto;
  background-color: #fff;
  height: 100vh;
}


`;

export default GlobalStyles;
