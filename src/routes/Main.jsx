import { Typography } from "antd";
import Layout, { Content, Header } from "antd/lib/layout/layout";
import Sider from "antd/lib/layout/Sider";
import SideMenu from "component/SideMenu";
import { RoutePath } from "config/Enums";
import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { locationMenu } from "redux/actions/menu_action";
import { useDispatch } from "react-redux";
import styled from "styled-components";

const Container = styled.div`
  padding: 20px;
  overflow-y: auto;
  height: calc(100vh - 64px - 15px);
`;

function Main() {
  const user = window.sessionStorage.getItem("user");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    if (user) {
      navigate(`/${RoutePath.BOARD_MAIN}/${RoutePath.BOARD.LIST}`);
      dispatch(
        locationMenu(`/${RoutePath.BOARD_MAIN}/${RoutePath.BOARD.LIST}`)
      );
    } else {
      navigate(RoutePath.LOGIN);
      dispatch(locationMenu(RoutePath.LOGIN));
    }
  }, [user]);

  return (
    <Layout>
      <Header>
        <Typography style={{ color: "white" }}>
          MY BOARD for JPA Pratice
        </Typography>
      </Header>
      <Layout>
        <Sider>
          <SideMenu />
        </Sider>
        <Content style={{ height: "93vh" }}>
          <Container>
            <Outlet />
          </Container>
        </Content>
      </Layout>
    </Layout>
  );
}

export default Main;
