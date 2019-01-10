import React, { Component } from 'react';
import { StyleSheet, ScrollView, View } from 'react-native';
import {
    Text, Container, Left, Right, Header, Body, Title, Card, CardItem,
    Form, Item, Input, Label, Button, Icon, Footer, FooterTab, Tab, Tabs, TabHeading,
    Picker, CheckBox, ListItem
} from 'native-base';
import BottomNavigation from '../../Common/BottomNavigation/BottomNavigation';

export default class Checkout extends Component {

    state = {
        paymentMethod: 'cod',
        selected2: 'normal'
    };

    onValueChange2(value) {
        this.setState({
            selected2: value
        });
    }

    changePaymentMedthod(value) {
        this.setState({
            paymentMethod: value
        })
    }

    gotoCheckoutSuccess = () => {
        this.props.navigation.navigate('CheckoutSuccess')
    }

    render() {
        const { paymentMethod } = this.state;
        return (
            <Container>
                <Header style={{ backgroundColor: '#0F0F0F' }}>
                    <Left>
                        <Button transparent onPress={() => this.props.navigation.goBack()}>
                            <Icon name='arrow-back' />
                        </Button>
                    </Left>
                    <Body>
                        <Title>Thanh toán</Title>
                    </Body>
                    <Right />
                </Header>
                <View style={{ flex: 1, padding: 10 }}>
                    {/* <Body style={[styles.verticalCenter]}><H1>Thông tin giao hàng</H1></Body> */}
                    <ScrollView>
                        <Card>
                            <CardItem header bordered style={{ backgroundColor: 'black' }} >
                                <Text style={styles.titleText}>Thông tin giao hàng</Text>
                            </CardItem>

                            <Form>
                                <Item stackedLabel>
                                    <Label>Email</Label>
                                    <Input />
                                </Item>
                                <Item stackedLabel>
                                    <Label>Tên khách hàng</Label>
                                    <Input />
                                </Item>
                                <Item stackedLabel>
                                    <Label>Số điện thoại</Label>
                                    <Input />
                                </Item>
                                <Item stackedLabel>
                                    <Label>Địa chỉ </Label>
                                    <Input />
                                </Item>
                                <Text></Text>
                                <Item fixedLabel last>
                                    <Label>Hình thức giao hàng</Label>
                                    <Picker
                                        mode="dropdown"
                                        iosIcon={<Icon name="arrow-down" />}
                                        style={{ width: undefined }}
                                        placeholder="Chọn"
                                        placeholderStyle={{ color: "#bfc6ea" }}
                                        placeholderIconColor="#007aff"
                                        selectedValue={this.state.selected2}
                                        onValueChange={this.onValueChange2.bind(this)}
                                    >
                                        <Picker.Item label="Chậm" value="slow" />
                                        <Picker.Item label="Tiêu chuẩn" value="normal" />
                                        <Picker.Item label="Nhanh" value="fast" />
                                    </Picker>
                                </Item>
                            </Form>
                        </Card>
                        <Card>
                            <CardItem header bordered style={{ backgroundColor: 'black' }}>
                                <Text style={styles.titleText}>Hình thức thanh toán</Text>
                            </CardItem>
                            <ListItem>
                                <CheckBox onPress={() => this.changePaymentMedthod('cod')} color="black" checked={paymentMethod == 'cod' ? true : false} />
                                <Body>
                                    <Text>Thanh toán khi nhận hàng (COD)</Text>
                                </Body>
                            </ListItem>
                            <ListItem>
                                <CheckBox onPress={() => this.changePaymentMedthod('creditcard')} color="black" checked={paymentMethod == 'creditcard' ? true : false} />
                                <Body>
                                    <Text>Thanh toán qua thẻ tín dụng</Text>
                                </Body>
                            </ListItem>
                            <ListItem>
                                <CheckBox onPress={() => this.changePaymentMedthod('bank')} color="black" checked={paymentMethod == 'bank' ? true : false} />
                                <Body>
                                    <Text>Thanh toán qua ngân hàng nội địa</Text>
                                </Body>
                            </ListItem>
                            <ListItem>
                                <CheckBox onPress={() => this.changePaymentMedthod('paypal')} color="black" checked={paymentMethod == 'paypal' ? true : false} />
                                <Body>
                                    <Text>Thanh toán qua cổng Paypal</Text>
                                </Body>
                            </ListItem>
                        </Card>
                        <Button block primary onPress={this.gotoCheckoutSuccess}>
                            <Text>Đặt hàng</Text>
                        </Button>
                    </ScrollView>
                </View>
                <Footer>
                    <BottomNavigation navigation={this.props.navigation} />
                </Footer>
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