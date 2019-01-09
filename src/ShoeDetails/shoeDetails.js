import React, { Component } from "react";
import "./shoeDetails.css";
import styles from "../RangeSlider/styles.css";
import { Button, Row, Col, Rate, Comment, Icon, Tooltip, Avatar, List, Input as InputAnt, Form } from "antd";
import { Slider as RangeSlider } from 'reactrangeslider';
import Slider from "react-slick";
import moment from 'moment';
import { Link } from 'react-router-dom';
import CardShoe from './../Component/CardShoe';
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

const TextArea = InputAnt.TextArea;

const CommentList = ({ comments }) => (
  <List
    dataSource={comments}
    header={`${comments.length + 2} ${comments.length > 1 ? 'replies' : 'reply'}`}
    itemLayout="horizontal"
    renderItem={props => <Comment {...props} />}
  />
);

const Editor = ({
  onChange, onSubmit, submitting, value,
}) => (
    <div>
      <Rate />
      <Form.Item>
        <TextArea rows={4} onChange={onChange} value={value} />
      </Form.Item>
      <Form.Item>
        <Button
          htmlType="submit"
          loading={submitting}
          onClick={onSubmit}
          type="primary"
        >
          Thêm bình luận
      </Button>
      </Form.Item>
    </div>
  );

class ShoeDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0,
      collapse: false,
      selected: 'radio37',

      likes: 0,
      dislikes: 0,
      action: null,

      comments: [],
      submitting: false,
      value: '',
      chkBoxSize: [], // hung
      chkBoxColor: [false, true, false, false, false, false, false, false, false, false,] // hung
    };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
    this.toggle = this.toggle.bind(this);
  }
  // hung
  chkBoxColorClick(index) {
    let items = [false, false, false, false, false, false, false, false, false, false,];
    items[index] = !items[index];
    this.setState({
      chkBoxColor: items
    })
  }
  // hung
  handleChangeChk(event, index) {

    let items = this.state.chkBoxSize;
    for (let i = 0; i < items.length; i++) {
      items[i] = "ant-btn ant-btn-circle"
    }
    items[index] = "ant-btn ant-btn-circle active";

    this.setState({
      chkBoxSize: items
    })
  }
  // hung
  componentWillMount() {
    var indents = [];
    for (var i = 0; i < 10; i++) {
      indents.push("ant-btn ant-btn-circle");
    }
    indents[0] = "ant-btn ant-btn-circle active";
    this.setState({
      chkBoxSize: indents
    })
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

  like = () => {
    this.setState({
      likes: 1,
      dislikes: 0,
      action: 'liked',
    });
  }

  dislike = () => {
    this.setState({
      likes: 0,
      dislikes: 1,
      action: 'disliked',
    });
  }

  handleSubmit = () => {
    if (!this.state.value) {
      return;
    }

    this.setState({
      submitting: true,
    });

    setTimeout(() => {
      this.setState({
        submitting: false,
        value: '',
        comments: [
          {
            actions: ([
              <span>
                <Tooltip title="Like">
                  <Icon
                    type="like"
                    theme='outlined'
                    onClick={this.like}
                  />
                </Tooltip>
                <span style={{ paddingLeft: 8, cursor: 'auto' }}>
                  0
                    </span>
              </span>,
              <span>
                <Tooltip title="Dislike">
                  <Icon
                    type="dislike"
                    theme='outlined'
                    onClick={this.dislike}
                  />
                </Tooltip>
                <span style={{ paddingLeft: 8, cursor: 'auto' }}>
                  0
                  </span>
              </span>,
              <span>Reply to</span>
            ]),
            author: 'Hao Nguyen',
            avatar: 'http://localhost:3000/Images/my-avatar.png',
            content: (
              <div>
                <Rate allowHalf defaultValue={5} disabled />
                <p>{this.state.value}</p>
                <img src="http://localhost:3000/Images/nike roshe flyknit-real.jpg" alt="" className="img-thumbnail img-comment"></img>
              </div>
            ),
            datetime: moment().fromNow(),
          },
          ...this.state.comments,
        ],
      });
    }, 1000);
  }

  handleChange = (e) => {
    this.setState({
      value: e.target.value,
    });
  }

  render() {
    const { activeIndex } = this.state;
    const { likes, dislikes, action } = this.state;
    const { comments, submitting, value } = this.state;

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
      arrows: true,
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

          className="slide-slick-item d-flex align-items-stretch"
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

    const actions = [
      <span>
        <Tooltip title="Like">
          <Icon
            type="like"
            theme={action === 'liked' ? 'filled' : 'outlined'}
            onClick={this.like}
          />
        </Tooltip>
        <span style={{ paddingLeft: 8, cursor: 'auto' }}>
          {likes}
        </span>
      </span>,
      <span>
        <Tooltip title="Dislike">
          <Icon
            type="dislike"
            theme={action === 'disliked' ? 'filled' : 'outlined'}
            onClick={this.dislike}
          />
        </Tooltip>
        <span style={{ paddingLeft: 8, cursor: 'auto' }}>
          {dislikes}
        </span>
      </span>,
      <span>Reply to</span>,
    ];

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
                        Nike roshe run flyknit wolf grey
                    </h5>
                      <h6 className="text-center">
                        $240
                    </h6>
                      <h6>
                        Chọn Size
                    </h6>

                      <Row>
                        <Col offset={5}>
                          <div className="size-row">
                            <label className={this.state.chkBoxSize[0]} >
                              <input type="checkbox" style={{ display: 'none' }}
                                defaultChecked={false}
                                onChange={(e) => this.handleChangeChk(e, 0)}
                              />
                              35
                                                            </label>
                            <label className={this.state.chkBoxSize[1]}>
                              <input type="checkbox" style={{ display: 'none' }} defaultChecked={false}
                                onChange={(e) => this.handleChangeChk(e, 1)}
                              />
                              36
                                                            </label>
                            <label className={this.state.chkBoxSize[2]}>
                              <input type="checkbox" style={{ display: 'none' }} defaultChecked={false}
                                onChange={(e) => this.handleChangeChk(e, 2)}
                              />
                              37
                                                            </label>
                            <label className={this.state.chkBoxSize[3]}>
                              <input type="checkbox" style={{ display: 'none' }} defaultChecked={false}
                                onChange={(e) => this.handleChangeChk(e, 3)}
                              />
                              38
                                                            </label>
                            <label className={this.state.chkBoxSize[4]}>
                              <input type="checkbox" style={{ display: 'none' }} defaultChecked={false}
                                onChange={(e) => this.handleChangeChk(e, 4)}
                              />
                              39
                                                            </label>
                          </div>
                          <div className="size-row">
                            <label className={this.state.chkBoxSize[5]}>
                              <input type="checkbox" style={{ display: 'none' }} defaultChecked={false}
                                onChange={(e) => this.handleChangeChk(e, 5)}
                              />
                              40
                                                            </label>
                            <label className={this.state.chkBoxSize[6]}>
                              <input type="checkbox" style={{ display: 'none' }} defaultChecked={false}
                                onChange={(e) => this.handleChangeChk(e, 6)} />
                              41
                                                            </label>
                            <label className={this.state.chkBoxSize[7]}>
                              <input type="checkbox" style={{ display: 'none' }} defaultChecked={false}
                                onChange={(e) => this.handleChangeChk(e, 7)} />
                              42
                                                            </label>
                            <label className={this.state.chkBoxSize[8]}>
                              <input type="checkbox" style={{ display: 'none' }} defaultChecked={false}
                                onChange={(e) => this.handleChangeChk(e, 8)} />
                              43
                                                            </label>
                            <label className={this.state.chkBoxSize[9]}>
                              <input type="checkbox" style={{ display: 'none' }} defaultChecked={false}
                                onChange={(e) => this.handleChangeChk(e, 9)} />
                              44
                                                            </label>
                          </div>
                        </Col>

                      </Row>
                      <h6>
                        Chọn màu
                    </h6>
                      <Row>
                        <Col offset={5}>
                          <div className="container-flex-chkboxColor">
                            <label>
                              <Link to="#" className="rounded-circle checkbox-color" style={{ backgroundColor: '#555', textAlign: 'center' }} onClick={() => this.chkBoxColorClick(0)}>
                                {
                                  this.state.chkBoxColor[0] && (
                                    <Icon type="check" style={{ marginTop: 7 }} />
                                  )
                                }
                              </Link>
                            </label>
                            <label>
                              <Link to="#" className="rounded-circle checkbox-color" style={{ backgroundColor: 'white', textAlign: 'center' }} onClick={() => this.chkBoxColorClick(1)}>
                                {
                                  this.state.chkBoxColor[1] && (
                                    <Icon type="check" style={{ marginTop: 7 }} />
                                  )
                                }
                              </Link>
                            </label>
                            <label>
                              <Link to="#" className="rounded-circle checkbox-color" style={{ backgroundColor: '#A40000', textAlign: 'center' }} onClick={() => this.chkBoxColorClick(2)}>
                                {
                                  this.state.chkBoxColor[2] && (
                                    <Icon type="check" style={{ marginTop: 7 }} />
                                  )
                                }
                              </Link>
                            </label>
                            <label>
                              <Link to="#" className="rounded-circle checkbox-color" style={{ backgroundColor: '#00D7DC', textAlign: 'center' }} onClick={() => this.chkBoxColorClick(3)}>
                                {
                                  this.state.chkBoxColor[3] && (
                                    <Icon type="check" style={{ marginTop: 7 }} />
                                  )
                                }
                              </Link>
                            </label>
                            <label>
                              <Link to="#" className="rounded-circle checkbox-color" style={{ backgroundColor: '#99B402', textAlign: 'center' }} onClick={() => this.chkBoxColorClick(4)}>
                                {
                                  this.state.chkBoxColor[4] && (
                                    <Icon type="check" style={{ marginTop: 7 }} />
                                  )
                                }
                              </Link>
                            </label>
                          </div>
                        </Col>
                      </Row>
                    </div>
                  </Col>
                </Row>

                <Row className="d-flex justify-content-center mt-3 mr-1">
                  <Button className="btn-green" type="primary">Thêm vào giỏ hàng</Button>
                </Row>

                <Row className="mt-3 pl-3 text-justify">
                  <p className="font-weight-bold">
                    The Nike Roshe made its mark as the first shoe to include visible
                    Nike Roshe cushioning in the forefoot. The Nike Roshe Men's
                    Shoe energises the iconic design with updated materials in a variety of textures and accents.
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
                  {comments.length > 0 && <CommentList comments={comments} />}
                  <Comment
                    actions={actions}
                    author={<a>Messi</a>}
                    avatar={(
                      <Avatar
                        src="http://localhost:3000/Images/avatar.jpg"
                        alt="Messi"
                      />
                    )}
                    content={(
                      <div>
                        <Rate allowHalf defaultValue={5} disabled />
                        <p>Giày mang rất thoải mái, kiểu dáng này là loại mà mình thích nhất, mình thường mang để chơi thể thao vào mỗi sáng sớm
                        rất êm, thực sự rất tốt. Shiper rất nhanh, nhiệt tình và vui vẻ, mình rất thích việc shop cho gửi hàng đến tận nơi rồi mới
                        thanh toán, rất tiện dụng!
                        </p>
                        <img src="http://localhost:3000/Images/nike roshe flyknit-real.jpg" alt="" className="img-thumbnail img-comment"></img>
                      </div>
                    )}
                    datetime={(
                      <Tooltip title={moment().format('YYYY-MM-DD HH:mm:ss')}>
                        <span>{moment().fromNow()}</span>
                      </Tooltip>
                    )}
                  />
                </div>

                <Collapse id="collapseExample" isOpen={this.state.collapse}>
                  <div className="comment p-3">
                    <Comment
                      actions={actions}
                      author={<a>Ronaldo</a>}
                      avatar={(
                        <Avatar
                          src="http://localhost:3000/Images/avatar2.png"
                          alt="Ronaldo"
                        />
                      )}
                      content={(
                        <div>
                          <Rate allowHalf defaultValue={4.5} disabled />
                          <p>Giày thoải mái nhất mà tôi đã từng đi, nó chỉ cần lót thêm đệm để mang đến cho bạn một trải nghiệm hoàn hảo.
                          Chưa kể trông nó còn rất đẹp. Chúng có màu sáng hơn một chút so với hình ảnh, nhưng tôi
                          thực sự thích chúng theo cách này nhiều hơn!
                          </p>
                          <img src="http://localhost:3000/Images/Nike-Flyknit-Roshe-Run-Charcoal-real-2.jpg" alt="" className="img-thumbnail img-comment"></img>
                        </div>
                      )}
                      datetime={(
                        <Tooltip title={moment().format('YYYY-MM-DD HH:mm:ss')}>
                          <span>{moment().fromNow()}</span>
                        </Tooltip>
                      )}
                    />
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
          {/* Comment */}
          <Col className="mb-3" xs={24} sm={24} md={24} lg={24}>
            <div>
              <Comment
                avatar={(
                  <Avatar
                    src="http://localhost:3000/Images/my-avatar.png"
                    alt="Hao Nguyen"
                  />
                )}
                content={(
                  <Editor
                    onChange={this.handleChange}
                    onSubmit={this.handleSubmit}
                    submitting={submitting}
                    value={value}
                  />
                )}
              />
            </div>
          </Col>

          {/* San pham quan tam */}
          <Col className="mb-3" xs={24} sm={24} md={24} lg={24}>
            <h3 className="d-flex justify-content-center"> Sản phẩm có thể bạn quan tâm </h3>
            <Slider {...settings}
            >
              <Row >
                <Col xs={23}>
                  <CardShoe img="/Images/805264_01.jpg" company="Adidas" name="YZ BOOST 350" money="$200" gender="Nam" />
                </Col>
              </Row>
              <Row>
                <Col xs={23}>
                  <CardShoe img="/Images/804104_01.jpg" company="Adidas" name="TUBULAR" money="$400" gender="Nam" />
                </Col>
              </Row>
              <Row>
                <Col xs={23}>
                  <CardShoe img="/Images/010138_01.jpg" company="Nike" name="AJ 19 SE" money="$200" gender="Nam" />
                </Col>
              </Row>
              <Row>
                <Col xs={23}>
                  <CardShoe img="/Images/805778_01.jpg" company="Vans" name="CLASSIC SLIP" money="$250" gender="Nữ" />
                </Col>
              </Row>
              <Row>
                <Col xs={23}>
                  <CardShoe img="/Images/801224_1.jpg" company="Adidas" name="Campus" money="$200" gender="Nữ" />
                </Col>
              </Row>
              <Row>
                <Col xs={23}>
                  <CardShoe img="/Images/800411_1.jpg" company="Adidas" name="NMD R1 W" money="$350" gender="Nữ" />
                </Col>
              </Row>
            </Slider>
          </Col>
        </Row>
      </div >
    );
  }
}

export default ShoeDetails;
