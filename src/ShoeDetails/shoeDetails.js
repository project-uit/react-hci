import React, { Component } from "react";
import "./shoeDetails.css";
import styles from "../RangeSlider/styles.css";
import { Button, Row, Col, Rate } from "antd";
import { Slider as RangeSlider } from 'reactrangeslider';
import Slider from "react-slick";
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  Label, 
  Input,
  Collapse
} from 'reactstrap';

const items = [
  {
    src: 'http://localhost:3000/Images/nike-roshe-run-flyknit-wolf-grey-1.jpg',
    altText: 'Slide 1',
    caption: 'Slide 1'
  },
  {
    src: 'http://localhost:3000/Images/nike-roshe-run-flyknit-wolf-grey-2.jpg',
    altText: 'Slide 2',
    caption: 'Slide 2'
  },
  {
    src: 'http://localhost:3000/Images/nike-roshe-run-flyknit-wolf-grey-3.jpg',
    altText: 'Slide 3',
    caption: 'Slide 3'
  }
];

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

class ShoeDetails extends Component {
  constructor(props) {
    super(props);
    this.state = { activeIndex: 0, collapse: false, selected: 'radio37' };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }

  onExiting() {
    this.animating = true;
  }

  onExited() {
    this.animating = false;
  }

  next() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }


  render() {
    const { activeIndex } = this.state;

    const slides = items.map((item) => {
      return (
        <CarouselItem
          onExiting={this.onExiting}
          onExited={this.onExited}
          key={item.src}
        >
          <img className="img-fluid" src={item.src} alt={item.altText} />
        </CarouselItem>
      );
    });

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
          <a className="btn image-container" href="#doesnotexits">
            <img className="img-fluid" src={favorite_items.src} alt={favorite_items.altText} draggable="false"></img>
            <div className="centered">{favorite_items.caption}</div>
          </a>
          
        </div>
      );
    });

    return (
      <div className="container gray-bg">
        <Row>
          <Col className="mt-3" xs={24} sm={24} md={24} lg={24}>
            <Row className="d-flex align-content-start flex-wrap">
              <Col className="align-self-stretch d-flex align-items-stretch" xs={24} sm={24} md={9} lg={9}>
                <Carousel className="mb-3 d-flex align-items-center"
                  activeIndex={activeIndex}
                  next={this.next}
                  previous={this.previous}
                >
                  {slides}
                  <CarouselControl className="bold-btn" direction="prev" directionText="Previous" onClickHandler={this.previous} />
                  <CarouselControl className="bold-btn" direction="next" directionText="Next" onClickHandler={this.next} />
                </Carousel>
              </Col>
              <Col className="pl-3 align-self-stretch" xs={24} sm={24} md={15} lg={15}>
                <Row>
                  <Col className="d-flex justify-content-center" xs={24} sm={24} md={24} lg={24}>
                    <div style={{ width: 300 }}>
                    <h6>
                      Giày nam
                    </h6>
                    <h5 className="text-center shoe-title">
                      Nike Air Max 95 SE
                    </h5>
                    <h6>
                      Chọn Size
                    </h6>
                    <div className="row size-box d-flex justify-content-center">
                      <div className="btn-group align-content-start flex-wrap justify-content-center" style={{ width: 170 }} data-toggle="buttons">
                        <Label className="m-1 btn btn-size" for='radio35'>35
                          <Input type="radio" name='radio' id='radio35' value='radio35'
                          checked={this.state.selected === 'radio35'} onChange={(e) => this.setState({ selected: e.target.value })}
                          ></Input>
                          <div className="checkmark"></div>
                        </Label>
                        <Label className="m-1 btn btn-size" for='radio36'>36
                          <Input type="radio" name='radio' id='radio36' value='radio36'
                          checked={this.state.selected === 'radio36'} onChange={(e) => this.setState({ selected: e.target.value })}
                          ></Input>
                          <div className="checkmark"></div>
                        </Label>
                        <Label className="m-1 btn btn-size" for='radio37'>37
                          <Input type="radio" name='radio' id='radio37' value='radio37'
                          checked={this.state.selected === 'radio37'} onChange={(e) => this.setState({ selected: e.target.value })}
                          ></Input>
                          <div className="checkmark"></div>
                        </Label>
                        <Label className="m-1 btn btn-size" for='radio38'>38
                          <Input type="radio" name='radio' id='radio38' value='radio38'
                          checked={this.state.selected === 'radio38'} onChange={(e) => this.setState({ selected: e.target.value })}
                          ></Input>
                          <div className="checkmark"></div>
                        </Label>
                        <Label className="m-1 btn btn-size" for='radio39'>39
                          <Input type="radio" name='radio' id='radio39' value='radio39'
                          checked={this.state.selected === 'radio39'} onChange={(e) => this.setState({ selected: e.target.value })}
                          ></Input>
                          <div className="checkmark"></div>
                        </Label>
                        <Label className="m-1 btn btn-size" for='radio40'>40
                          <Input type="radio" name='radio' id='radio40' value='radio40'
                          checked={this.state.selected === 'radio40'} onChange={(e) => this.setState({ selected: e.target.value })}
                          ></Input>
                          <div className="checkmark"></div>
                        </Label>
                        <Label className="m-1 btn btn-size" for='radio41'>41
                          <Input type="radio" name='radio' id='radio41' value='radio41'
                          checked={this.state.selected === 'radio41'} onChange={(e) => this.setState({ selected: e.target.value })}
                          ></Input>
                          <div className="checkmark"></div>
                        </Label>
                        <Label className="m-1 btn btn-size" for='radio42'>42
                          <Input type="radio" name='radio' id='radio42' value='radio42'
                          checked={this.state.selected === 'radio42'} onChange={(e) => this.setState({ selected: e.target.value })}
                          ></Input>
                          <div className="checkmark"></div>
                        </Label>
                        <Label className="m-1 btn btn-size" for='radio43'>43
                          <Input type="radio" name='radio' id='radio43' value='radio43'
                          checked={this.state.selected === 'radio43'} onChange={(e) => this.setState({ selected: e.target.value })}
                          ></Input>
                          <div className="checkmark"></div>
                        </Label>
                        <Label className="m-1 btn btn-size" for='radio44'>44
                          <Input type="radio" name='radio' id='radio44' value='radio44'
                          checked={this.state.selected === 'radio44'} onChange={(e) => this.setState({ selected: e.target.value })}
                          ></Input>
                          <div className="checkmark"></div>
                        </Label>
                      </div>
                    </div>
                    </div>
                  </Col>
                </Row>

                <Row className="d-flex justify-content-center mt-3">
                  <Button className="btn-green" type="primary">Thêm vào giỏ hàng</Button>
                </Row>

                <Row className="mt-3 pl-3 text-justify">
                  <p className="font-weight-bold">
                    The Nike Air Max 95 made its mark as the first shoe to include visible 
                    Nike Air cushioning in the forefoot. The Nike Air Max 95 SE Men's 
                    Shoe energises the iconic design with updated materials in a variety of textures and accents.
                    <br></br>
                    <br></br>
                    *Colour Shown: Whest/Light Bone/Black/Wheat
                    <br></br>
                    *Style: AJ2018-700
                  </p>
                </Row>             
              </Col>
            </Row>
            
            <Row>
              <Col xs={24} sm={24} md={9} lg={9}>
                <h2>Đánh giá sản phẩm</h2>
                {/* size */}
                <p className="font-weight-bold h5 mt-3">Size</p>
                <RangeSlider
                  step={2}
                  disabled
                  defaultValue={75}
                  onChange={this.onChange}
                  wrapperClassName={styles.slider}
                  trackClassName={styles.sliderTrack}
                  handleClassName={styles.sliderHandle}
                  disabledHandleClassName={styles.disabledSliderHandle}
                />
                <div className="under-slider d-flex justify-content-between">
                  <div className="p text-uppercase small">Runs small</div>
                  <div className="p text-uppercase small">Runs big</div>
                </div>

                {/* Su thoai mai */}
                <p className="font-weight-bold h5 mt-3">Sự thoải mái</p>
                <RangeSlider
                  step={2}
                  disabled
                  defaultValue={95}
                  onChange={this.onChange}
                  wrapperClassName={styles.slider}
                  trackClassName={styles.sliderTrack}
                  handleClassName={styles.sliderHandle}
                  disabledHandleClassName={styles.disabledSliderHandle}
                />
                <div className="under-slider d-flex justify-content-between">
                  <div className="p text-uppercase small">Không thoải mái</div>
                  <div className="p text-uppercase small">Rất thoải mái</div>
                </div>

                {/* Do ben */}
                <p className="font-weight-bold h5 mt-3">Độ bền</p>
                <RangeSlider
                  step={2}
                  disabled
                  defaultValue={50}
                  onChange={this.onChange}
                  wrapperClassName={styles.slider}
                  trackClassName={styles.sliderTrack}
                  handleClassName={styles.sliderHandle}
                  disabledHandleClassName={styles.disabledSliderHandle}
                />
                <div className="under-slider d-flex justify-content-between">
                  <div className="p text-uppercase small">Không bền</div>
                  <div className="p text-uppercase small">Rất bền</div>
                </div>
              </Col>


              <Col className="pl-3" xs={24} sm={24} md={15} lg={15}>
                <div className="comment p-3">
                  <h4>Best Shoes Ever</h4>
                  <Rate allowHalf defaultValue={5} disabled />
                  <p>
                    <p>Giày mang rất thoải mái, kiểu dáng này là loại mà mình thích nhất, mình thường mang để chơi thể thao vào mỗi sáng sớm
                      rất êm, thực sự rất tốt. Shiper rất nhanh, nhiệt tình và vui vẻ, mình rất thích việc shop cho gửi hàng đến tận nơi rồi mới
                      thanh toán, rất tiện dụng!
                    </p>
                    <img src="http://localhost:3000/Images/nike roshe flyknit-real.jpg" alt="" className="img-thumbnail img-comment"></img>
                  </p>
                </div>
                
                <Collapse id="collapseExample" isOpen={this.state.collapse}>
                  <div className="comment p-3">
                    <h4>Good Shoes</h4>
                    <Rate allowHalf defaultValue={4.5} disabled />
                    <p>Giày thoải mái nhất mà tôi đã từng đi, nó chỉ cần lót thêm đệm để mang đến cho bạn một trải nghiệm hoàn hảo.
                    Chưa kể trông nó còn rất đẹp. Chúng có màu sáng hơn một chút so với hình ảnh, nhưng tôi 
                    thực sự thích chúng theo cách này nhiều hơn!
                    </p>
                    <img src="http://localhost:3000/Images/Nike-Flyknit-Roshe-Run-Charcoal-real-2.jpg" alt="" className="img-thumbnail img-comment"></img>
                  </div>
                </Collapse>
                <Row className="d-flex justify-content-end mb-3">
                  <a href="#collapseExample" className="btn p mt-0 right" aria-expanded={this.state.collapse} onClick={this.toggle}>
                    <span className="collapsed" isOpen={this.state.collapse}>
                      Xem thêm bình luận
                    </span>
                    <span className="expanded">
                      Ẩn bớt bình luận
                    </span>
                  </a>
                </Row>
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

export default ShoeDetails;
