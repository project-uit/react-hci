import React, { Component } from 'react';
import './ListShoe.css';
import {
    List, message, Avatar, Spin, Layout, Menu, Icon
} from 'antd';
import reqwest from 'reqwest';

import InfiniteScroll from 'react-infinite-scroller';
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
                            breakpoint="lg"
                            collapsedWidth="0"
                            onBreakpoint={(broken) => { console.log(broken); }}
                            onCollapse={(collapsed, type) => { console.log(collapsed, type); }}
                        >
                            <div>
                                123
                            </div>
                            {/* <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']}>
                                <Menu.Item key="1">
                                    <Icon type="user" />
                                    <span className="nav-text">nav 1</span>
                                </Menu.Item>
                                <Menu.Item key="2">
                                    <Icon type="video-camera" />
                                    <span className="nav-text">nav 2</span>
                                </Menu.Item>
                                <Menu.Item key="3">
                                    <Icon type="upload" />
                                    <span className="nav-text">nav 3</span>
                                </Menu.Item>
                                <Menu.Item key="4">
                                    <Icon type="user" />
                                    <span className="nav-text">nav 4</span>
                                </Menu.Item>
                            </Menu> */}
                        </Sider>
                    </div>
                </div>
                <div className="grid-list">
                    <InfiniteScroll
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
                    </InfiniteScroll>
                </div>

            </div>
        );
    }
}

export default ListShoe;