import React, { Component } from 'react';
import { Grid, Col, Row, Content } from 'native-base';
import CardShoe from './../../Component/CardShoe/CardShoe';

class PopularListShoe extends Component {
    render() {
        return (
            <Content>
                <Grid>
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
                            <CardShoe company="Nike" name="AIR JORDAN 1" gender="Nam" price="$600" img="https://www.flightclub.com/media/catalog/product/cache/1/image/1600x1140/9df78eab33525d08d6e5fb8d27136e95/8/0/805570_4.jpg" />
                        </Col>
                    </Row>
                </Grid>
            </Content>
        );
    }
}

export default PopularListShoe;