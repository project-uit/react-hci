import React, { Component } from 'react';
import './ListShoe.css';
import {
    Layout, Row, Col, Select, Collapse, Checkbox, Pagination
} from 'antd';
import CardShoe from './../Component/CardShoe';
import { Affix, Button, Tooltip, Icon } from 'antd';
import { Breadcrumb } from 'antd';
import { Link } from 'react-router-dom';
import { Input } from 'antd';
import ListShoeM from './DataShoe';



const {
    Sider,
} = Layout;
const Option = Select.Option;
const Panel = Collapse.Panel;
class ListShoe extends Component {

    uagent = navigator.userAgent.toLowerCase();
    handleChangeChk(event, index) {

        let items = this.state.chkBoxSize;
        if (event.target.checked) {
            items[index] = "ant-btn ant-btn-circle active";
        } else {
            items[index] = "ant-btn ant-btn-circle";
        }
        this.setState({
            chkBoxSize: items
        })
    }
    state = {
        chkBoxSize: [],
        chkBoxColor: [false, false, false, false, false, false, false, false, false, false,]
    }
    componentWillMount() {
        var indents = [];
        for (var i = 0; i < 10; i++) {
            indents.push("ant-btn ant-btn-circle");
        }
        this.setState({
            chkBoxSize: indents
        })
    }
    chkBoxColorClick(index) {
        let items = this.state.chkBoxColor;
        items[index] = !items[index];
        this.setState({
            chkBoxColor: items
        })
    }
    render() {
        const device = this.uagent.search("iphone") > -1 || this.uagent.search("android") > -1 || this.uagent.search('ipad') > -1;
        return (
            <div>
                {device && (<ListShoeM chkBoxSize={this.state.chkBoxSize} handleChangeChk={this.handleChangeChk} chkBoxColor={this.state.chkBoxColor} />)
                }
                {
                    !device && (

                        <div className="grid-container">
                            <div className="grid-filter">
                                <div style={{ width: '100%', marginTop: 103 }}>

                                    <Sider
                                        theme="light"
                                        style={{ width: '100%' }}
                                        breakpoint="lg"
                                        collapsedWidth="0"
                                        onBreakpoint={(broken) => { console.log(broken); }}
                                        onCollapse={(collapsed, type) => { console.log(collapsed, type); }}
                                    >
                                        <Collapse defaultActiveKey={['4', '1']}>
                                            <div>
                                                <Tooltip placement="topRight" title="Làm mới">
                                                    <Button icon="reload" className="ml-1"></Button>
                                                </Tooltip>
                                            </div>
                                            <Panel header="Sắp xếp theo" key="4">
                                                <Row>
                                                    <Col span={24}><Checkbox value="1">Bán chạy</Checkbox></Col>
                                                    <Col span={24}><Checkbox value="2">Phổ biến</Checkbox></Col>
                                                    <Col span={24}><Checkbox value="3">Hot trending</Checkbox></Col>
                                                </Row>
                                            </Panel>
                                            <Panel header="Giới tính" key="1">
                                                <Checkbox.Group style={{ width: '100%' }}>
                                                    <Row>
                                                        <Col span={24}><Checkbox value="A">Nam</Checkbox></Col>
                                                        <Col span={24}><Checkbox value="B">Nữ</Checkbox></Col>
                                                        <Col span={24}><Checkbox value="C">Unisex</Checkbox></Col>
                                                    </Row>
                                                </Checkbox.Group>
                                            </Panel>
                                            <Panel header="Loại giày" key="3">
                                                <Row>
                                                    <Col span={24}><Checkbox value="1A">Running</Checkbox></Col>
                                                    <Col span={24}><Checkbox value="B2">Traning</Checkbox></Col>
                                                    <Col span={24}><Checkbox value="C3">Classic</Checkbox></Col>
                                                    <Col span={24}><Checkbox value="Cs">Tennis</Checkbox></Col>
                                                    <Col span={24}><Checkbox value="C123s">Basketball</Checkbox></Col>
                                                    <Col span={24}><Checkbox value="Cz">Football</Checkbox></Col>
                                                    <Col span={24}><Checkbox value="Cghj">LifeStyle</Checkbox></Col>
                                                    <Col span={24}><Checkbox value="C123">Low top</Checkbox></Col>
                                                    <Col span={24}><Checkbox value="C222">High top</Checkbox></Col>
                                                    <Col span={24}><Checkbox value="C22222">Jordan</Checkbox></Col>
                                                </Row>
                                            </Panel>
                                            <Panel header="Màu sắc" key="3s231">
                                                <Row>
                                                    <Col span={24}>
                                                        <div className="container-flex-chkboxColor">
                                                            <label>
                                                                <Link to="#" className="rounded-circle checkbox-color" style={{ backgroundColor: '#555', textAlign: 'center' }} onClick={() => this.chkBoxColorClick(0)}>
                                                                    {
                                                                        this.state.chkBoxColor[0] && (
                                                                            <Icon type="check" style={{ marginTop: 7 }} />
                                                                        )
                                                                    }
                                                                </Link>
                                                            </label>
                                                            <label>
                                                                <Link to="#" className="rounded-circle checkbox-color" style={{ backgroundColor: 'white', textAlign: 'center' }} onClick={() => this.chkBoxColorClick(1)}>
                                                                    {
                                                                        this.state.chkBoxColor[1] && (
                                                                            <Icon type="check" style={{ marginTop: 7 }} />
                                                                        )
                                                                    }
                                                                </Link>
                                                            </label>
                                                            <label>
                                                                <Link to="#" className="rounded-circle checkbox-color" style={{ backgroundColor: '#A40000', textAlign: 'center' }} onClick={() => this.chkBoxColorClick(2)}>
                                                                    {
                                                                        this.state.chkBoxColor[2] && (
                                                                            <Icon type="check" style={{ marginTop: 7 }} />
                                                                        )
                                                                    }
                                                                </Link>
                                                            </label>
                                                            <label>
                                                                <Link to="#" className="rounded-circle checkbox-color" style={{ backgroundColor: '#00D7DC', textAlign: 'center' }} onClick={() => this.chkBoxColorClick(3)}>
                                                                    {
                                                                        this.state.chkBoxColor[3] && (
                                                                            <Icon type="check" style={{ marginTop: 7 }} />
                                                                        )
                                                                    }
                                                                </Link>
                                                            </label>
                                                            <label>
                                                                <Link to="#" className="rounded-circle checkbox-color" style={{ backgroundColor: '#99B402', textAlign: 'center' }} onClick={() => this.chkBoxColorClick(4)}>
                                                                    {
                                                                        this.state.chkBoxColor[4] && (
                                                                            <Icon type="check" style={{ marginTop: 7 }} />
                                                                        )
                                                                    }
                                                                </Link>
                                                            </label>
                                                        </div>
                                                        <div className="container-flex-chkboxColor">
                                                            <label>
                                                                <Link to="#" className="rounded-circle checkbox-color" style={{ backgroundColor: '#000000', textAlign: 'center' }} onClick={() => this.chkBoxColorClick(5)}>
                                                                    {
                                                                        this.state.chkBoxColor[5] && (
                                                                            <Icon type="check" style={{ marginTop: 7 }} />
                                                                        )
                                                                    }
                                                                </Link>
                                                            </label>
                                                            <label>
                                                                <Link to="#" className="rounded-circle checkbox-color" style={{ backgroundColor: '#006ABF', textAlign: 'center' }} onClick={() => this.chkBoxColorClick(6)}>
                                                                    {
                                                                        this.state.chkBoxColor[6] && (
                                                                            <Icon type="check" style={{ marginTop: 7 }} />
                                                                        )
                                                                    }
                                                                </Link>
                                                            </label>
                                                            <label>
                                                                <Link to="#" className="rounded-circle checkbox-color" style={{ backgroundColor: 'blue', textAlign: 'center' }} onClick={() => this.chkBoxColorClick(7)}>
                                                                    {
                                                                        this.state.chkBoxColor[7] && (
                                                                            <Icon type="check" style={{ marginTop: 7 }} />
                                                                        )
                                                                    }
                                                                </Link>
                                                            </label>
                                                            <label>
                                                                <Link to="#" className="rounded-circle checkbox-color" style={{ backgroundColor: '#048B44', textAlign: 'center' }} onClick={() => this.chkBoxColorClick(8)}>
                                                                    {
                                                                        this.state.chkBoxColor[8] && (
                                                                            <Icon type="check" style={{ marginTop: 7 }} />
                                                                        )
                                                                    }
                                                                </Link>
                                                            </label>
                                                            <label>
                                                                <Link to="#" className="rounded-circle checkbox-color" style={{ backgroundColor: 'gray', textAlign: 'center' }} onClick={() => this.chkBoxColorClick(9)}>
                                                                    {
                                                                        this.state.chkBoxColor[9] && (
                                                                            <Icon type="check" style={{ marginTop: 7 }} />
                                                                        )
                                                                    }
                                                                </Link>
                                                            </label>
                                                        </div>
                                                    </Col>
                                                </Row>
                                            </Panel>
                                            <Panel header="Size" key="78">
                                                <Row>
                                                    <Col>
                                                        <div>
                                                            <label className={this.state.chkBoxSize[0]} >
                                                                <input type="checkbox" style={{ display: 'none' }}
                                                                    defaultChecked={false}
                                                                    onChange={(e) => this.handleChangeChk(e, 0)}
                                                                />
                                                                35
                                                            </label>
                                                            <label className={this.state.chkBoxSize[1]}>
                                                                <input type="checkbox" style={{ display: 'none' }} defaultChecked={false}
                                                                    onChange={(e) => this.handleChangeChk(e, 1)}
                                                                />
                                                                36
                                                            </label>
                                                            <label className={this.state.chkBoxSize[2]}>
                                                                <input type="checkbox" style={{ display: 'none' }} defaultChecked={false}
                                                                    onChange={(e) => this.handleChangeChk(e, 2)}
                                                                />
                                                                37
                                                            </label>
                                                            <label className={this.state.chkBoxSize[3]}>
                                                                <input type="checkbox" style={{ display: 'none' }} defaultChecked={false}
                                                                    onChange={(e) => this.handleChangeChk(e, 3)}
                                                                />
                                                                38
                                                            </label>
                                                            <label className={this.state.chkBoxSize[4]}>
                                                                <input type="checkbox" style={{ display: 'none' }} defaultChecked={false}
                                                                    onChange={(e) => this.handleChangeChk(e, 4)}
                                                                />
                                                                39
                                                            </label>
                                                        </div>
                                                        <div>
                                                            <label className={this.state.chkBoxSize[5]}>
                                                                <input type="checkbox" style={{ display: 'none' }} defaultChecked={false}
                                                                    onChange={(e) => this.handleChangeChk(e, 5)}
                                                                />
                                                                40
                                                            </label>
                                                            <label className={this.state.chkBoxSize[6]}>
                                                                <input type="checkbox" style={{ display: 'none' }} defaultChecked={false}
                                                                    onChange={(e) => this.handleChangeChk(e, 6)} />
                                                                41
                                                            </label>
                                                            <label className={this.state.chkBoxSize[7]}>
                                                                <input type="checkbox" style={{ display: 'none' }} defaultChecked={false}
                                                                    onChange={(e) => this.handleChangeChk(e, 7)} />
                                                                42
                                                            </label>
                                                            <label className={this.state.chkBoxSize[8]}>
                                                                <input type="checkbox" style={{ display: 'none' }} defaultChecked={false}
                                                                    onChange={(e) => this.handleChangeChk(e, 8)} />
                                                                43
                                                            </label>
                                                            <label className={this.state.chkBoxSize[9]}>
                                                                <input type="checkbox" style={{ display: 'none' }} defaultChecked={false}
                                                                    onChange={(e) => this.handleChangeChk(e, 9)} />
                                                                44
                                                            </label>
                                                        </div>
                                                    </Col>

                                                </Row>
                                            </Panel>
                                            <Panel header="Giá bán" key="31">
                                                <Row>
                                                    <Col span={24}>Từ: <Input type="number" /></Col>
                                                    <Col span={24}>Đến: <Input type="number" /></Col>
                                                </Row>
                                            </Panel>
                                        </Collapse>
                                    </Sider>
                                </div>

                            </div>
                            <div className="grid-list">
                                <Row className="ml-4 mt-3 mr-3">
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
                                    <Col xs={24} className="mb-2 text-right">
                                        <Pagination defaultCurrent={1} total={50} />
                                    </Col>
                                    <Col xs={24} sm={24} md={24} lg={24}>
                                        <Row gutter={16} >
                                            {/* 1 */}
                                            <Col xs={24} sm={12} md={12} lg={12} xl={6} style={{ marginBottom: 8 }}>
                                                <CardShoe img="/Images/805264_01.jpg" company="Adidas" name="YEEZY BOOST 350 V2" money="$200" gender="Nam" />
                                            </Col>
                                            <Col xs={24} sm={12} md={12} lg={12} xl={6} style={{ marginBottom: 8 }}>
                                                <CardShoe img="/Images/802390_01.jpg" company="Adidas" name="YEEZY BOOST 350 V2" money="$350" gender="Nam" />
                                            </Col>
                                            <Col xs={24} sm={12} md={12} lg={12} xl={6} style={{ marginBottom: 8 }}>
                                                <CardShoe img="/Images/804104_01.jpg" company="Adidas" name="TUBULAR NOVA PK" money="$400" gender="Nam" />
                                            </Col>
                                            <Col xs={24} sm={12} md={12} lg={12} xl={6} style={{ marginBottom: 8 }}>
                                                <CardShoe img="/Images/805223_01.jpg" company="Nike" name="AIR JORDAN 1 MID SE" money="$350" gender="Nam" />
                                            </Col>
                                            {/* 2 */}
                                            <Col xs={24} sm={12} md={12} lg={12} xl={6} style={{ marginBottom: 8 }}>
                                                <CardShoe img="/Images/010138_01.jpg" company="Nike" name="AJ 19 SE" money="$200" gender="Nam" />
                                            </Col>
                                            <Col xs={24} sm={12} md={12} lg={12} xl={6} style={{ marginBottom: 8 }}>
                                                <CardShoe img="/Images/805251_01.jpg" company="Converse" name="CHUCK 70 HI" money="$200" gender="Nam" />
                                            </Col>
                                            <Col xs={24} sm={12} md={12} lg={12} xl={6} style={{ marginBottom: 8 }}>
                                                <CardShoe img="/Images/800345_1.jpg" company="Adidas" name="TUBULAR NOVA" money="$400" gender="Nữ" />
                                            </Col>
                                            <Col xs={24} sm={12} md={12} lg={12} xl={6} style={{ marginBottom: 8 }}>
                                                <CardShoe img="/Images/800411_1.jpg" company="Adidas" name="NMD R1 W" money="$350" gender="Nữ" />
                                            </Col>
                                            {/* 3 */}
                                            <Col xs={24} sm={12} md={12} lg={12} xl={6} style={{ marginBottom: 8 }}>
                                                <CardShoe img="/Images/801224_1.jpg" company="Adidas" name="Campus" money="$200" gender="Nữ" />
                                            </Col>
                                            <Col xs={24} sm={12} md={12} lg={12} xl={6} style={{ marginBottom: 8 }}>
                                                <CardShoe img="/Images/803611_01.jpg" company="Balenciaga" name="TRIPLE S" money="$1300" gender="Unisex" />
                                            </Col>
                                            <Col xs={24} sm={12} md={12} lg={12} xl={6} style={{ marginBottom: 8 }}>
                                                <CardShoe img="/Images/804062_01.jpg" company="Reebok" name="WORKOUT PLUS" money="$400" gender="Nữ" />
                                            </Col>
                                            <Col xs={24} sm={12} md={12} lg={12} xl={6} style={{ marginBottom: 8 }}>
                                                <CardShoe img="/Images/805778_01.jpg" company="Vans" name="CLASSIC SLIP" money="$250" gender="Nữ" />
                                            </Col>
                                        </Row>
                                    </Col>
                                    <Col>
                                        <div className="text-right">
                                            <Pagination defaultCurrent={1} total={50} />
                                        </div>
                                    </Col>
                                </Row>
                            </div>

                        </div>

                    )
                }

            </div>
        );
    }
}

export default ListShoe;