import React from 'react';
import styled from 'styled-components';
import Item from "./Item";

const ListContainer = styled.ul`
  flex: 1;
  padding: 15px 10px;
  overflow-y:auto;
`;

function List() {
    return(
      <>
        <ListContainer>
            <Item/>
        </ListContainer>
      </>
    );
}

export default List;