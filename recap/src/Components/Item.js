import React from 'react';
import styled, {css} from 'styled-components';
import {MdDone, MdDelete} from "react-icons/md";
import {} from '../Context/Context';

const Remove = styled.div`
  opacity:1;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ab183b;
  font-size: 24px;
  cursor: pointer;
  &:hover {
  color:#ff6b6b;
  }
  .done {
  display: flex;
  }
  .remove {
  display:none;
  }
`;
const Check = styled.div`
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background: #ab183b;
  font-size: 24px;
  cursor: pointer;
`;
const Text = styled.div`
  flex:1;
  font-size: 21px;
  color: #dcdcdc;
`;
const ItemBox = styled.li`
  display: flex;
  align-items: center;
  height: 48px;
`;

function Item() {
    return(
      <>
        <ItemBox>
            <Check done={done}></Check>
            <Text done={done}>{text}</Text>
            <Remove>
                {done && <MdDone className="done" />}
                <MdDelete className="remove" />
            </Remove>
        </ItemBox>
      </>
    );
}

export default Item;