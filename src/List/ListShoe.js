import React, { Component } from 'react';
import './ListShoe.css';
import {
    List, message, Avatar, Spin, Layout, Menu, Icon, Row, Col, Select, Collapse, Checkbox
} from 'antd';
import reqwest from 'reqwest';

import InfiniteScroll from 'react-infinite-scroller';
import CardShoe from './../Component/CardShoe';
import { Affix } from 'antd';
import { Breadcrumb } from 'antd';
import { Link } from 'react-router-dom';
const {
    Header, Content, Footer, Sider,
} = Layout;
const Option = Select.Option;
const fakeDataUrl = 'https://randomuser.me/api/?results=5&inc=name,gender,email,nat&noinfo';
const Panel = Collapse.Panel;
class ListShoe extends Component {
    state = {
        data: [],
        loading: false,
        hasMore: true,
    }

    componentDidMount() {
        this.fetchData((res) => {
            this.setState({
                data: res.results,
            });
        });
    }

    fetchData = (callback) => {
        reqwest({
            url: fakeDataUrl,
            type: 'json',
            method: 'get',
            contentType: 'application/json',
            success: (res) => {
                callback(res);
            },
        });
    }

    handleInfiniteOnLoad = () => {
        let data = this.state.data;
        this.setState({
            loading: true,
        });
        if (data.length > 14) {
            message.warning('Infinite List loaded all');
            this.setState({
                hasMore: false,
                loading: false,
            });
            return;
        }
        this.fetchData((res) => {
            data = data.concat(res.results);
            this.setState({
                data,
                loading: false,
            });
        });
    }

