import React, { useContext, useEffect } from "react";
import { BoardContext } from "routes/Board";
import { BoardSerivce } from "service/BoardService";

function BoardDetail(props) {
  const { selectedBoardItem } = useContext(BoardContext);

  useEffect(() => {
    // 상세내용 불러오기
  }, []);

  const getBoardDetail = () => {
    const body = {
      boardId: selectedBoardItem.boardId,
    };
    return false;

    BoardSerivce.getBaordDetail(body).then((res) => console.log(res));
  };

  return <div>BoardDetail</div>;
}

export default BoardDetail;
