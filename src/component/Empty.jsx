import React from "react";
import styled from "styled-components";

const EmptyBlock = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

function Empty(props) {
  return (
    <EmptyBlock>
      <div>{props.text ? props.text : "저장된 항목이 없습니다."}</div>
      {props.children}
    </EmptyBlock>
  );
}

export default Empty;
