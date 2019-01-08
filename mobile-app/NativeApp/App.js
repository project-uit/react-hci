/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet } from 'react-native';
import { Container, Header, Left, Body, Right, Button, Icon, Title, Drawer } from 'native-base';
import HeaderComponent from './Header/header';
import SideBar from './Component/SideBar/sidebar';
// const instructions = Platform.select({
//   ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
//   android:
//     'Double tap R on your keyboard to reload,\n' +
//     'Shake or press menu button for dev menu',
// });

type Props = {};
export default class App extends Component<Props> {
  closeDrawer() {
    this.drawer._root.close()
  };
  openDrawer() {
    this.drawer._root.open()
  };
  render() {

    return (

      <Drawer
        ref={(ref) => { this.drawer = ref; }}
        content={<SideBar navigator={this.navigator} />}
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
});
