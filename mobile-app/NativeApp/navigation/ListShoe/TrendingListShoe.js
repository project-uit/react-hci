import React, { Component } from 'react';
import { Grid, Col, Row, Content } from 'native-base';
import CardShoe from './../../Component/CardShoe/CardShoe';

class TrendingListShoe extends Component {
    render() {
        return (
            <Content>
                <Grid>
                    <Row >
                        <Col style={{ height: 240, backgroundColor: 'white', marginRight: 4 }}>
                            <CardShoe company="Nike" name="AIR JORDAN 10 RETRO" gender="Nam" price="$400" img="https://www.flightclub.com/media/catalog/product/cache/1/image/1600x1140/9df78eab33525d08d6e5fb8d27136e95/8/0/804354_1.jpg" />
                        </Col>
                        <Col style={{ height: 240, backgroundColor: 'white' }}>
                            <CardShoe company="Adidas" name="PW SOLAR HU MNDO" gender="Nữ" price="$340" img="https://www.flightclub.com/media/catalog/product/cache/1/image/1600x1140/9df78eab33525d08d6e5fb8d27136e95/8/0/805531_02.jpg" />
                        </Col>
                    </Row>
                    <Row style={{ marginTop: 3, marginBottom: 5 }}>
                        <Col style={{ height: 240, backgroundColor: 'white', marginRight: 4, width: '50%' }}>
                            <CardShoe company="Nike" name="AIR JORDAN 1" gender="Nam" price="$600" img="https://www.flightclub.com/media/catalog/product/cache/1/image/1600x1140/9df78eab33525d08d6e5fb8d27136e95/8/0/805570_1.jpg" />
                        </Col>
                    </Row>
                </Grid>
            </Content>
        );
    }
}

export default TrendingListShoe;