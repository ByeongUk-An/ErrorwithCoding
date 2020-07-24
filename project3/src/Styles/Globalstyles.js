import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export default createGlobalStyle`
  ${reset};
  body {
      font-size:14px;
      width:100%;
      box-sizing:border-box;
  }
  a {
      text-decoration: none;
  }   
`;
