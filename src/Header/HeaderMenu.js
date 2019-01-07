import { Menu } from 'antd';
import React from "react";
import { Link } from 'react-router-dom';
const SubMenu = Menu.SubMenu;
export const HeaderOnSmallDevice = (

    <div>
        <Menu theme="dark" mode="inline" >
            <Menu.Item key="1"><Link to="danh-sach-giay"><span className="text-menu-color">Air Jordan</span></Link></Menu.Item>
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
        <hr />
        <Menu theme="dark" mode="inline" >
            <Menu.Item key="2" className="float-right text-menu-dif">
                <b>Tất cả giày</b>
            </Menu.Item>
            <Menu.Item key="1" className="float-right text-menu-dif"><b>Giảm giá</b></Menu.Item>
        </Menu>
    </div>
)