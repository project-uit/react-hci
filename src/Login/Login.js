import './Login.css';
import React, { Component } from 'react';
import { Button, Checkbox, Icon, Form, Input } from 'antd';
import { Link } from 'react-router-dom';

class Login extends Component {
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });
    }

    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <Form onSubmit={this.handleSubmit} className="login-form">
                <Form.Item>
                    {getFieldDecorator('userName', {
                        rules: [{ required: true, message: 'Please input your username!' }],
                    })(
                        <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
                    )}
                </Form.Item>
                <Form.Item>
                    {getFieldDecorator('password', {
                        rules: [{ required: true, message: 'Please input your Password!' }],
                    })(
                        <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
                    )}
                </Form.Item>
                <Form.Item>
                    {getFieldDecorator('remember', {
                        valuePropName: 'checked',
                        initialValue: true,
                    })(
                        <Checkbox>Lưu đăng nhập</Checkbox>
                    )}
                    <Link className="float-right" to="/">Quên mật khẩu</Link><br/>
                    <Button type="primary" htmlType="submit" className="btnLogin">Đăng nhập</Button><br/>
                    Chưa có tài khoản ? <Link to="/">Đăng kí</Link>
                </Form.Item>
            </Form>
        );
    }
}
const LoginForm = Form.create()(Login);
export default Login = LoginForm;