import React, { Component } from 'react';
import { Platform, StyleSheet, View, Text, FlatList, ScrollView, Image, TouchableOpacity } from 'react-native';
import { Container, Header, Left, Body, Right, Button, Icon, Title, Drawer, Content, Footer, Badge, FooterTab, ListItem, Grid, Col } from 'native-base';
import CarouselDetailShoe from './../../Component/Carousel/CarouselDetailShoe';
import BottomNavigationDetailShoe from './../../Component/Common/BottomNavigationDetailShoe';
import Slider from "react-native-slider";


class DetailShoe extends Component {

    state = {
        chkBoxColor: [false, false, false, false, false],
    }

    onChangeColor(index) {
        let items = [false, false, false, false, false];

        items[index] = !items[index];
        this.setState({
            chkBoxColor: items
        })
    }

    render() {

        return (
            <Container>
                <Header style={{ backgroundColor: '#0F0F0F' }}>
                    <Left>
                        <Button transparent onPress={() => this.props.navigation.goBack()} style={{}}>
                            <Icon name='ios-arrow-back' size={30} />
                        </Button>
                    </Left>
                    <Body>
                        <Title>PW SOLAR HUMNDO</Title>
                    </Body>
                </Header>
                <Content>
                    <CarouselDetailShoe />
                    <View style={{ marginTop: 5 }}>
                        <Text style={{ fontSize: 15, marginLeft: 55 }}>Giày nam</Text>

                        <Text style={styles.text}>Adidas PW SOLAR HUMNDO</Text>
                        <Text style={styles.price}>$340</Text>
                    </View>
                    <View style={{ marginTop: 5 }}>
                        <Text style={{ fontSize: 15, marginLeft: 55 }}>Chọn size</Text>
                    </View>
                    <View style={{ marginTop: 5 }}>
                        <Text style={{ fontSize: 15, marginLeft: 55 }}>Chọn màu</Text>
                        <View style={{ flex: 1, flexDirection: 'column', alignItems: 'center' }}>
                            <ListItem style={{ margin: 'auto', width: '50%', borderBottomWidth: 0 }}>
                                <TouchableOpacity style={{ margin: 2 }} onPress={() => this.onChangeColor(0)}>
                                    <Badge style={{ backgroundColor: '#555', height: 32, width: 32, }}>
                                        {
                                            this.state.chkBoxColor[0] && (
                                                <Icon name="ios-checkmark" style={{ fontSize: 30, color: "#4494D5", lineHeight: 30, textAlign: 'center' }} />
                                            )
                                        }
                                    </Badge>
                                </TouchableOpacity>
                                <TouchableOpacity style={{ margin: 2 }} onPress={() => this.onChangeColor(1)}>
                                    <Badge style={{ backgroundColor: 'white', height: 32, width: 32, borderColor: 'black', borderWidth: 1 }}>
                                        {
                                            this.state.chkBoxColor[1] && (
                                                <Icon name="ios-checkmark" style={{ fontSize: 30, color: "#4494D5", lineHeight: 30, textAlign: 'center' }} />
                                            )
                                        }
                                    </Badge>
                                </TouchableOpacity>
                                <TouchableOpacity style={{ margin: 2 }} onPress={() => this.onChangeColor(2)}>
                                    <Badge style={{ backgroundColor: '#A40000', height: 32, width: 32, borderColor: 'black', borderWidth: 1 }}>
                                        {
                                            this.state.chkBoxColor[2] && (
                                                <Icon name="ios-checkmark" style={{ fontSize: 30, color: "#4494D5", lineHeight: 30, textAlign: 'center' }} />
                                            )
                                        }
                                    </Badge>
                                </TouchableOpacity>
                                <TouchableOpacity style={{ margin: 2 }} onPress={() => this.onChangeColor(3)}>
                                    <Badge style={{ backgroundColor: '#00D7DC', height: 32, width: 32, borderColor: 'black', borderWidth: 1 }}>
                                        {
                                            this.state.chkBoxColor[3] && (
                                                <Icon name="ios-checkmark" style={{ fontSize: 30, color: "#4494D5", lineHeight: 30, textAlign: 'center' }} />
                                            )
                                        }
                                    </Badge>
                                </TouchableOpacity>
                                <TouchableOpacity style={{ margin: 2 }} onPress={() => this.onChangeColor(4)}>
                                    <Badge style={{ backgroundColor: '#99B402', height: 32, width: 32, borderColor: 'black', borderWidth: 1 }}>
                                        {
                                            this.state.chkBoxColor[4] && (
                                                <Icon name="ios-checkmark" style={{ fontSize: 30, color: "#4494D5", lineHeight: 30, textAlign: 'center' }} />
                                            )
                                        }
                                    </Badge>
                                </TouchableOpacity>
                            </ListItem>
                        </View>
                    </View>
                    <View style={{ margin: 3 }}>
                        <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Đánh giá sản phẩm</Text>
                        <Text style={{ fontSize: 16, fontWeight: 'bold' }}>Size</Text>
                        <Slider
                            disabled={true}
                            value={5}
                            minimumValue={0}
                            maximumValue={50}
                        />
                        <Grid>
                            <Col><Text>RUNS SMALL</Text></Col>
                            <Col><Text style={{ textAlign: 'right' }}>RUNS BIG</Text></Col>
                        </Grid>
                    </View>
                    <View style={{ margin: 3 }}>
                        <Text style={{ fontSize: 16, fontWeight: 'bold' }}>Sự thoải mái</Text>
                        <Slider
                            disabled={true}
                            value={5}
                            minimumValue={0}
                            maximumValue={50}
                        />
                        <Grid>
                            <Col><Text style={{ fontSize: 12 }}>KHÔNG THOẢI MÁI</Text></Col>
                            <Col><Text style={{ textAlign: 'right', fontSize: 12 }}>RẤT THOẢI MÁI</Text></Col>
                        </Grid>
                    </View>
                    <View style={{ margin: 3,}}>
                        <Text style={{ fontSize: 16, fontWeight: 'bold' }}>Độ bền</Text>
                        <Slider
                            disabled={true}
                            value={5}
                            minimumValue={0}
                            maximumValue={50}
                        />
                        <Grid>
                            <Col><Text style={{ fontSize: 12 }}>KHÔNG BỀN</Text></Col>
                            <Col><Text style={{ textAlign: 'right', fontSize: 12 }}>RẤT BỀN</Text></Col>
                        </Grid>
                    </View>
                    <View style={{ margin: 5,  borderTopColor: 'black', borderTopWidth: 0.45  }}>
                        <Text style={{ fontSize: 15 }}>
                            The Nike Air Max 95 made its mark
                            as the first shoe to include visible Nike Air cushioning in the forefoot.
                            The Nike Air Max 95 SE Men's Shoe energises the iconic design with updated
                            materials in a variety of textures and accents.
                         </Text>
                    </View>
                </Content>
                <Footer style={{ backgroundColor: '#0F0F0F' }}>
                    <BottomNavigationDetailShoe navigation={this.props.navigation} />
                </Footer>
            </Container>

        );
    }
}

export default DetailShoe;

const styles = StyleSheet.create({

    text: {
        fontSize: 18,
        fontWeight: '400',
        fontFamily: 'Righteous, cursive',
        color: 'black',
        textAlign: 'center'
    },
    price: {
        textAlign: 'center',
        fontSize: 16,
        letterSpacing: 1,
        color: '#343434',
        fontFamily: 'sans-serif'
    }
});