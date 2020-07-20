import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export default createGlobalStyle`
  ${reset};
  body {
      font-size:14px;
  }
  a {
      text-decoration: none;
  }   
`;
