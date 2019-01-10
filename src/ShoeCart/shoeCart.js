import React, { Component } from "react";
import "./shoeCart.css";
import { Row, Col, Button, InputNumber } from "antd";
import Slider from "react-slick";
import { red } from "ansi-colors";

const favorite_items = [
  {
    src: 'http://localhost:3000/Images/010138_01.jpg',
    altText: 'Slide 1',
    caption: 'Slide 1'
  },
  {
    src: 'http://localhost:3000/Images/012392_01.jpg',
    altText: 'Slide 2',
    caption: 'Slide 2'
  },
  {
    src: 'http://localhost:3000/Images/201035_01.jpg',
    altText: 'Slide 3',
    caption: 'Slide 3'
  },
  {
    src: 'http://localhost:3000/Images/201444_1.jpg',
    altText: 'Slide 4',
    caption: 'Slide 4'
  },
  {
    src: 'http://localhost:3000/Images/800345_1.jpg',
    altText: 'Slide 5',
    caption: 'Slide 5'
  },
  {
    src: 'http://localhost:3000/Images/804104_01.jpg',
    altText: 'Slide 6',
    caption: 'Slide 6'
  }
];

const cart_items = [
  {
    src: 'http://localhost:3000/Images/010138_01.jpg',
    altText: 'Shoes 1',
    name: 'Shoes 1',
    style: 'Style 1',
    colour: 'red',
    number: '4',
    price: '100$'
  },
  {
    src: 'http://localhost:3000/Images/012392_01.jpg',
    altText: 'Shoes 1',
    name: 'Shoes 2',
    style: 'Style 2',
    colour: 'red',
    number: '5',
    price: '100$'
  },
  {
    src: 'http://localhost:3000/Images/201035_01.jpg',
    altText: 'Shoes 1',
    name: 'Shoes 3',
    style: 'Style 3',
    colour: 'red',
    number: '1',
    price: '100$'
  }
];

class ShoeCart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      iconLoading: false,
    };
  }

  enterLoading = () => {
    this.setState({ loading: true });
  }

  enterIconLoading = () => {
    this.setState({ iconLoading: true });
  }

  render() {
    var settings = {
      slidesToShow: 4,
      slidesToScroll: 2,
      autoplay: true,
      autoplaySpeed: 4000,
      arrows: false,
      dots: false,
      infinite: true,
      pauseOnHover: true,
      speed: 500,
			responsive: [{
				breakpoint: 768,
				settings: {
					slidesToShow: 3
				}
			}, {
				breakpoint: 520,
				settings: {
					slidesToShow: 2
				}
			}]
    };

    const slider_slick_items = favorite_items.map((favorite_items) => {
      return (
        <div
          className = "slide-slick-item d-flex align-items-stretch"
          onExiting={this.onExiting}
          onExited={this.onExited}
          key={favorite_items.src}
        >
          <a className="btn image-container" href="#doesnotexits" draggable="false">
            <img className="img-fluid" src={favorite_items.src} alt={favorite_items.altText} draggable="false"></img>
            <div className="centered">{favorite_items.caption}</div>
          </a>
          
        </div>
      );
    });

    const list_cart_items = cart_items.map((cart_items) => {
      return (
        <div className="card-purchase">
          <Row>
            <Col xs={24} sm={24} md={24} lg={24}>
              <Row className = "d-flex align-content-start flex-wrap">
                <Col className="align-self-stretch d-flex align-items-stretch" xs={9} sm={9} md={9} lg={9}>
                  <div className="d-flex align-items-center">
                    <img className="img-fluid pr-3" src={cart_items.src} alt={cart_items.altText} draggable="false"></img>
                  </div>
                </Col>
                <Col xs={13} sm={13} md={13} lg={13}>
                  <h3 className="mb-2 shoe-name">{cart_items.name}</h3>
                  <h5>Kiểu dáng: {cart_items.style}</h5>
                  {/* <h5>Màu sắc:
                    <div className="round-circle" style={{background: red}}>
                    </div> 
                  </h5> */}
                  <h5>Số lượng: 
                    <InputNumber className="ml-1" defaultValue={cart_items.number} min={0} max={10} step={1}/>
                  </h5>
                  <h5>Giá: {cart_items.price}</h5>
                </Col>
                <Col className="d-flex align-content-end flex-wrap" xs={2} sm={2} md={2} lg={2}>
                    <div className="align-self-end">
                      <Button className="delete-button" type="danger" ghost><i class="far fa-trash-alt"></i></Button>
                    </div>
                </Col>
              </Row>
            </Col>
          </Row>
          
        </div>
      );
    });

    return (
      <div className="container gray-bg">
        <Row>
          <Col className="mb-3 mt-5" xs={24} sm={24} md={24} lg={24}>
            <Row>
                <Col className="mb-3" xs={24} sm={24} md={15} lg={15}>
                  <div className="cart">
                    <div className="cart-header">
                      <h3>Giỏ hàng ({cart_items.length})</h3>
                    </div>

                    <div className="cart-body">
                      {list_cart_items}
                    </div>
                  </div>
                </Col>

                <Col className="mb-3" xs={24} sm={24} md={9} lg={9}>
                    <div className="summary-container">
                      <h2 className="text-white">Tổng quan</h2>
                      <table className="table sumary-table">
                        <tbody>
                          <tr>
                            <td>Tổng:</td>
                            <td>1000$</td>
                          </tr>
                          <tr>
                            <td>Vận chuyển:</td>
                            <td>0$</td>
                          </tr>
                          <tr>
                            <td>Giảm giá:</td>
                            <td>10%</td>
                          </tr>
                          <tr>
                            <td>Thành tiền:</td>
                            <td>900$</td>
                          </tr>
                        </tbody>
                      </table>

                      <div class="input-group mb-3">
                        <div class="input-group-prepend">
                          <span class="input-group-text" id="basic-addon1"><i class="fas fa-tag"></i></span>
                        </div>
                        <input type="text" class="form-control" placeholder="Mã giảm giá" aria-label="Username" aria-describedby="basic-addon1"></input>
                      </div>

                      <div class="mt-1 d-flex flex-wrap justify-content-center">
                        <Button className="mb-1 text-white text-uppercase orange-long" loading={this.state.loading} onClick={this.enterLoading}>
                          Guest Checkout
                        </Button>
                        <Button className="text-white text-uppercase green-long" loading={this.state.iconLoading} onClick={this.enterIconLoading}>
                          Member Checkout
                        </Button>
                      </div>

                      

                    </div>
                </Col>
            </Row>
          </Col>

          {/* San pham quan tam */}
          <Col className="mb-3" xs={24} sm={24} md={24} lg={24}>
            <h3 className="d-flex justify-content-center"> Sản phẩm có thể bạn quan tâm </h3>
            <Slider {...settings}>
              {slider_slick_items}
            </Slider>
          </Col>
        </Row>
      </div >
    );
  }
}

export default ShoeCart;
