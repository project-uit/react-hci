import React, { Component } from 'react';
import { Image } from 'react-native';
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

    render() {
        const { selectedScreen } = this.props;
        return (
            <FooterTab>
                <Button active={selectedScreen == 'Home' ? true : false} vertical onPress={this.gotoHome}>
                    <Icon active={selectedScreen == 'Home' ? true : false} name="home" />
                </Button>
                <Button active={selectedScreen == 'ListShoe' ? true : false} vertical onPress={this.gotoListShoe}>
                    <Image source={require('./../../../../resources/icon/sneaker.png')}
                        style={{ width: 25, height: 25 }} />
                </Button>
                <Button active={selectedScreen == 'Cart' ? true : false} badge vertical onPress={this.gotoCart}>
                    <Badge ><Text>2</Text></Badge>
                    <Icon active={false} name="cart" />
                </Button>
                <Button active={selectedScreen == 'Profile' ? true : false} vertical onPress={this.gotoProfile}>
                    <Icon active={selectedScreen == 'Profile' ? true : false} name="person" />
                </Button>
            </FooterTab>
        );
    }
}

export default BottomNatigation;