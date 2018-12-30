import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, DrawerLayoutAndroid } from 'react-native';
type Props = {};
export default class DrawerComponent extends Component<Props> {
    render() {
      var navigationView = (
        <View style={{ flex: 1, backgroundColor: '#fff' }}>
          <Text style={{ margin: 10, fontSize: 15, textAlign: 'left' }}>I'm in the Drawer!</Text>
          <Text style={{ margin: 10, fontSize: 15, textAlign: 'left' }}>I'm in the Drawer!</Text>
        </View>
      );
      return (
        <DrawerLayoutAndroid
          drawerWidth={300}
          drawerPosition={DrawerLayoutAndroid.positions.Left}
          renderNavigationView={() => navigationView}>
          <View style={{ flex: 1, alignItems: 'center' }}>
            <Text style={{ margin: 10, fontSize: 15, textAlign: 'right' }}>Hello1</Text>
            <Text style={{ margin: 10, fontSize: 15, textAlign: 'right' }}>World!</Text>
          </View>
        </DrawerLayoutAndroid>
  
      );
    }
  }