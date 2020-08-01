import React from 'react';
import styled from 'styled-components';

const ContainerBox = styled.div`
  width: 512px;
  height: 860px;
  background: pink;
  margin: 0 auto;
  
  display: flex;
  flex-direction: column;
  
  position: relative;
  
`;
function Container({children}) {
        return(
            <ContainerBox>{children}</ContainerBox>
        );
}

export default Container;