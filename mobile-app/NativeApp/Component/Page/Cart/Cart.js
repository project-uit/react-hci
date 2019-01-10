/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import { StyleSheet, View } from 'react-native';
import {
  Container, Header, Title, Content, Footer, Button, Left, Right, Body, Icon, Text, List,
  ListItem, Thumbnail, Card, CardItem, Input, Item
}
  from 'native-base';
import NumericInput from 'react-native-numeric-input'
import BottomNavigation from '../../Common/BottomNavigation/BottomNavigation';

export default class Cart extends Component {

  gotoCheckout = () => {
    this.props.navigation.navigate('Checkout')
  }

  render() {
    return (
      <Container>
        <Header style={{ backgroundColor: '#0F0F0F' }}>
          <Left>
            <Button transparent onPress={() => this.props.navigation.goBack()}>
              <Icon name='arrow-back' />
            </Button>
          </Left>
          <Body>
            <Title>Giỏ hàng</Title>
          </Body>
          <Right />
        </Header>
        <Content>
          <Card>
            <CardItem header bordered style={{ backgroundColor: 'black' }}>
              <Text style={styles.titleText}>Tổng quan</Text>
            </CardItem>
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
                <Text>$1960</Text>
                <Text>$5</Text>
                <Text>5%</Text>
                <Text>$1866.75</Text>
              </Right>
            </View>
            <CardItem footer>
              <Item>
                <Icon active name='pricetags' />
                <Input placeholder='Nhập mã giảm giá' />
              </Item>
            </CardItem>
          </Card>
          <Card>
            <CardItem header bordered style={{ backgroundColor: 'black' }}>
              <Text style={styles.titleText}>Giỏ hàng</Text>
            </CardItem>
            <View style={{ flex: 1 }}>
              <List>
                <ListItem avatar>
                  <Left>
                    <Thumbnail square source={{ uri: 'https://www.flightclub.com/media/catalog/product/cache/1/thumbnail/240x170/9df78eab33525d08d6e5fb8d27136e95/2/0/201536_1.jpg' }} />
                  </Left>
                  <Body>
                    <Text>Yeezy Boost 350 V2 </Text>
                    <Text note numberOfLines={1}>Màu: black</Text>
                    <Text note numberOfLines={1}>Size: 37</Text>
                    <Text note numberOfLines={1}>Giá: $220</Text>
                    <Text note numberOfLines={1}>Số lượng:</Text>
                    <NumericInput
                      initValue={1}
                      minValue={1}
                      totalWidth={100}
                      totalHeight={20}
                      iconSize={5}
                      valueType='integer'
                      rounded
                      iconStyle={{ color: 'black' }} />
                  </Body>
                  <Right>
                    <Text><Icon name='trash' style={{ fontSize: 20, color: 'red' }} /></Text>
                    <Right style={{
                      justifyContent: 'center', alignItems: 'center'
                    }}>
                      <Text>$980</Text>
                    </Right>
                  </Right>
                </ListItem>
                <ListItem avatar>
                  <Left>
                    <Thumbnail square source={{ uri: 'https://www.flightclub.com/media/catalog/product/cache/1/thumbnail/240x170/9df78eab33525d08d6e5fb8d27136e95/2/0/201536_1.jpg' }} />
                  </Left>
                  <Body>
                    <Text>Yeezy Boost 350 V2 </Text>
                    <Text note numberOfLines={1}>Màu: black</Text>
                    <Text note numberOfLines={1}>Size: 39</Text>
                    <Text note numberOfLines={1}>Giá: $220</Text>
                    <Text note numberOfLines={1}>Số lượng:</Text>
                    <NumericInput
                      initValue={1}
                      minValue={1}
                      totalWidth={100}
                      totalHeight={20}
                      iconSize={5}
                      valueType='integer'
                      rounded
                      iconStyle={{ color: 'black' }} />
                  </Body>
                  <Right>
                    <Text><Icon name='trash' style={{ fontSize: 20, color: 'red' }} /></Text>
                    <Right style={{
                      justifyContent: 'center', alignItems: 'center'
                    }}>
                      <Text>$980</Text>
                    </Right>
                  </Right>
                </ListItem>
              </List>
              <View>
                <Button block primary onPress={this.gotoCheckout}>
                  <Text style={styles.buttonText}>Thanh toán</Text>
                </Button>
              </View>
            </View>
          </Card>
        </Content>
        <Footer>
          <BottomNavigation selectedScreen='Cart' navigation={this.props.navigation} />
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
