import Input from "antd/lib/input/Input";
import { Row, Col, Form, Button } from "antd";
import React, { useState } from "react";
import UserService from "service/UserService";
import { useNavigate } from "react-router-dom";
import { RoutePath } from "config/Enums";

function Login() {
  const [userId, setUserId] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const navigate = useNavigate();

  const onFinish = async (values) => {
    const data = await UserService.Login(values);
    if (data.success === "true") {
      window.sessionStorage.setItem("user", data.userId);
      navigate(`/`);
    } else {
      alert(data.message);
    }
  };

  return (
    <div>
      <Form onFinish={onFinish}>
        <Form.Item label={"USER ID"} name={"userId"}>
          <Input
            type="text"
            value={userId}
            onChange={(e) => setUserId(e.currentTarget.value)}
          />
        </Form.Item>
        <Form.Item label={"USER PASSWORD"} name={"userPassword"}>
          <Input
            type={"password"}
            value={userPassword}
            onChange={(e) => setUserPassword(e.currentTarget.value)}
          />
        </Form.Item>
        <Button type="primary" htmlType="submit">
          로그인
        </Button>
      </Form>
    </div>
  );
}

export default Login;
