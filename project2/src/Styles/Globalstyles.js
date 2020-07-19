import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
// 자바스크립트 import

// 백틱안은 css
export default createGlobalStyle`
    ${reset};
    @import url('https://fonts.googleapis.com/css?family=Open+Sans:400,600,700');
    * {
        box-sizing:border-box;
    }
    body {
        font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        font-size: 14px;
        padding-top:100px;
    }

    a {
        text-decoration:none;
    }
`;
