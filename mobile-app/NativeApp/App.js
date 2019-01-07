/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
// import { Platform, StyleSheet } from 'react-native';
// import { Container, Header, Left, Body, Right, Button, Icon, Title, Drawer } from 'native-base';
// //import HeaderComponent from './Header/header';
// import SideBar from './Component/SideBar/sidebar';
import RouteConfig from './Component/RouteConfig/RouteConfig';

export default class App extends Component{
    render(){
      return <RouteConfig/>
    }
}