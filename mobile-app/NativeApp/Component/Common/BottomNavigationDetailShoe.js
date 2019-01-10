import React, { Component } from 'react';
import { Image, StyleSheet, TouchableOpacity } from 'react-native';
import {
    FooterTab, Button, Icon, Text, Badge
}
    from 'native-base';
class BottomNavigationDetailShoe extends Component {

    gotoReviewShoe = () => {
        this.props.navigation.navigate('ReviewShoe')
    }
    gotoCart = () => {
        this.props.navigation.navigate('Cart')
    }
    gotoSupport = () => {
        this.props.navigation.navigate('Support')
    }
    render() {
        return (
            <FooterTab style={{ backgroundColor: '#0F0F0F' }}>
                <TouchableOpacity style={{ width: 150 }} >
                    <Button vertical style={{ backgroundColor: '#009688', width: '100%' }}>
                        <Icon type="FontAwesome" name="cart-plus" style={{ color: 'white' }} />
                        <Text style={{ color: 'white', fontSize: 12 }}>Thêm giỏ hàng</Text>
                    </Button>
                </TouchableOpacity>
                <TouchableOpacity style={{ width: 80 }} >
                    <Button vertical onPress={this.gotoReviewShoe}>
                        <Text style={{ color: 'white', fontSize: 12, textAlign: 'center' }}>Bình luận</Text>
                    </Button>
                </TouchableOpacity>
                <Button badge vertical onPress={this.gotoCart} style={{
                    borderColor: 'white',
                    borderLeftWidth: 0.45,
                }}>
                    <Badge><Text>2</Text></Badge>
                    <Icon name="cart" style={{ color: 'white' }} />
                </Button>
                <Button vertical onPress={this.gotoSupport} style={{
                    borderColor: 'white',
                    borderLeftWidth: 0.45,
                }}>
                    <Icon name="chatboxes" style={{ color: 'white' }} />
                </Button>
            </FooterTab>
        );
    }
}

export default BottomNavigationDetailShoe;