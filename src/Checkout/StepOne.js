import './Checkout.css';
import React, { Component } from 'react';
import { Form, Input, Tooltip, Icon, Select, Button } from 'antd';

const FormItem = Form.Item;
const Option = Select.Option;
const { TextArea } = Input;

class AddressForm extends Component {
    state = {
        customer: {
            email: '',
            name: '',
            phone: '',
            address: '',
        },
        isValid: false
    };

    next = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (err) {
                this.setState({ customer: values, isValid: false })
                this.props.handlerNext(values, false);
            } else {
                this.setState({ customer: values, isValid: true })
                this.props.handlerNext(values, true);
            }
        });
    }

    componentDidMount() {
        const { customer } = this.props;
        if (customer !== null) {
            this.props.form.setFieldsValue({
                'email': customer.email,
                'name': customer.name,
                'phone': customer.phone,
                'address': customer.address
            });
        }
    }

    render() {
        const { getFieldDecorator } = this.props.form;
        const formItemLayout = {
            labelCol: {
                xs: { span: 24 },
                sm: { span: 6 },
            },
            wrapperCol: {
                xs: { span: 24 },
                sm: { span: 15 },
            },
        };

        const prefixSelector = getFieldDecorator('prefix', {
            initialValue: '84',
        })(
            <Select style={{ width: 70 }}>
                <Option value="84">+84</Option>
            </Select>
        );

        return (
            <Form onSubmit={this.handleSubmit}>
                <FormItem
                    {...formItemLayout}
                    label={(
                        <span>
                            Email&nbsp;
                <Tooltip title="Chúng tôi sẽ gửi thông tin đơn hàng, thông tin khuyến mãi và các chương trình ưu đãi cho khách hàng">
                                <Icon type="question-circle-o" />
                            </Tooltip>
                        </span>
                    )}
                >
                    {getFieldDecorator('email', {
                        rules: [{
                            type: 'email', message: 'Email không hợp lệ!',
                        }, {
                            required: true, message: 'Email không được trống!',
                        }],
                    })(
                        <Input />
                    )}
                </FormItem>

                <FormItem
                    {...formItemLayout}
                    label="Tên khách hàng"
                >
                    {getFieldDecorator('name', {
                        rules: [{ required: true, message: 'Tên không được trống!', whitespace: true }],
                    })(
                        <Input />
                    )}
                </FormItem>

                <FormItem
                    {...formItemLayout}
                    label="Phone Number">
                    {getFieldDecorator('phone', {
                        rules: [{
                            required: true, message: 'Số điện thoại không được trống!',
                        }],
                    })(
                        <Input addonBefore={prefixSelector} style={{ width: '100%' }} />
                    )}
                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label="Địa chỉ">
                    {getFieldDecorator('address', {
                        rules: [{ required: true, message: 'Địa chỉ không được trống!', whitespace: true }],
                    })(
                        <TextArea placeholder="Địa chỉ nhận hàng" autosize={{ minRows: 2, maxRows: 6 }} />
                    )}
                </FormItem>
               
                <Button type="primary" onClick={this.next} className="float-right">Bước tiếp</Button>
            </Form>
        );
    }
}

const StepOne = Form.create()(AddressForm);
export default StepOne;

