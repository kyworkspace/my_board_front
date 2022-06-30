import React, { createContext, useEffect, useState } from "react";

import { useLocation, useNavigate } from "react-router-dom";
import { RoutePath } from "config/Enums";
import BoardList from "component/board/BoardList";
import BoardDetail from "component/board/BoardDetail";
import BoardUpload from "component/board/BoardUpload";

export const BoardContext = createContext({
  selectedBoardItem: null,
  setselectedBoardItem: () => {},
});

function Board() {
  const location = useLocation();
  const navigate = useNavigate();

  const [selectedBoardItem, setselectedBoardItem] = useState();

  useEffect(() => {
    console.log(location);
  }, []);

  const value = {
    selectedBoardItem,
    setselectedBoardItem,
  };

  return (
    <BoardContext.Provider value={value}>
      {location.pathname ===
      `/${RoutePath.BOARD_MAIN}/${RoutePath.BOARD.LIST}` ? (
        <BoardList />
      ) : location.pathname ===
        `/${RoutePath.BOARD_MAIN}/${RoutePath.BOARD.DETAIL}` ? (
        <BoardDetail />
      ) : location.pathname ===
        `/${RoutePath.BOARD_MAIN}/${RoutePath.BOARD.UPLOAD}` ? (
        <BoardUpload />
      ) : null}
    </BoardContext.Provider>
  );
}

export default Board;
