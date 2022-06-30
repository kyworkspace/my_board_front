import React, { useContext, useState } from "react";
import { Typography } from "antd";
import { LikeOutlined, MessageOutlined, StarOutlined } from "@ant-design/icons";
import { Avatar, List, Space } from "antd";
import { BoardContext } from "routes/Board";
import { useNavigate } from "react-router-dom";
import { RoutePath } from "config/Enums";
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

function BoardList() {
  const navigate = useNavigate();

  const [boardList, setBoardList] = useState([]);
  const onBoardDetail = (item) => {
    setselectedBoardItem(item);
    navigate(`/${RoutePath.BOARD_MAIN}/${RoutePath.BOARD.DETAIL}`);
  };

  const { setselectedBoardItem } = useContext(BoardContext);

  return (
    <>
      <Typography.Title level={2}>게시판 목록</Typography.Title>
      <List
        itemLayout="vertical"
        size="large"
        pagination={{
          onChange: (page) => {
            console.log(page);
          },
          pageSize: 4,
        }}
        dataSource={data}
        renderItem={(item) => (
          <List.Item
            onClick={() => onBoardDetail(item)}
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
            extra={<img width={272} alt="logo" src={item.image} />}
          >
            <List.Item.Meta
              avatar={<Avatar src={item.avatar} />}
              title={<a href={item.href}>{item.title}</a>}
              description={item.description}
            />
            {item.content}
          </List.Item>
        )}
      />
    </>
  );
}

export default BoardList;
