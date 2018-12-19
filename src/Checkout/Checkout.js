import './Checkout.css';
import React, { Component } from 'react';
import { Steps, Button, message, Card, Radio, Divider, Col, Row, Alert } from 'antd';
import StepOne from './StepOne';
import StepTwo from './StepTwo';
import StepThree from './StepThree';
import { database } from '../../firebase';
import moment from 'moment';

const Step = Steps.Step;

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

    pay = (e) => {
        e.preventDefault();
        const { customer, shipMethod, paymentMethod, total, discount, summary } = this.state;
        this.addNewOrder(customer, shipMethod, paymentMethod, total, discount, summary).then(function () {
            // success

        }).catch(function (error) {
            message.error('Thanh toán thất bại! ' + error)
        });

        this.setState({
            paid: true,
        });
    }

    addNewOrder(customer, shipMethod, paymentMethod, total, discount, summary) {
        // Get a key for a new order.
        var key = database.ref().child('orders').push().key;

        // A order entry.
        var order = {
            orderId: key,
            orderDate: moment().format("DD-MM-YYYY"),
            customerEmail: customer.email,
            customerName: customer.name,
            customerPhone: customer.prefix + customer.phone,
            customerAddress: customer.address,
            shipMethod: shipMethod,
            paymentMethod: paymentMethod,
            // total: total,
            // discount: discount,
            summary: summary,
            status: 'Mới nhận'
        };

        // Write order
        var updates = {};
        updates['/orders/' + key] = order;

        return database.ref().update(updates);
    }

    next() {
        const current = this.state.current + 1;
        this.setState({ current });
    }
    prev() {
        const current = this.state.current - 1;
        this.setState({ current });
    }

    render() {
        const { current, shipMethod, customer, total, discount, summary, paymentMethod, paid } = this.state;
        const layout = {
            paymentZone: { xs: 24, sm: 16, md: 16, lg: 16 },
            cartZone: { xs: 24, sm: 8, md: 8, lg: 8 },
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
                        <Card title="Thanh toán đơn hàng" bordered={true} >
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
                        <Card title="Giỏ hàng của bạn" bordered={true} style={{ width: '100%' }}>
                            <p>Card content</p>
                            <p>Card content</p>
                            <p>Card content</p>
                            <Divider></Divider>
                        </Card>
                        <br />
                        <Card title="Chế độ giao hàng" bordered={true} className="center-items" style={{ width: '100%' }}>
                            <div style={{ textAlign: 'center' }}>
                                <Radio.Group onChange={this.onChangeShipMethod} defaultValue="normal" buttonStyle="solid">
                                    <Radio.Button disabled={paid} value="default">Mặc định</Radio.Button>
                                    <Radio.Button disabled={paid} value="normal">Tiêu chuẩn</Radio.Button>
                                    <Radio.Button disabled={paid} value="fast">Nhanh</Radio.Button>
                                </Radio.Group>
                            </div>
                            <br /><br />
                            {shipMethod === 'default' &&
                                <p>Hình thức giao hàng mặc định ..... </p>
                            }
                            {shipMethod === 'normal' &&
                                <p>Hình thức giao hàng tiêu chuẩn ..... </p>
                            }
                            {shipMethod === 'fast' &&
                                <p>Hình thức giao hàng nhanh ..... </p>
                            }
                        </Card>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Checkout;
