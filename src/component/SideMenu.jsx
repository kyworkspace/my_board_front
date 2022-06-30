import React, { useEffect, useState } from "react";
import { Menu } from "antd";
import { useLocation, useNavigate } from "react-router-dom";
import { RoutePath } from "config/Enums";

const MenuItem = {
  board: {
    text: "게시판",
    url: "board/list",
  },
  Login: {
    text: "로그인",
    url: "login",
  },
  logout: {
    text: "로그아웃",
    url: "logout",
  },
};

function SideMenu() {
  const naviagte = useNavigate();
  const location = useLocation();
  const onHref = (e, url) => {
    // e.preventDefault();
    naviagte(url);
  };

  const user = window.sessionStorage.getItem("user");

  const onLogout = () => {
    window.sessionStorage.removeItem("user");
    naviagte("login");
  };

  return (
    <Menu
      theme="dark"
      defaultSelectedKeys={[RoutePath.MAIN]}
      mode="inline"
      selectedKeys={[location.pathname]}
    >
      {user ? (
        <Menu.Item key={`/${RoutePath.LOGIN}`} onClick={onLogout}>
          로그아웃
        </Menu.Item>
      ) : (
        <Menu.Item
          key={`/${RoutePath.LOGIN}`}
          onClick={(e) => onHref(e, "login")}
        >
          로그인
        </Menu.Item>
      )}
      <Menu.Item
        key={`/${RoutePath.BOARD_MAIN}/${RoutePath.BOARD.LIST}`}
        onClick={(e) => onHref(e, "board/list")}
      >
        게시판
      </Menu.Item>
    </Menu>
  );
}

export default SideMenu;
