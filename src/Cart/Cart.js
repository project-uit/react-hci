import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { Card, Row, Col, Alert, Modal, Button, Skeleton, List, Avatar } from 'antd';
import { UncontrolledAlert } from 'reactstrap';


class Cart extends Component {
    state = {
        visiblePromotion: false,
        items: [],
    }

    showModal = () => {
        this.setState({
            visiblePromotion: true,
        });
    }

    handleCancel = () => {
        this.setState({ visiblePromotion: false });
    }

    componentWillMount() {
        const items = [
            {
                idGiay: '1',
                tenGiay: 'Giay111',
                tenLoaiGiay: 'Chạy bộ',
                giaBan: 1000000,
            },
            {
                idGiay: '2',
                tenGiay: 'Giay222',
                tenLoaiGiay: 'Training',
                giaBan: 2000000,
            }
        ];
        localStorage.clear();
        localStorage.setItem('cartItems', JSON.stringify(items));
    }

    componentDidMount() {
        const cartItems = JSON.parse(localStorage.getItem('cartItems'));
        if (cartItems.length > 1) {
            this.setState({ items: cartItems })
        } else {
            console.log('Cart empty!');
        }
    }

    render() {
        const layout = {
            cartZone: {
                xs: 24,
                sm: {
                    span: 12,
                    offset: 3
                }, md: {
                    span: 12,
                    offset: 3
                }, lg: {
                    span: 12,
                    offset: 3
                }
            },
            summaryZone: { xs: 24, sm: 4, md: 4, lg: 6 },
        }
        const { visiblePromotion, items } = this.state;
        return (
            <div>
                <Row gutter={50}>
                    <Col {...layout.cartZone}>
                        <Alert
                            message="Miễn phí giao hàng với thành viên"
                            description={
                                <div>
                                    Đăng kí thành viên với chúng tôi để nhận nhiều ưu đãi và thông tin khuyến mãi hơn.&nbsp;
                                    <Link to="/dang-ky">Đăng ký</Link> &nbsp;hoặc&nbsp;
                                    <Link to="/dang-nhap">Đăng nhập</Link>
                                </div>
                            }
                            type="info"
                            showIcon
                        /><br />
                        <UncontrolledAlert color="dark">
                            <b>Miễn phí giao hàng nhanh</b><br />
                            Đối với những đơn hàng với tổng trị giá trên 2.000.000đ, khách hàng được miễn phí giao hàng nhanh.&nbsp;
                            <Link to="#" onClick={this.showModal}>Xem chi tiết</Link>
                        </UncontrolledAlert>
                        <Modal
                            visible={visiblePromotion}
                            title="Thông tin khuyến mãi"
                            onCancel={this.handleCancel}
                            footer={[
                                <Button key="back" onClick={this.handleCancel}>Đóng</Button>,
                            ]}
                        >
                            <p>Nội khuyến mãi...</p>
                            <Skeleton active />
                        </Modal>
                        <Card title="Các sản phẩm đã thêm vào giỏ hàng" className="w-100 p-3"
                            headStyle={{ background: 'black', color: 'white', margin: '-15px' }}>
                            <List
                                itemLayout="vertical"
                                size="large"
                                locale={{ emptyText: "Giỏ hàng trống" }}
                                dataSource={items}
                                footer={<h5 className="float-right">Tổng cộng: 1111111 vnđ</h5>}
                                renderItem={item => (
                                    <List.Item
                                        key={item.idGiay}
                                        extra={<h5>{item.giaBan} vnđ</h5>}>
                                        <List.Item.Meta
                                            avatar={<Avatar shape="square" size={100} icon="user" />}
                                            title={<div>{item.tenGiay}
                                                <Button icon="delete" className="float-right" type="danger">Xoá</Button>
                                            </div>}
                                            description={item.tenLoaiGiay}
                                        />
                                    </List.Item>
                                )} />
                        </Card>
                    </Col>
                    <Col {...layout.summaryZone}>
                        <Card title="Tổng cộng" className="w-100 p-3"
                            headStyle={{ background: 'black', color: 'white', margin: '-15px' }}>
                            <Row>
                                <Col span={12}><b>Tổng:</b></Col>
                                <Col span={12}><b className="float-right">10000 vnđ</b></Col>
                            </Row>
                            <Row>
                                <Col span={12}><b>Vận chuyển:</b></Col>
                                <Col span={12}><b className="float-right">10000 vnđ</b></Col>
                            </Row>
                            <Row>
                                <Col span={12}><b>Giảm giá:</b></Col>
                                <Col span={12}><b className="float-right">0% vnđ</b></Col>
                            </Row>
                            <Row>
                                <Col span={12}><b>Thành tiền:</b></Col>
                                <Col span={12}><b className="float-right">10000 vnđ</b></Col>
                            </Row>
                            <br /><br />
                            <Button icon="user" size='large' type="primary" block>THÀNH VIÊN THANH TOÁN</Button> <br /><br />
                            <Button icon="poweroff" size='large' type="danger" block>KHÁCH THANH TOÁN</Button>
                        </Card>
                    </Col>
                </Row>
            </div >
        );
    }
}

export default Cart;