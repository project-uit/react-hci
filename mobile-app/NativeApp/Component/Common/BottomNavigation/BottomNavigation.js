import React, { Component } from 'react';
import { Image, StyleSheet } from 'react-native';
import {
    FooterTab, Button, Icon, Text, Badge
}
    from 'native-base';

class BottomNatigation extends Component {

    gotoHome = () => {
        this.props.navigation.navigate('Home')
    }

    gotoListShoe = () => {
        this.props.navigation.navigate('ListShoe')
    }

    gotoCart = () => {
        this.props.navigation.navigate('Cart')
    }

    gotoProfile = () => {
        this.props.navigation.navigate('Login')
    }

    gotoSupport = () => {
        this.props.navigation.navigate('Support')
    }

    render() {
        const { selectedScreen } = this.props;
        return (
            <FooterTab style={{ backgroundColor: '#0F0F0F' }}>
                <Button style={selectedScreen == 'Home' ? styles.buttonStyle : styles.buttonStyleBlack} vertical onPress={this.gotoHome}>
                    <Icon name="home" style={{ color: 'white' }} />
                </Button>
                <Button style={selectedScreen == 'ListShoe' ? styles.buttonStyle : styles.buttonStyleBlack} vertical onPress={this.gotoListShoe}>
                    <Icon name="ios-list" style={{ color: 'white' }} />
                </Button>
                <Button style={selectedScreen == 'Cart' ? styles.buttonStyle : styles.buttonStyleBlack} badge vertical onPress={this.gotoCart}>
                    <Badge><Text>2</Text></Badge>
                    <Icon name="cart" style={{ color: 'white' }} />
                </Button>
                <Button style={selectedScreen == 'Profile' ? styles.buttonStyle : styles.buttonStyleBlack} vertical onPress={this.gotoProfile}>
                    <Icon name="person" style={{ color: 'white' }} />
                </Button>
                <Button style={selectedScreen == 'Chat' ? styles.buttonStyle : styles.buttonStyleBlack} vertical onPress={this.gotoSupport}>
                    <Icon name="chatboxes" style={{ color: 'white' }} />
                </Button>
            </FooterTab>
        );
    }
}

export default BottomNatigation;
const styles = StyleSheet.create({

    buttonStyle: {
        backgroundColor: '#393939',
        borderColor: 'white',
        borderLeftWidth: 0.45,
    },
    buttonStyleBlack: {
        backgroundColor: '#0F0F0F',
        borderColor: 'white',
        borderLeftWidth: 0.45,
    },
    
});