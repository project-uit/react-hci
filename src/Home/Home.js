import React, { Component } from 'react';
import Slider from "react-slick";
import { Layout, Menu, Breadcrumb, Icon, Input, Carousel, Button, Row, Col, Card } from "antd";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import './Home.css';
import CardShoe from './../Component/CardShoe';
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
                <Row className="m-1">
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
                    <Col xs={24} sm={24} md={24} lg={24} className="silde-border">
                        <Slider {...settings2} >
                            <div className="hand-pointer">
                                <Row>
                                    <Col xs={12}>
                                        <img src="/Images/804354_1.jpg" alt="" className="img-carousel" />
                                    </Col>
                                    <Col xs={12}>
                                        <div className="m-4">
                                            <h2 className="text-title-carousel">Hot trending</h2>
                                            <h4 className="text-carousel">AIR JORDAN 10 RETRO</h4>
                                            <h4 className="price-carousel">$600</h4>
                                            <Button size="large">Mua ngay</Button>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                            <div className="hand-pointer">
                                <Col xs={12}>
                                    <img src="/Images/805531_01.jpg" alt="" className="img-carousel" />
                                </Col>
                                <Col xs={12}>
                                    <div className="m-4">
                                        <h2 className="text-title-carousel">Hot trending</h2>
                                        <h4 className="text-carousel">PW SOLAR HU NMDO</h4>
                                        <h4 className="price-carousel">$340</h4>
                                        <Button size="large">Mua ngay</Button>
                                    </div>
                                </Col>
                            </div>
                            <div className="hand-pointer">
                                <Col xs={12}>
                                    <img src="/Images/805570_4.jpg" alt="" className="img-carousel" />
                                </Col>
                                <Col xs={12}>
                                    <div className="m-4">
                                        <h2 className="text-title-carousel">Hot trending</h2>
                                        <h4 className="text-carousel">AIR JORDAN 1</h4>
                                        <h4 className="price-carousel">$400</h4>
                                        <Button size="large">Mua ngay</Button>
                                    </div>
                                </Col>
                            </div>
                        </Slider>
                    </Col>
                </Row>

                <Row className="m-3">
                    <Col xs={24} sm={24} md={24} lg={24}>
                        <h3 className="text-center"> Các sản phẩm bán chạy</h3>
                    </Col>
                    <Col xs={20} sm={20} md={20} lg={20} offset={2} >
                        <Row className="p-1" gutter={16} >
                            <Col md={12} lg={12} xl={6} style={{ marginBottom: 8 }}>
                                <CardShoe img="/Images/802799_01.jpg" company="Nike" name="AIR JORDAN 1 RETRO HIGH" money="$200" gender="Nam"/>
                            </Col>
                            <Col md={12} lg={12} xl={6} style={{ marginBottom: 8 }}>
                                <CardShoe img="/Images/805251_01.jpg" company="Converse" name="CHUCK 70 HI" money="$200" gender="Nam"/>
                            </Col>
                            <Col md={12} lg={12} xl={6} style={{ marginBottom: 8 }}>
                                <CardShoe img="/Images/800345_1.jpg" company="Adidas" name="TUBULAR NOVA PK" money="$400" gender="Nam"/>
                            </Col>
                            <Col md={12} lg={12} xl={6} style={{ marginBottom: 8 }}>
                                <CardShoe img="/Images/805223_01.jpg" company="Nike" name="AIR JORDAN 1 MID SE" money="$350" gender="Nam"/>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row className="m-3">
                    <Col xs={24} sm={24} md={24} lg={24}>
                        <h3 className="text-center"> Giới tính</h3>
                    </Col>
                    <Col xs={20} md={20} lg={20} xl={20} offset={2} >
                        <Row className="p-1" gutter={16}>
                            <Col md={8} lg={8} xl={8} style={{ marginBottom: 8 }}>
                                <CardShoe img="/Images/201444_1.jpg" company="Nam" />
                            </Col>
                            <Col md={8} lg={8} xl={8} style={{ marginBottom: 8 }}>
                                <CardShoe img="/Images/802070_01.jpg" company="Nữ" />
                            </Col>
                            <Col md={8} lg={8} xl={8}>
                                <CardShoe img="/Images/201035_01.jpg" company="Unisex" />
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row className="m-3">
                    <Col xs={20} offset={2}>
                        <Row gutter={8}>
                            <Col xs={24} sm={24} md={8} >
                                <img alt="example" src="/Images/4_storeimage_big.jpg" className="img-thumbnail" />
                            </Col>
                            <Col xs={24} sm={24} md={8}>
                                <img alt="example" src="/Images/_storeimage_big.jpg" className="img-thumbnail" />
                            </Col>
                            <Col xs={24} sm={24} md={8}>
                                <img alt="example" src="/Images/3_storeimage_big.jpg" className="img-thumbnail" />
                            </Col>
                        </Row>
                    </Col>

                </Row>
            </div>
        );
    }
}

export default Home;