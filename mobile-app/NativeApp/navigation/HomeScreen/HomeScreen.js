import React, { Component } from 'react';
import { Platform, StyleSheet, View, Image, TouchableOpacity } from 'react-native';
import { Container, Header, Left, Body, Right, Button, Icon, Title, Drawer, Grid, Col, Text, Footer, FooterTab, Input, Item, Row, Content } from 'native-base';
//import HeaderComponent from './Header/header';
import SideBar from './../../Component/SideBar/sidebar';
import Carousel from './../../Component/Carousel/Carousel';
import styled from 'styled-components/native'
import CardShoe from './../../Component/CardShoe/CardShoe';

const Shadow = styled.View`
shadow-opacity: 0.75;
shadow-radius: 5px;
shadow-color: red;
shadow-offset: 0px 0px;
`;
export default class HomeScreen extends Component {
  closeDrawer() {
    this.drawer._root.close()
  };
  openDrawer() {
    this.drawer._root.open()
  };

  render() {

    return (

      <Drawer
        openDrawerOffset={0.4}
        panCloseMask={0.4}
        ref={(ref) => { this.drawer = ref; }}
        content={<SideBar navigator={this.navigator} nav={this.props.navigation} />}
        onClose={() => this.closeDrawer()} >
        <Header style={{ backgroundColor: '#0F0F0F' }}>
          <Left>
            <Button transparent onPress={() => this.openDrawer()} style={{}}>
              <Icon name='ios-menu' size={30} />
            </Button>
          </Left>
          <Body>
            <Title>Shoe style</Title>
          </Body>
          <Right>
            {/* <Button transparent onPress={()=> this.openDrawer()}>
                <Icon name='ios-menu' size={30} />
              </Button> */}
          </Right>
        </Header>
        <Content>
          {
            Carousel
          }
          <Grid>
            <Row>
              <Col style={{ height: 70, alignItems: 'center' }}>
                <Image style={{ width: '50%', height: '100%' }} source={{ uri: "https://www.shoestyle.ie/wp-content/uploads/2016/03/logo_retina.png" }} />
              </Col>
            </Row>
          </Grid>
          <Text style={{ textAlign: 'center', marginTop: 5, marginBottom: 5 }}>Các sản phẩm bán chạy</Text>

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
                <CardShoe company="Nike" name="PW SOLAR HU NMD" gender="Nam" price="$340" img="https://www.flightclub.com/media/catalog/product/cache/1/image/1600x1140/9df78eab33525d08d6e5fb8d27136e95/8/0/805370_01.jpg" />
              </Col>
            </Row>
          </Grid>

          {/* <View style={[styles.parent]}>
          <View style={[styles.child]}>


          </View>
          <View style={[styles.child, { backgroundColor: '#339966' }]} />
          <View style={[styles.child, { backgroundColor: '#996633' }]} />
          <View style={[styles.child, { backgroundColor: '#669933' }]} />
        </View> */}
          <Footer>
            <FooterTab style={{ backgroundColor: '#0F0F0F' }}>
              <Button vertical>
                <Text style={{ color: 'white' }}>Dịch vụ</Text>
              </Button>
              <Button vertical>
                <Text style={{ color: 'white' }}>Cửa hàng</Text>
              </Button>
              <Button vertical>
                <Text style={{ color: 'white' }}>Chat</Text>
              </Button>
            </FooterTab>
          </Footer>
        </Content>
      </Drawer>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  parent: {
    width: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  child: {
    width: '48%',
    margin: '1%',
    aspectRatio: 1,
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  }
});
