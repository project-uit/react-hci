import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import {
    Container, Header, Title, Content, Button, Left, Right, Body, Icon, Text, List,
    ListItem, Thumbnail, Card, CardItem, Label, Item, Form
}
    from 'native-base';

export default class CheckoutSuccess extends Component {

    gotoHome = () => {
        this.props.navigation.navigate('Home')
    }

    render() {
        return (
            <Container>
                <Header>
                    <Left>
                        <Button transparent onPress={this.gotoHome}>
                            <Icon name='home' />
                        </Button>
                    </Left>
                    <Body>
                        <Title>Hoàn tất</Title>
                    </Body>
                    <Right />
                </Header>
                <Content>
                    <Card>
                        <CardItem header bordered style={{ backgroundColor: 'black' }}>
                            <Text style={styles.titleText}>Danh sách sản phẩm</Text>
                        </CardItem>
                        <List>
                            <ListItem avatar>
                                <Left>
                                    <Thumbnail square source={{ uri: 'https://www.flightclub.com/media/catalog/product/cache/1/thumbnail/240x170/9df78eab33525d08d6e5fb8d27136e95/2/0/201536_1.jpg' }} />
                                </Left>
                                <Body>
                                    <Text>Yeezy Boost 350 V2 </Text>
                                    <Text note numberOfLines={1}>Màu: Cblack/Red/Cblack</Text>
                                    <Text note numberOfLines={1}>Size: 9</Text>
                                    <Text note numberOfLines={1}>Giá: 950$</Text>
                                    <Text note numberOfLines={1}>Số lượng: 01</Text>
                                </Body>
                                <Right>
                                    <Right style={{
                                        justifyContent: 'center', alignItems: 'center'
                                    }}>
                                        <Text>980$</Text>
                                    </Right>
                                </Right>
                            </ListItem>
                            <ListItem avatar>
                                <Left>
                                    <Thumbnail square source={{ uri: 'https://www.flightclub.com/media/catalog/product/cache/1/thumbnail/240x170/9df78eab33525d08d6e5fb8d27136e95/2/0/201536_1.jpg' }} />
                                </Left>
                                <Body>
                                    <Text>Yeezy Boost 350 V2 </Text>
                                    <Text note numberOfLines={1}>Màu: Cblack/Red/Cblack</Text>
                                    <Text note numberOfLines={1}>Size: 9</Text>
                                    <Text note numberOfLines={1}>Giá: 950$</Text>
                                    <Text note numberOfLines={1}>Số lượng: 01</Text>
                                </Body>
                                <Right>
                                    <Right style={{
                                        justifyContent: 'center', alignItems: 'center'
                                    }}>
                                        <Text>980$</Text>
                                    </Right>
                                </Right>
                            </ListItem>
                        </List>
                    </Card>

                    <Card>
                        <CardItem header bordered style={{ backgroundColor: 'black' }}>
                            <Text style={styles.titleText}>Tổng quan</Text>
                        </CardItem>
                        <Form>
                            <Item >
                                <Label>Tên:</Label>
                                <Text>Nguyễn Văn A</Text>
                            </Item>
                            <Item >
                                <Label>Số điện thoại:</Label>
                                <Text>0822970011</Text>
                            </Item>
                            <Item >
                                <Label>Địa chỉ:</Label>
                                <Text>322 Phan Văn Trị, p5, Gò Vấp, tp HCM</Text>
                            </Item>
                            <Item last>
                                <Label>Ghi chú:</Label>
                                <Text></Text>
                            </Item>
                        </Form>
                        <View style={{
                            flex: 1, flexDirection: 'row', padding: 20, backgroundColor: ''
                        }}>
                            <Left>
                                <Text>Tổng</Text>
                                <Text>Vận chuyển</Text>
                                <Text>Giảm giá</Text>
                                <Text>Thành tiền</Text>
                            </Left>
                            <Right>
                                <Text>1960$</Text>
                                <Text>5$</Text>
                                <Text>5%</Text>
                                <Text>1866.75$</Text>
                            </Right>
                        </View>
                    </Card>
                </Content>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    baseText: {
        fontSize: 12
    },
    titleText: {
        fontSize: 16,
        color: 'white',
    },
    verticalCenter: {
        justifyContent: 'center',
        alignItems: 'center'
    }
});
