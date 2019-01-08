import React, { Component } from 'react';
import './Signup.css';
import { Row, Checkbox } from 'antd';
import { Col } from 'antd';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

class SignupForm extends Component {

    render() {
        return (
            <div>
                <Form className='form'>
                    <FormGroup>
                        <Label for="exampleEmail">HỌ TÊN *</Label>
                        <Input className='text-box' type="text" id="exampleEmail" placeholder="" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="examplePassword">TÊN TÀI KHOẢN *</Label>
                        <Input className='text-box' type="text" id="examplePassword" placeholder="" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="exampleEmail">EMAIL *</Label>
                        <Input className='text-box' type="email" id="exampleEmail" placeholder="" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="exampleEmail">MẬT KHẨU *</Label>
                        <Input className='text-box' type="password" id="exampleEmail" placeholder="" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="exampleEmail">XÁC NHẬN MẬT KHẨU *</Label>
                        <Input className='text-box' type="password" id="exampleEmail" placeholder="" />
                    </FormGroup>
                    <FormGroup>
                        <Checkbox>Đăng kí nhận email thông báo khuyến mãi và ưu đãi</Checkbox>
                    </FormGroup><br />
                    <Button className='button' size="lg" block>TẠO TÀI KHOẢN</Button>
                </Form>
            </div>
        );
    }
}

class LoginForm extends Component {

    render() {
        return (
            <div>
                <Form className='form'>
                    <FormGroup>
                        <Label for="examplePassword">TÊN TÀI KHOẢN *</Label>
                        <Input className='text-box' type="text" id="examplePassword" placeholder="" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="exampleEmail">MẬT KHẨU *</Label>
                        <Input className='text-box' type="password" id="exampleEmail" placeholder="" />
                    </FormGroup>
                    <br />
                    <p>QUÊN TÀI KHOẢN ?</p>
                    <Button className='button' size="lg" block>ĐĂNG NHẬP</Button>
                </Form>
            </div>
        );
    }
}

class Signup extends Component {
    render() {
        return (
            <div className='body'>
                <Row gutter={50}>
                    <Col xs={24} sm={24} md={16} lg={16} xl={16} >
                        <h3><b>TẠO TÀI KHOẢN</b></h3>
                        <Row gutter={50} className='div-body-color'>
                            <Col xs={24} sm={24} md={12} lg={12} xl={12} className="d-md-none">
                                <h6>TÍNH NĂNG THÊM!</h6>
                                Trong những tháng tới, chúng tôi sẽ khởi chạy nhiều chức năng đặc biệt cho người dùng đã đăng ký. Đăng ký để có quyền truy cập trước tiên.<br /><br />
                                <h6>LƯU GIỎ HÀNG CỦA BẠN CHO TẤT CẢ THIẾT BỊ!</h6>
                                Bạn sẽ có thể xem nội dung của giỏ hàng của mình trên tất cả các thiết bị; điện thoại, máy tính bảng và máy tính để bàn.<br /><br />
                                <h6>KIỂM TRA NHANH CHÓNG!</h6>
                                Bạn sẽ có thể lưu địa chỉ, tùy chọn giao hàng và hơn thế nữa.<br /><br />
                            </Col>
                            <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                                <SignupForm />
                            </Col>
                            <Col xs={24} sm={24} md={12} lg={12} xl={12} className='d-none d-md-block'>
                                <h6>TÍNH NĂNG THÊM!</h6>
                                Trong những tháng tới, chúng tôi sẽ khởi chạy nhiều chức năng đặc biệt cho người dùng đã đăng ký. Đăng ký để có quyền truy cập trước tiên.<br /><br />
                                <h6>LƯU GIỎ HÀNG CỦA BẠN CHO TẤT CẢ THIẾT BỊ!</h6>
                                Bạn sẽ có thể xem nội dung của giỏ hàng của mình trên tất cả các thiết bị; điện thoại, máy tính bảng và máy tính để bàn.<br /><br />
                                <h6>KIỂM TRA NHANH CHÓNG!</h6>
                                Bạn sẽ có thể lưu địa chỉ, tùy chọn giao hàng và hơn thế nữa.<br /><br />
                            </Col>
                        </Row>
                    </Col>

                    <Col xs={24} sm={24} md={8} lg={8} xl={8} >
                        <div className="d-md-none"><br /><br /></div>
                        <h3><b>ĐĂNG NHẬP</b></h3>
                        <div className='div-body-color'>
                            <LoginForm />
                        </div>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Signup;