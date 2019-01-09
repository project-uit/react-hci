import React, { Component } from 'react';
import { Grid, Col, Row, Content } from 'native-base';
import CardShoe from './../../Component/CardShoe/CardShoe';
class AllListShoe extends Component {

    toDetailShoe = () => {
        this.props.nav.navigate('DetailShoe')
    }
    render() {
        return (
            <Content>
                <Grid>
                    <Row >
                        <Col style={{ height: 240, backgroundColor: 'white', marginRight: 4 }}>
                            <CardShoe company="Adidas" name="YEEZY BOOST 350" gender="Nam" price="$420" img="https://www.flightclub.com/media/catalog/product/cache/1/image/1600x1140/9df78eab33525d08d6e5fb8d27136e95/8/0/805264_01.jpg" />
                        </Col>
                        <Col style={{ height: 240, backgroundColor: 'white' }}>
                            <CardShoe company="Adidas" name="Campus" gender="Nữ" price="$120" img="https://www.flightclub.com/media/catalog/product/cache/1/image/1600x1140/9df78eab33525d08d6e5fb8d27136e95/8/0/802283_01.jpg" />
                        </Col>
                    </Row>
                    <Row style={{ marginTop: 3, marginBottom: 5 }}>
                        <Col style={{ height: 240, backgroundColor: 'white', marginRight: 4 }}>
                            <CardShoe company="Nike" name="AIR JORDAN 1 RETRO" gender="Nam" price="$200" img="https://www.flightclub.com/media/catalog/product/cache/1/image/1600x1140/9df78eab33525d08d6e5fb8d27136e95/8/0/802799_01.jpg" />
                        </Col>
                        <Col style={{ height: 240, backgroundColor: 'white' }}>
                            <CardShoe company="Adidas"
                                toDetailShoe={this.toDetailShoe}
                                name="PW SOLAR HU MNDO"
                                gender="Nữ" price="$340"
                                img="https://www.flightclub.com/media/catalog/product/cache/1/image/1600x1140/9df78eab33525d08d6e5fb8d27136e95/8/0/805531_02.jpg" />

                        </Col>
                    </Row>
                    <Row >
                        <Col style={{ height: 240, backgroundColor: 'white', marginRight: 4 }}>
                            <CardShoe company="Converse" name="CT 70 HI" gender="Unisex" price="$70" img="https://www.flightclub.com/media/catalog/product/cache/1/image/1600x1140/9df78eab33525d08d6e5fb8d27136e95/c/o/converse-ct-70-hi-black-991859_1.png" />
                        </Col>
                        <Col style={{ height: 240, backgroundColor: 'white' }}>
                            <CardShoe company="Adidas" name="STAN SMITH W" gender="Nữ" price="$60" img="https://www.flightclub.com/media/catalog/product/cache/1/image/1600x1140/9df78eab33525d08d6e5fb8d27136e95/2/0/201035_01.jpg" />
                        </Col>
                    </Row>
                    <Row style={{ marginTop: 3, marginBottom: 5 }}>
                        <Col style={{ height: 240, backgroundColor: 'white', marginRight: 4, width: '50%' }}>
                            <CardShoe company="Nike" name="AIR JORDAN 1" gender="Nam" price="$600" img="https://www.flightclub.com/media/catalog/product/cache/1/image/1600x1140/9df78eab33525d08d6e5fb8d27136e95/8/0/805570_1.jpg" />
                        </Col>
                        <Col style={{ height: 240, backgroundColor: 'white', marginRight: 4, width: '50%' }}>
                            <CardShoe company="Nike" name="AIR JORDAN 1 SE MID" gender="Nam" price="$250" img="https://www.flightclub.com/media/catalog/product/cache/1/image/1600x1140/9df78eab33525d08d6e5fb8d27136e95/8/0/805223_01.jpg" />
                        </Col>
                    </Row>
                    <Row >
                        <Col style={{ height: 240, backgroundColor: 'white', marginRight: 4 }}>
                            <CardShoe company="Nike" name="AIR JORDAN 10 RETRO" gender="Nam" price="$400" img="https://www.flightclub.com/media/catalog/product/cache/1/image/1600x1140/9df78eab33525d08d6e5fb8d27136e95/8/0/804354_2.jpg" />
                        </Col>
                        <Col style={{ height: 240, backgroundColor: 'white' }}>
                            <CardShoe company="Nike"

                                name="PW SOLAR HU NMD"
                                gender="Nam" price="$340"
                                img="https://www.flightclub.com/media/catalog/product/cache/1/image/1600x1140/9df78eab33525d08d6e5fb8d27136e95/8/0/805266_02.jpg" />
                        </Col>
                    </Row>
                </Grid>
            </Content>
        );
    }
}

export default AllListShoe;