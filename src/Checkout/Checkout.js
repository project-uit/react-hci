import './Checkout.css';
import React, { Component } from 'react';
import { Steps, Button, message, Card, Radio, Divider, Col, Row, Alert, Avatar, List, Skeleton } from 'antd';
import StepOne from './StepOne';
import StepTwo from './StepTwo';
import StepThree from './StepThree';
import { Badge } from 'antd';

const Step = Steps.Step;

const cartData = [
    {
        brand: 'Nike',
        name: 'Nike Air Max 97 Og Qs "2017 Release"',
        size: '37',
        price: '220',
        quantity: '2',
        img: 'https://www.flightclub.com/media/catalog/product/cache/1/thumbnail/240x170/9df78eab33525d08d6e5fb8d27136e95/8/0/800914_1.jpg'
    },
    {
        brand: 'AIR JORDAN',
        name: 'AIR JORDAN 11 RETRO "WIN LIKE ’96"',
        size: '39',
        price: '350',
        quantity: '1',
        img: 'https://www.flightclub.com/media/catalog/product/cache/1/thumbnail/240x170/9df78eab33525d08d6e5fb8d27136e95/8/0/802269_01.jpg'
    }
]

class Checkout extends Component {
    state = {
        current: 0,
        customer: null,
        isValid: false,
        total: 0,
        discount: 0,
        summary: 0,
        shipMethod: 'normal',
        paymentMethod: 'cod',
        paid: false,
        cartData: null
    };

    handlerNext = (customer, isValid, paymentMethod) => {
        const { current } = this.state;
        if (current === 0) {
            if (!isValid) {
                message.error('Vui lòng điền đầy đủ thông tin');
            } else {
                this.setState({
                    customer: customer,
                    isValid: true,
                });
                this.next();
            }
            return;
        }

        if (this.state.current === 1) {
            this.setState({
                paymentMethod: paymentMethod,
            });
            this.next();
        }
    }

    onChangeShipMethod = (e) => {
        console.log('ship method: ', e.target.value);
        this.setState({
            shipMethod: e.target.value,
        });
    }

    next() {
        const current = this.state.current + 1;
        this.setState({ current });
    }
    prev() {
        const current = this.state.current - 1;
        this.setState({ current });
    }

    gotoCart = () => {
   
        this.props.history.push('/cart')
      }

    render() {
        const { current, shipMethod, customer, total, discount, paymentMethod, paid } = this.state;
        const summary = cartData.reduce(function (accumulator, currentValue) {
            return accumulator + (currentValue.quantity * currentValue.price);
        }, 0)
        const layout = {
            paymentZone: { xs: 24, sm: 24, md: 24, lg: 14 },
            cartZone: { xs: 24, sm: 24, md: 24, lg: 10 },
        }
        const steps = [{
            title: 'Địa chỉ',
            content: <StepOne customer={customer} handlerNext={this.handlerNext} />,
        }, {
            title: 'Thanh toán',
            content: <StepTwo handlerNext={this.handlerNext} />,
        }, {
            title: 'Hoàn tất',
            content: <StepThree customer={customer} summary={summary} shipMethod={shipMethod}
                paymentMethod={paymentMethod} total={total} discount={discount} />,
        }];

        return (
            <div style={{ padding: '50px' }}>

                <br />
                <Row gutter={32}>
                    <Col {...layout.paymentZone}>
                        {
                            paid &&
                            <Alert
                                message="Thanh toán thành công"
                                description="Cảm ơn bạn đã mua sản phẩm của chúng tôi. Bạn sẽ nhận được email về thông tin chi tiết đơn hàng này"
                                type="success"
                                showIcon
                            />
                        }
                        <Card title="Thanh toán đơn hàng" headStyle={{ background: 'rgb(196, 196, 196)', color: 'black' }} bordered={true}>
                            <Steps current={current}>
                                {steps.map(item => <Step key={item.title} title={item.title} />)}
                            </Steps>
                            <br />
                            <div className="steps-content">
                                {steps[current].content}
                            </div>
                            <div className="steps-action">
                                {
                                    current > 0
                                    &&
                                    (
                                        <Button disabled={paid} onClick={() => this.prev()}>
                                            Quay lại
                                        </Button>
                                    )
                                }
                                {
                                    current === steps.length - 1
                                    && <Button className="float-right" type="primary" disabled={paid} onClick={this.pay}>Thanh toán</Button>
                                }
                            </div>
                        </Card>
                    </Col>

                    <Col {...layout.cartZone}>
                        <Card title="Giỏ hàng của bạn" bordered={true} headStyle={{ background: 'rgb(196, 196, 196)', color: 'black' }}>
                            <List
                                itemLayout="vertical"
                                dataSource={cartData}
                                footer={
                                    <div>
                                        <Row>
                                            <Col span={12}><h5>Tổng: </h5></Col>
                                            <Col span={12}><h5 className="float-right">${summary}</h5></Col>
                                        </Row>
                                    </div>
                                }
                                renderItem={item => (
                                    <List.Item
                                        extra={<h5>${item.price * item.quantity} </h5>}
                                    >
                                        <List.Item.Meta
                                            avatar={<Badge count={item.quantity}><Avatar className="wrapper" shape='square' size={100} src={item.img} /></Badge>}
                                            title={<a href="/"> <b>{item.name}</b></a>}
                                            description={
                                                <div>
                                                    <b>Size: {item.size}</b><br />
                                                    <b>Giá: ${item.price} </b>
                                                </div>
                                            }
                                        />
                                    </List.Item>
                                )}
                            />
                        </Card>
                        <br />
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Checkout;

