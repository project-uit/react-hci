import React, { Component } from "react";
import "./shoeDetails.css";
import styles from "../RangeSlider/styles.css";
import { Button, Row, Col } from "antd";
import { Slider } from 'reactrangeslider';
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
    src: 'data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_15ba800aa1d%20text%20%7B%20fill%3A%23555%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_15ba800aa1d%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22285.921875%22%20y%3D%22218.3%22%3EFirst%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E',
    altText: 'Slide 1',
    caption: 'Slide 1'
  },
  {
    src: 'data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_15ba800aa20%20text%20%7B%20fill%3A%23444%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_15ba800aa20%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23666%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22247.3203125%22%20y%3D%22218.3%22%3ESecond%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E',
    altText: 'Slide 2',
    caption: 'Slide 2'
  },
  {
    src: 'data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_15ba800aa21%20text%20%7B%20fill%3A%23333%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_15ba800aa21%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23555%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22277%22%20y%3D%22218.3%22%3EThird%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E',
    altText: 'Slide 3',
    caption: 'Slide 3'
  }
];

class ShoeDetails extends Component {
  constructor(props) {
    super(props);
    this.state = { activeIndex: 0, collapse: false };
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

    return (
      <div className="container mt-3 mb-5">
        <Row>
          <Col xs={24} sm={24} md={24} lg={24}>
            <Row>
              <Col xs={24} sm={24} md={9} lg={9}>
                <Carousel className="mb-3"
                  activeIndex={activeIndex}
                  next={this.next}
                  previous={this.previous}
                >
                  {slides}
                  <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
                  <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
                </Carousel>
              </Col>
              <Col className="pl-3" xs={24} sm={24} md={15} lg={15}>
                <Row>
                  <Col xs={24} sm={24} md={24} lg={24}>
                    <h6 className="ml-5">
                      Giày nam
                    </h6>
                    <h5 className="text-center ml-5">
                      Nike Air Max 95 SE
                    </h5>
                    <h5 className="ml-5">
                      Chọn Size
                    </h5>
                    <div className="row size-box d-flex justify-content-center">
                      <div className="btn-group" data-toggle="buttons">
                        <Label className="m-1 btn btn-size" for='radio35'>35
                          <Input type="radio" name='radio' id='radio35'></Input>
                          <div className="checkmark"></div>
                        </Label>
                        <Label className="m-1 btn btn-size" for='radio36'>36
                          <Input type="radio" name='radio' id='radio36'></Input>
                          <div className="checkmark"></div>
                        </Label>
                        <Label className="m-1 btn btn-size" for='radio37'>37
                          <Input type="radio" name='radio' id='radio37'></Input>
                          <div className="checkmark"></div>
                        </Label>
                      </div>
                    </div>

                    <div className="row size-box d-flex justify-content-center">
                      <div className="btn-group item-center" data-toggle="buttons">
                        <Label className="m-1 btn btn-size" for='radio38'>38
                          <Input type="radio" name='radio' id='radio38'></Input>
                          <div className="checkmark"></div>
                        </Label>
                        <Label className="m-1 btn btn-size" for='radio39'>39
                          <Input type="radio" name='radio' id='radio39'></Input>
                          <div className="checkmark"></div>
                        </Label>
                        <Label className="m-1 btn btn-size" for='radio40'>40
                          <Input type="radio" name='radio' id='radio40'></Input>
                          <div className="checkmark"></div>
                        </Label>
                      </div>
                    </div>
                  </Col>
                </Row>

                <Row className="d-flex justify-content-center mt-3">
                  <Button className="btn-green" type="primary">Thêm vào giỏ hàng</Button>
                </Row>

                <Row className="mt-3">
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
                <Slider
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
                <Slider
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
                <Slider
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


              <Col className="pl-5 p-3" xs={24} sm={24} md={15} lg={15}>
                <h4>Best Shoes Ever</h4>
                <p>
                  <p>Giày thoải mái nhất mà tôi đã từng đi, nó chỉ cần lót thêm đệm để mang đến cho bạn một trải nghiệm hoàn hảo.
                  Chưa kể trông nó còn rất đẹp. Chúng có màu xanh hơn một chút so với hình ảnh, nhưng tôi 
                  thực sự thích chúng theo cách này nhiều hơn!
                  </p>
                  <img src="http://localhost:3000/Images/NikeRoshe.jpg" alt="" className="img-thumbnail img-comment"></img>
                </p>

                <Collapse id="collapseExample" isOpen={this.state.collapse}>
                  <h4>Good Shoes</h4>
                  <p>Giày thoải mái nhất mà tôi đã từng đi, nó chỉ cần lót thêm đệm để mang đến cho bạn một trải nghiệm hoàn hảo.
                  Chưa kể trông nó còn rất đẹp. Chúng có màu xanh hơn một chút so với hình ảnh, nhưng tôi 
                  thực sự thích chúng theo cách này nhiều hơn!
                  </p>
                  <img src="http://localhost:3000/Images/NikeRoshe.jpg" alt="" className="img-thumbnail img-comment"></img>
                </Collapse>

                <a href="#collapseExample" className="btn p mt-2 right" aria-expanded={this.state.collapse} onClick={this.toggle}>
                  <span className="collapsed" isOpen={this.state.collapse}>
                    Xem thêm bình luận
                  </span>
                  <span className="expanded">
                    Ẩn bớt bình luận
                  </span>
                </a>
              </Col>
            </Row>
          </Col>
        </Row>
      </div >
    );
  }
}

export default ShoeDetails;
