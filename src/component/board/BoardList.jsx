import React, { useContext, useEffect, useState } from "react";
import { Button, Typography } from "antd";
import { LikeOutlined, MessageOutlined, StarOutlined } from "@ant-design/icons";
import { Avatar, List, Space } from "antd";
import { BoardContext } from "routes/Board";
import { Route, useNavigate } from "react-router-dom";
import { RoutePath } from "config/Enums";
import styled from "styled-components";
import { BoardSerivce } from "service/BoardService";
import Empty from "component/Empty";
const IconText = ({ icon, text }) => (
  <Space>
    {React.createElement(icon)}
    {text}
  </Space>
);

const data = Array.from({
  length: 23,
}).map((_, i) => ({
  href: "https://ant.design",
  title: `ant design part ${i}`,
  avatar: "https://joeschmoe.io/api/v1/random",
  description:
    "Ant Design, a design language for background applications, is refined by Ant UED Team.",
  content:
    "We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.",
  image: true ? "https://picsum.photos/300/200" : "pic",
}));

const EditBar = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  padding-right: 30px;
  padding-top: 30px;
`;

const BoardTitle = styled.div`
  cursor: pointer;
  font-weight: bold;
`;

function BoardList() {
  const navigate = useNavigate();

  const [boardList, setBoardList] = useState([]);
  const [pageSize, setPageSize] = useState(4);
  const [pageNumber, setPageNumber] = useState(1);

  useEffect(() => {
    getBoardList();
  }, []);

  const onBoardDetail = (item) => {
    setselectedBoardItem(item);
    navigate(`/${RoutePath.BOARD_MAIN}/${RoutePath.BOARD.DETAIL}`);
  };

  const { setselectedBoardItem } = useContext(BoardContext);

  const onMoveToUpload = (e) => {
    e.preventDefault();
    navigate(`/${RoutePath.BOARD_MAIN}/${RoutePath.BOARD.UPLOAD}`);
  };

  const getBoardList = () => {
    BoardSerivce.getBoardList({ pageSize, pageNumber }).then((res) => {
      setBoardList(res.data.data);
    });
  };

  return (
    <>
      <EditBar>
        <Button type="primary" onClick={onMoveToUpload}>
          업로드
        </Button>
      </EditBar>
      {boardList.length > 0 ? (
        <List
          itemLayout="vertical"
          size="large"
          pagination={{
            onChange: (page) => {
              console.log(page);
            },
            pageSize: pageSize,
          }}
          dataSource={boardList}
          renderItem={(item) => (
            <List.Item
              key={item.title}
              actions={[
                // 즐겨찾기
                <IconText
                  icon={StarOutlined}
                  text="156"
                  key="list-vertical-star-o"
                />,
                // 좋아요
                <IconText
                  icon={LikeOutlined}
                  text="156"
                  key="list-vertical-like-o"
                />,
                //댓글 수
                <IconText
                  icon={MessageOutlined}
                  text="2"
                  key="list-vertical-message"
                />,
              ]}
              extra={
                <img
                  width={272}
                  alt="logo"
                  src={item.image || "https://picsum.photos/300/200"}
                />
              }
            >
              <List.Item.Meta
                avatar={<Avatar src={item.avatar} />}
                title={
                  <BoardTitle onClick={() => onBoardDetail(item)}>
                    {item.boardTitle}
                  </BoardTitle>
                }
                description={
                  item.boardContents.length > 100
                    ? `${item.boardContents.slice(0, 150)}...`
                    : item.boardContents
                }
              />
              {item.content}
            </List.Item>
          )}
        />
      ) : (
        <Empty text={"저장된 게시물이 없습니다."}>
          <Button type="primary" onClick={onMoveToUpload}>
            업로드
          </Button>
        </Empty>
      )}
    </>
  );
}

export default BoardList;
