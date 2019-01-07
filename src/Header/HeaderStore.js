import React, { Component } from "react";
import { Layout, Menu, Drawer, Icon, Input, Row, Col, Button, Modal, Badge, Affix, Dropdown } from "antd";
import './HeaderStore.css';
import { HeaderOnSmallDevice } from "./HeaderMenu";
import { Link } from 'react-router-dom';
import Login from '../Login/Login';
const Search = Input.Search;
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

class HeaderStore extends Component {

  state = {
    isOpenModal: false,
    visible: false,
    placement: 'right'
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
  showDrawer = () => {
    console.log('click')
    this.setState({
      visible: true,
    });
  };

  onClose = () => {
    this.setState({
      visible: false,
    });
  };
  render() {
    const header = (<Row className="fix-menu" style={{zIndex: 5}}>
      <Col xs={19}>
        <Menu theme="dark" mode="horizontal" >
          <Menu.Item key="1"><Link to="/danh-sach-giay"><span className="text-menu-color">Air Jordan</span> </Link></Menu.Item>
          <SubMenu title={<span className="submenu-title-wrapper"><span className="text-menu-color">Nike</span></span>}>
            <Menu.Item key="setting:3s">Jordan</Menu.Item>
            <Menu.Item key="setting:3s">Tennis</Menu.Item>
            <Menu.Item key="setting:3d">Traning</Menu.Item>
            <Menu.Item key="setting:121">Football</Menu.Item>
            <Menu.Item key="setting:22z">Cricket</Menu.Item>
          </SubMenu>
          <SubMenu title={<span className="submenu-title-wrapper"><span className="text-menu-color">Adidas</span></span>}>
            <Menu.Item key="setting:1a">Football</Menu.Item>
            <Menu.Item key="setting:2s">Running</Menu.Item>
            <Menu.Item key="setting:3h">Basketball</Menu.Item>
            <Menu.Item key="setting:3j">Originals</Menu.Item>
          </SubMenu>
          <SubMenu title={<span className="submenu-title-wrapper"><span className="text-menu-color">Converse</span></span>}>
            <Menu.Item key="setting:1zs1">Classic</Menu.Item>
            <Menu.Item key="setting:2xzx">Chuck 70s</Menu.Item>
            <Menu.Item key="setting:3ccss">All star</Menu.Item>
          </SubMenu>
          <SubMenu title={<span className="submenu-title-wrapper"><span className="text-menu-color">Yeezy</span></span>}>
            <Menu.Item key="setting:1z">Yeezy boost 350</Menu.Item>
            <Menu.Item key="setting:2x">Yeezy boost 700</Menu.Item>
            <Menu.Item key="setting:3c">Yeezy boost 750</Menu.Item>
          </SubMenu>
          <Menu.Item key="25"><span className="text-menu-color">Balenciaga</span></Menu.Item>
          <SubMenu title={<span className="submenu-title-wrapper"><span className="text-menu-color">Vans</span></span>}>
            <Menu.Item key="setting:13">Low top</Menu.Item>
            <Menu.Item key="setting:12">High top</Menu.Item>
            <Menu.Item key="setting:43">Slip-on</Menu.Item>
            <Menu.Item key="setting:a4">Original Classic</Menu.Item>
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
            <b>Tất cả giày</b>
          </Menu.Item>
          <Menu.Item key="1" className="float-right text-menu-dif"><b>Giảm giá</b></Menu.Item>
        </Menu>
      </Col>
    </Row>
    )
    const headerSmallDevice = (
      <div style={{ backgroundColor: 'black' }}>
        <Row>
          <Col xs={12}>
            <Link to="/trang-chu" className="btn btn-dark"><Icon type="home" theme="filled" /></Link>
          </Col>
          <Col xs={12} className="text-right">
            <button onClick={this.showDrawer} className="btn btn-dark">
              <i class="fas fa-bars"></i>
            </button>
          </Col>
        </Row>
        <Drawer
          className="menu-drawer"
          title="Thương hiệu"
          placement={this.state.placement}
          closable={false}
          onClose={this.onClose}
          visible={this.state.visible}
        >
          {HeaderOnSmallDevice}

        </Drawer>
      </div>
    );
    const device = this.uagent.search("iphone") > -1 || this.uagent.search("android") > -1 || this.uagent.search('ipad') > -1;
    const colSearch = !device ? 10 : 14;
    console.log(this.uagent)
    return (
      <div>
        <Row className="m-3">
          {!device && (
            <Col xs={7} md={4}>
              <Link to="/trang-chu"> <img src="/Images/logo_retina.png" alt="" width="110" /></Link>
            </Col>
          )}

          <Col xs={colSearch} md={8}>
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
          headerSmallDevice
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
          <Login />
        </Modal>

      </div>
    );
  }
}

export default HeaderStore;