    render() {
        const data = this.state.data.map(item => (
            <div>
                <img src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" width={300} />
                <a>{item.name.last} + {item.email}</a>
                <div>Content</div>
            </div>
        ))
        return (
            <div className="grid-container">
                <div className="grid-filter">
                    <div>

                        <Sider
                            theme="light"
                            breakpoint="md"
                            collapsedWidth="0"
                            onBreakpoint={(broken) => { console.log(broken); }}
                            onCollapse={(collapsed, type) => { console.log(collapsed, type); }}
                        >
                            <Collapse>
                                <Panel header="Giới tính" key="1">
                                    <Checkbox.Group style={{ width: '100%' }}>
                                        <Row>
                                            <Col span={24}><Checkbox value="A">Nam</Checkbox></Col>
                                            <Col span={24}><Checkbox value="B">Nữ</Checkbox></Col>
                                            <Col span={24}><Checkbox value="C">Unisex</Checkbox></Col>
                                        </Row>
                                    </Checkbox.Group>
                                </Panel>
                                <Panel header="Loại giày" key="2">
                                    <p>123</p>
                                </Panel>
                                <Panel header="This is panel header 3" key="3">
                                    <p>122</p>
                                </Panel>
                            </Collapse>
                        </Sider>
                    </div>
                </div>
                <div className="grid-list">
                    <Row className="ml-4 mt-3 mr-4">
                        <Col xs={12}>
                            <Breadcrumb separator=">">
                                <Breadcrumb.Item><Link to="/trang-chu">Trang chủ</Link></Breadcrumb.Item>
                                <Breadcrumb.Item>Air Jordan</Breadcrumb.Item>
                            </Breadcrumb>
                        </Col>
                        <Col xs={12} className="text-right">
                            <Select labelInValue placeholder="Sắp xếp giá bán" style={{ width: 160 }} allowClear={true}>
                                <Option value="jack">
                                    Giá bán giảm dần
                                </Option>
                                <Option value="lucy">
                                    Giá bán tăng dần
                                </Option>
                            </Select>
                        </Col>
                    </Row>
                    <Row className="m-3">
                        <Col xs={24} sm={24} md={24} lg={24}>
                            <Row className="p-1" gutter={16} >
                                {/* 1 */}
                                <Col xs={24} sm={12} md={12} lg={12} xl={6} style={{ marginBottom: 8 }}>
                                    <CardShoe img="/Images/805264_01.jpg" company="Nike" name="Yeezy 350v 2" money="$200" gender="Nam" />
                                </Col>
                                <Col xs={24} sm={12} md={12} lg={12} xl={6} style={{ marginBottom: 8 }}>
                                    <CardShoe img="/Images/802390_01.jpg" company="Converse" name="CHUCK 70 HI" money="$200" gender="Nam" />
                                </Col>
                                <Col xs={24} sm={12} md={12} lg={12} xl={6} style={{ marginBottom: 8 }}>
                                    <CardShoe img="/Images/804104_01.jpg" company="Adidas" name="TUBULAR NOVA PK" money="$400" gender="Nam" />
                                </Col>
                                <Col xs={24} sm={12} md={12} lg={12} xl={6} style={{ marginBottom: 8 }}>
                                    <CardShoe img="/Images/805223_01.jpg" company="Nike" name="AIR JORDAN 1 MID SE" money="$350" gender="Nam" />
                                </Col>
                                {/* 2 */}
                                <Col xs={24} sm={12} md={12} lg={12} xl={6} style={{ marginBottom: 8 }}>
                                    <CardShoe img="/Images/802799_01.jpg" company="Nike" name="AIR JORDAN 1 RETRO HIGH" money="$200" gender="Nam" />
                                </Col>
                                <Col xs={24} sm={12} md={12} lg={12} xl={6} style={{ marginBottom: 8 }}>
                                    <CardShoe img="/Images/805251_01.jpg" company="Converse" name="CHUCK 70 HI" money="$200" gender="Nam" />
                                </Col>
                                <Col xs={24} sm={12} md={12} lg={12} xl={6} style={{ marginBottom: 8 }}>
                                    <CardShoe img="/Images/800345_1.jpg" company="Adidas" name="TUBULAR NOVA PK" money="$400" gender="Nữ" />
                                </Col>
                                <Col xs={24} sm={12} md={12} lg={12} xl={6} style={{ marginBottom: 8 }}>
                                    <CardShoe img="/Images/805223_01.jpg" company="Nike" name="AIR JORDAN 1 MID SE" money="$350" gender="Nữ" />
                                </Col>
                                {/* 3 */}
                                <Col xs={24} md={12} lg={12} xl={6} style={{ marginBottom: 8 }}>
                                    <CardShoe img="/Images/802799_01.jpg" company="Nike" name="AIR JORDAN 1 RETRO HIGH" money="$200" gender="Nữ" />
                                </Col>
                                <Col xs={24} md={12} lg={12} xl={6} style={{ marginBottom: 8 }}>
                                    <CardShoe img="/Images/805251_01.jpg" company="Converse" name="CHUCK 70 HI" money="$200" gender="Nữ" />
                                </Col>
                                <Col xs={24} md={12} lg={12} xl={6} style={{ marginBottom: 8 }}>
                                    <CardShoe img="/Images/800345_1.jpg" company="Adidas" name="TUBULAR NOVA PK" money="$400" gender="Nữ" />
                                </Col>
                                <Col xs={24} md={12} lg={12} xl={6} style={{ marginBottom: 8 }}>
                                    <CardShoe img="/Images/805223_01.jpg" company="Nike" name="AIR JORDAN 1 MID SE" money="$350" gender="Nam" />
                                </Col>
                                {/* 4 */}
                                <Col xs={24} md={12} lg={12} xl={6} style={{ marginBottom: 8 }}>
                                    <CardShoe img="/Images/802799_01.jpg" company="Nike" name="AIR JORDAN 1 RETRO HIGH" money="$200" gender="Nam" />
                                </Col>
                                <Col xs={24} md={12} lg={12} xl={6} style={{ marginBottom: 8 }}>
                                    <CardShoe img="/Images/805251_01.jpg" company="Converse" name="CHUCK 70 HI" money="$200" gender="Nam" />
                                </Col>
                                <Col xs={24} md={12} lg={12} xl={6} style={{ marginBottom: 8 }}>
                                    <CardShoe img="/Images/800345_1.jpg" company="Adidas" name="TUBULAR NOVA PK" money="$400" gender="Nữ" />
                                </Col>
                                <Col xs={24} md={12} lg={12} xl={6} style={{ marginBottom: 8 }}>
                                    <CardShoe img="/Images/805223_01.jpg" company="Nike" name="AIR JORDAN 1 MID SE" money="$350" gender="Nữ" />
                                </Col>
                                {/* 5 */}
                                <Col xs={24} md={12} lg={12} xl={6} style={{ marginBottom: 8 }}>
                                    <CardShoe img="/Images/802799_01.jpg" company="Nike" name="AIR JORDAN 1 RETRO HIGH" money="$200" gender="Nam" />
                                </Col>
                                <Col xs={24} md={12} lg={12} xl={6} style={{ marginBottom: 8 }}>
                                    <CardShoe img="/Images/805251_01.jpg" company="Converse" name="CHUCK 70 HI" money="$200" gender="Nam" />
                                </Col>
                                <Col xs={24} md={12} lg={12} xl={6} style={{ marginBottom: 8 }}>
                                    <CardShoe img="/Images/800345_1.jpg" company="Adidas" name="TUBULAR NOVA PK" money="$400" gender="Nữ" />
                                </Col>
                                <Col xs={24} md={12} lg={12} xl={6} style={{ marginBottom: 8 }}>
                                    <CardShoe img="/Images/805223_01.jpg" company="Nike" name="AIR JORDAN 1 MID SE" money="$350" gender="Nữ" />
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </div>

            </div>
        );
    }
}

export default ListShoe;