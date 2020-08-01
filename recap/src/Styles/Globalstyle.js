import {createGlobalStyle} from 'styled-components';
import reset from 'styled-reset';

export default createGlobalStyle`
${reset}
body {
  background:powderblue;
  @import url('https://fonts.googleapis.com/css2?family=Lobster&display=swap');
  font-family: 'Lobster', cursive;
}
`;