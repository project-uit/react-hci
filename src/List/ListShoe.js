import React, { Component } from 'react';
import './ListShoe.css';
import {
    List, message, Avatar, Spin, Layout, Menu, Icon, Row, Col
} from 'antd';
import reqwest from 'reqwest';

import InfiniteScroll from 'react-infinite-scroller';
import CardShoe from './../Component/CardShoe';
const {
    Header, Content, Footer, Sider,
} = Layout;
const fakeDataUrl = 'https://randomuser.me/api/?results=5&inc=name,gender,email,nat&noinfo';

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
                            <Row>
                                <Col>
                                    dkm
                                </Col>
                                <Col>
                                    dkm
                                </Col>
                            </Row>
                        </Sider>
                    </div>
                </div>
                <div className="grid-list">
                    {/* <InfiniteScroll
                        initialLoad={false}
                        pageStart={0}
                        loadMore={this.handleInfiniteOnLoad}
                        hasMore={!this.state.loading && this.state.hasMore}
                        useWindow={true}
                    >
                        {data}
                        {this.state.loading && this.state.hasMore && (
                            <div align="center">
                                <Spin size="large" />
                            </div>
                        )}
                    </InfiniteScroll> */}
                    <Row className="m-3">
                        <Col xs={24} sm={24} md={24} lg={24}>
                            <Row className="p-1" gutter={16} >
                                <Col xs={12} md={12} lg={12} xl={6} style={{ marginBottom: 8 }}>
                                    <CardShoe img="/Images/802799_01.jpg" company="Nike" name="AIR JORDAN 1 RETRO HIGH" money="$200" gender="Nam" />
                                </Col>
                                <Col xs={12} md={12} lg={12} xl={6} style={{ marginBottom: 8 }}>
                                    <CardShoe img="/Images/805251_01.jpg" company="Converse" name="CHUCK 70 HI" money="$200" gender="Nam" />
                                </Col>
                                <Col xs={12} md={12} lg={12} xl={6} style={{ marginBottom: 8 }}>
                                    <CardShoe img="/Images/800345_1.jpg" company="Adidas" name="TUBULAR NOVA PK" money="$400" gender="Nam" />
                                </Col>
                                <Col xs={12} md={12} lg={12} xl={6} style={{ marginBottom: 8 }}>
                                    <CardShoe img="/Images/805223_01.jpg" company="Nike" name="AIR JORDAN 1 MID SE" money="$350" gender="Nam" />
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