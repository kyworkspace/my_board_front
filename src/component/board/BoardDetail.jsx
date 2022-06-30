import React, { useContext, useEffect } from "react";
import { BoardContext } from "routes/Board";

function BoardDetail() {
  const { selectedBoardItem } = useContext(BoardContext);
  console.log(selectedBoardItem);

  useEffect(() => {
    // 상세내용 불러오기
  }, []);

  return <div>BoardDetail</div>;
}

export default BoardDetail;
