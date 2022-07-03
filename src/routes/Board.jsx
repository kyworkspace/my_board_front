import React, { createContext, useEffect, useState } from "react";

import { useLocation, useNavigate } from "react-router-dom";
import { RoutePath } from "config/Enums";
import BoardList from "component/board/BoardList";
import BoardDetail from "component/board/BoardDetail";
import BoardUpload from "component/board/BoardUpload";
import Page from "component/board/Page/Page";

export const BoardContext = createContext({
  selectedBoardItem: null,
  setselectedBoardItem: () => {},
});

function Board() {
  const location = useLocation();
  const navigate = useNavigate();

  const [selectedBoardItem, setselectedBoardItem] = useState();

  const value = {
    selectedBoardItem,
    setselectedBoardItem,
  };

  return (
    <BoardContext.Provider value={value}>
      {location.pathname ===
      `/${RoutePath.BOARD_MAIN}/${RoutePath.BOARD.LIST}` ? (
        <Page title="게시판 목록">
          <BoardList />
        </Page>
      ) : location.pathname ===
        `/${RoutePath.BOARD_MAIN}/${RoutePath.BOARD.DETAIL}` ? (
        <Page title={"상세보기"}>
          <BoardDetail />
        </Page>
      ) : location.pathname ===
        `/${RoutePath.BOARD_MAIN}/${RoutePath.BOARD.UPLOAD}` ? (
        <Page title={"게시물 저장"}>
          <BoardUpload />
        </Page>
      ) : null}
    </BoardContext.Provider>
  );
}

export default Board;
