import { Input, Form, Button } from "antd";
import TextArea from "antd/lib/input/TextArea";
import { RoutePath } from "config/Enums";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BoardSerivce } from "service/BoardService";
import styled from "styled-components";

const UploadComponent = styled.div`
  padding: 20px;
`;

function BoardUpload() {
  const navigate = useNavigate();

  const [boardTitle, setBoardTitle] = useState("");
  const [boardContents, setBoardContents] = useState("");

  const onCancel = () => {
    if (window.confirm("진행 중이던 내용이 저장되지 않습니다.")) {
      navigate(`/${RoutePath.BOARD_MAIN}/${RoutePath.BOARD.LIST}`);
    }
  };

  const onSubmit = () => {
    const body = {
      boardTitle,
      boardContents,
      userId: window.sessionStorage.getItem("user"),
    };

    BoardSerivce.saveBoard(body)
      .then((res) => {
        if (res.data.success === "true") {
          navigate(`/${RoutePath.BOARD_MAIN}/${RoutePath.BOARD.LIST}`);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <UploadComponent>
      <Form onFinish={onSubmit}>
        <Form.Item
          label="게시물 제목"
          name="boardTitle"
          rules={[
            {
              required: true,
              message: "제목은 필수 입력입니다.",
            },
          ]}
        >
          <Input
            value={boardTitle}
            onChange={(e) => setBoardTitle(e.currentTarget.value)}
          />
        </Form.Item>
        <Form.Item label="게시물 내용" name="boardContents">
          <TextArea
            rows={10}
            value={boardContents}
            onChange={(e) => setBoardContents(e.currentTarget.value)}
          />
        </Form.Item>
        {/* <Form.Item label="파일 첨부" name="boardFile">
          <Input type={"file"} />
        </Form.Item>
        <Form.Item label="파일 첨부" name="boardFile">
          <Input type={"file"} />
        </Form.Item>
        <Form.Item label="파일 첨부" name="boardFile">
          <Input type={"file"} />
        </Form.Item>
        <Form.Item label="파일 첨부" name="boardFile">
          <Input type={"file"} />
        </Form.Item>
        <Form.Item label="파일 첨부" name="boardFile">
          <Input type={"file"} />
        </Form.Item> */}
        <Form.Item
          style={{
            textAlign: "end",
          }}
        >
          <Button htmlType="submit" type="primary">
            저장
          </Button>
          <Button
            htmlType="button"
            danger
            style={{ marginLeft: "25px" }}
            onClick={onCancel}
          >
            취소
          </Button>
        </Form.Item>
      </Form>
    </UploadComponent>
  );
}

export default BoardUpload;
