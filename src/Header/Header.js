import React, { Component } from "react";
import { Layout, Menu, Breadcrumb, Icon, Input, Row, Col } from "antd";
const Search = Input.Search;
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
class Header extends Component {
  render() {
    return (
      <div>
        <Row>
          <Col xs={4}>logo</Col>
          <Col xs={8}>
            <Search placeholder="input search text" style={{ width: 200 }} />
          </Col>
        </Row>

        <Menu theme="dark" mode="horizontal">
          <Menu.Item key="1">Air Jordan</Menu.Item>
          <Menu.Item key="2">
            <b>Nike</b>
          </Menu.Item>
          <Menu.Item key="3">Adidas</Menu.Item>
          <Menu.Item key="4">Converse</Menu.Item>
          <SubMenu title={<span className="submenu-title-wrapper">Yeezy</span>}>
            <Menu.Item key="setting:1">Option 1</Menu.Item>
            <Menu.Item key="setting:2">Option 2</Menu.Item>
            <Menu.Item key="setting:3">Option 3</Menu.Item>
            <Menu.Item key="setting:4">Option 4</Menu.Item>
          </SubMenu>
        </Menu>
      </div>
    );
  }
}

export default Header;
