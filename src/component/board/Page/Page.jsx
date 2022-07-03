import React from "react";
import styled from "styled-components";

const PageComponent = styled.div`
  width: 100%;
  height: 100%;
  background-color: #cbe6ff;
  padding: 15px;

  & .page_title {
    font-weight: bold;
    font-size: 1.5rem;
  }
`;

const BodyComponent = styled.div`
  border: 3px solid;
  border-bottom: unset;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;

  background: white;
  overflow-y: auto;
  height: 85vh;
  margin-top: 20px;

  &::-webkit-scrollbar {
    width: 3px; /*스크롤바의 너비*/
  }

  &::-webkit-scrollbar-thumb {
    background-color: #1890ff; /*스크롤바의 색상*/
  }

  &::-webkit-scrollbar-track {
    background-color: #cbe6ff; /*스크롤바 트랙 색상*/
  }
`;

function Page(props) {
  return (
    <PageComponent>
      <div className="page_title">{props.title}</div>
      <BodyComponent>{props.children}</BodyComponent>
    </PageComponent>
  );
}

export default Page;
