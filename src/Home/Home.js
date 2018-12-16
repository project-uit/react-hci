import React, { Component } from 'react';
import Slider from "react-slick";
import { Layout, Menu, Breadcrumb, Icon, Input, Carousel, Button, Row, Col, Card } from "antd";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import './Home.css';
const prevArrow = <img src='http://localhost:3000/Images/icon_Left_Arrow-512.png' />
const nextArrow = <img src='http://localhost:3000/Images/icon_right_rounded-512.png' />
const { Meta } = Card;
class Home extends Component {

    state = {

    }
    componentWillMount() {

    }
    imgClick = () => {

    }
    render() {
        const settings1 = {
            dots: false,
            infinite: true,
            speed: 1500,
            arrows: false,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 3000,
            className: "slides",
        };
        const settings2 = {
            dots: false,
            infinite: true,
            speed: 800,
            arrows: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000,
            className: "slides",
        };
        return (

            <div>
                <Row>
                    <Col xs={24} sm={24} md={24} lg={24} className="p-1">
                        <Slider {...settings1} className="sale">
                            <div align="center">
                                <span>Hot trending trên thị trường</span>
                            </div>
                            <div align="center">
                                <span>Giày chất lượng cao giá rẻ</span>
                            </div>
                            <div align="center">
                                <span><a>Nhiều ưu đãi, khuyến mãi</a></span>
                            </div>
                            <div align="center">
                                <span>1 đổi 1 khi sản phẩm lỗi, bảo hành trực tuyến</span>
                            </div>
                        </Slider>
                    </Col>
                    <Col xs={24} sm={24} md={24} lg={24}>
                        <Slider {...settings2} >
                            <div>
                                <img src="http://localhost:3000/Images/NMD.jpg" alt="" className="img-thumbnail" className="img-carousel" onClick={this.imgClick} />
                            </div>
                            <div>
                                <img src="http://localhost:3000/Images/NikeRoshe.jpg" alt="" className="img-thumbnail" className="img-carousel" />
                            </div>
                            <div>
                                <img src="http://localhost:3000/Images/BB6141_01_standard.jpg" alt="" className="img-thumbnail" className="img-carousel" />
                            </div>
                            <div>
                                <img src="http://localhost:3000/Images/BB6141_01_standard.jpg" alt="" className="img-thumbnail" className="img-carousel" />
                            </div>
                        </Slider>
                    </Col>
                </Row>

                <Row className="m-3">
                    <Col xs={24} sm={24} md={24} lg={24}>
                        <h3 className="text-center"> Các sản phẩm bán chạy</h3>
                    </Col>
                    <Col xs={20} sm={20} md={20} lg={20} offset={2} className="light-gray" >
                        <Row className="p-1" gutter={8} >
                            <Col md={12} lg={12} xl={6} style={{ marginBottom: 8 }}>
                                <div className="wrapper" onClick={this.imgClick}>
                                    <img alt="example" src="http://localhost:3000/Images/NMD1.jpg" className="img-thumbnail thumbnail" />
                                    <a>Yeezy v2 350</a>
                                </div>
                            </Col>
                            <Col md={12} lg={12} xl={6} style={{ marginBottom: 8 }}>
                                <div className="wrapper">
                                    <img alt="example" src="http://localhost:3000/Images/NMD1.jpg" className="img-thumbnail thumbnail" />
                                    <a>Yeezy v2 350</a>
                                </div>
                            </Col>
                            <Col md={12} lg={12} xl={6} style={{ marginBottom: 8 }}>
                                <div className="wrapper">
                                    <img alt="example" src="http://localhost:3000/Images/NMD1.jpg" className="img-thumbnail thumbnail" />
                                    <a>Yeezy v2 350 </a>
                                </div>
                            </Col>
                            <Col md={12} lg={12} xl={6} style={{ marginBottom: 8 }}>
                                <div className="wrapper">
                                    <img alt="example" src="http://localhost:3000/Images/NMD1.jpg" className="img-thumbnail thumbnail" />
                                    <a>Yeezy v2 350 </a>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row className="m-3">
                    <Col xs={24} sm={24} md={24} lg={24}>
                        <h3 className="text-center"> Giới tính</h3>
                    </Col>
                    <Col xs={20} md={20} lg={20} xl={20} offset={2} className="light-gray">
                        <Row className="p-1" gutter={8}>
                            <Col md={8} lg={8} xl={8} style={{ marginBottom: 8 }}>
                                <div className="wrapper">
                                    <img alt="example" src="http://localhost:3000/Images/NMD1.jpg" className="img-thumbnail " />
                                    <a>Unisex</a>
                                </div>
                            </Col>
                            <Col md={8} lg={8} xl={8} style={{ marginBottom: 8 }}>
                                <div className="wrapper">
                                    <img alt="example" src="http://localhost:3000/Images/NMD1.jpg" className="img-thumbnail " />
                                    <a>Nam</a>
                                </div>
                            </Col>
                            <Col md={8} lg={8} xl={8}>
                                <div className="wrapper">
                                    <img alt="example" src="http://localhost:3000/Images/NMD1.jpg" className="img-thumbnail " />
                                    <a>Nữ</a>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <div align="center" className="m-3">
                    <img alt="example" src="http://localhost:3000/Images/4_storeimage_big.jpg" className="img-thumbnail " style={{ width: 576 }}/>
                    <img alt="example" src="http://localhost:3000/Images/_storeimage_big.jpg" className="img-thumbnail " style={{ width: 576 }}/>
                </div>
            </div>
        );
    }
}

export default Home;