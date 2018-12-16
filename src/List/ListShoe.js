import React, { Component } from 'react';
import './ListShoe.css';
import {
    List, message, Avatar, Spin,
} from 'antd';
import reqwest from 'reqwest';

import InfiniteScroll from 'react-infinite-scroller';

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
                        filter
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