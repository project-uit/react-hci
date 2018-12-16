import React, { Component } from "react";
import { Layout, Menu, Breadcrumb, Icon, Input, Row, Col, Button, Modal, Badge, Affix } from "antd";
import './HeaderStore.css';
const Search = Input.Search;
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

class HeaderStore extends Component {

  state = {
    isOpenModal: false
  }
  uagent = navigator.userAgent.toLowerCase();
  openLogin = () => {
    this.setState({
      isOpenModal: true
    })
  }
  handleCancel = () => {
    this.setState({
      isOpenModal: false
    })
  }
  render() {
    const header = (<Row className="fix-menu">
      <Col xs={19}>
        <Menu theme="dark" mode="horizontal" >
          <Menu.Item key="1"><span className="text-menu-color">Air Jordan</span></Menu.Item>
          <Menu.Item key="2">
            <span className="text-menu-color">Nike</span>
          </Menu.Item>
          <Menu.Item key="3"><span className="text-menu-color">Adidas</span></Menu.Item>
          <Menu.Item key="4"><span className="text-menu-color">Converse</span></Menu.Item>
          <SubMenu title={<span className="submenu-title-wrapper"><span className="text-menu-color">Yeezy</span></span>}>
            <Menu.Item key="setting:1">Option 1</Menu.Item>
            <Menu.Item key="setting:2">Option 2</Menu.Item>
            <Menu.Item key="setting:3">Option 3</Menu.Item>
            <Menu.Item key="setting:4">Option 4</Menu.Item>
          </SubMenu>
          <SubMenu title={<span className="submenu-title-wrapper"><span className="text-menu-color">Balenciaga</span></span>}>
            <Menu.Item key="setting:5">Option 1</Menu.Item>
            <Menu.Item key="setting:66">Option 2</Menu.Item>
            <Menu.Item key="setting:7">Option 3</Menu.Item>
            <Menu.Item key="setting:8">Option 4</Menu.Item>
          </SubMenu>
          <SubMenu title={<span className="submenu-title-wrapper"><span className="text-menu-color">Vans</span></span>}>
            <Menu.Item key="setting:13">Option 1</Menu.Item>
            <Menu.Item key="setting:12">Option 2</Menu.Item>
            <Menu.Item key="setting:43">Option 3</Menu.Item>
            <Menu.Item key="setting:a4">Option 4</Menu.Item>
          </SubMenu>
          <SubMenu title={<span className="submenu-title-wrapper"><span className="text-menu-color">Reebok</span></span>}>
            <Menu.Item key="settindg:1">Running</Menu.Item>
            <Menu.Item key="settings:2">Classic</Menu.Item>
            <Menu.Item key="settizng:3">LifeStyle</Menu.Item>
            <Menu.Item key="settinxg:4">Basketball</Menu.Item>
          </SubMenu>
          <SubMenu title={<span className="submenu-title-wrapper"><span className="text-menu-color">Rick Owen</span></span>}>
            <Menu.Item key="Owen-boots">Boots</Menu.Item>
            <Menu.Item key="Owen-sandal">Sandal</Menu.Item>
          </SubMenu>
        </Menu>
      </Col>
      <Col xs={5}>
        <Menu theme="dark" mode="horizontal" >

          <Menu.Item key="2" className="float-right text-menu-dif">
            <b>Khác</b>
          </Menu.Item>
          <Menu.Item key="1" className="float-right text-menu-dif"><b>Giảm giá</b></Menu.Item>
        </Menu>
      </Col>
    </Row>
    )

    const device = this.uagent.search("iphone") > -1 || this.uagent.search("android") > -1;
    console.log(device, this.uagent)
    return (
      <div>
        <Row className="m-3">
          <Col xs={7} md={4}>
            <img src="http://localhost:3000/Images/logo_retina.png" alt="" width="110" />
          </Col>
          <Col xs={10} md={8}>
            <Search placeholder="Tìm kiếm tên giày..." />
          </Col>
          <Col>
            <Badge className="float-right" dot>
              <a className="icon-size" key="yun" onClick={this.openLogin}> <Icon type="login" /></a>
            </Badge>
            <Badge count={5} className="float-right  mr-4">
              <a className=" icon-size"><Icon type="shopping-cart" /></a>
            </Badge>
          </Col>
        </Row>
        {device && (
          header
        )}
        {!device && (
          <Affix offsetTop={0}>
            {header}
          </Affix>
        )}
        <Modal
          visible={this.state.isOpenModal}
          title="Đăng nhập"
          //  onOk={this.handleOk}
          onCancel={this.handleCancel}
          footer={[
            <div></div>
          ]}
        >
          <Row>
            <Col>
              <label>Tài khoản</label>
              <Input placeholder="" />
            </Col>
            <Col>
              <label className="mt-2">Mật khẩu</label>
              <Input placeholder="" type="password" />
            </Col>
            <Col>
              <Button className="mt-2">Đăng nhập</Button>
            </Col>
            <Col>
              <div align="center" className="mt-2">
                <a href="#">Quên mật khẩu</a>
              </div>
            </Col>
            <Col>
              <div align="center" className="mt-2">
                <a href="#">Chưa có tài khoản/đăng ký</a>
              </div>
            </Col>
          </Row>
        </Modal>

      </div>
    );
  }
}

export default HeaderStore;
