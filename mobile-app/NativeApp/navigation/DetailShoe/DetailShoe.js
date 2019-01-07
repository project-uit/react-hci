import React, { Component } from 'react';
import { Platform, StyleSheet, View, Text, FlatList, ScrollView, Image } from 'react-native';
import { Container, Header, Left, Body, Right, Button, Icon, Title, Drawer } from 'native-base';
import pic1 from '../../Images/012392_01.jpg'


class DetailShoe extends Component {
    render() {

        return (
            <View style={{flex:1}}>
                <Header style={{ backgroundColor: '#0F0F0F' }}>
                    <Left>
                        <Button transparent onPress={() => this.props.navigation.goBack()} style={{}}>
                            <Icon name='ios-arrow-back' size={30} />
                        </Button>
                    </Left>
                    <Body>
                        <Title>Detail Shoe</Title>
                    </Body>
                    <Right>
                        {/* <Button transparent onPress={()=> this.openDrawer()}>
                <Icon name='ios-menu' size={30} />
              </Button> */}
                    </Right>
                </Header>
                <View style={{flex:1, }}>
                    <ScrollView style={{flexDirection: 'row', height: 210}}>
                        <View style={{padding:5}}>
                            <View style={{height: 200, width: 180, backgroundColor:'white'}}>
                                <Image source={pic1} style={{height:114, width:160, margin: 10 }}/>
                                <Text style={{fontWeight:'500', fontSize: 16, marginLeft: 10}}>Adidas</Text>
                                <Text style={{fontWeight:'300', fontSize: 16, marginLeft: 10, marginTop: 2}}>YEEZY BOOST 350 V2</Text>
                            </View>
                            <View style={{height: 200, width: 180, backgroundColor:'white'}}>
                                <Image source={pic1} style={{height:114, width:160, margin: 10 }}/>
                                <Text style={{fontWeight:'500', fontSize: 16, marginLeft: 10}}>Adidas</Text>
                                <Text style={{fontWeight:'300', fontSize: 16, marginLeft: 10, marginTop: 2}}>YEEZY BOOST 350 V2</Text>
                                <Text style={{fontWeight:'300', fontSize: 16, marginLeft: 10, marginTop: 2}}>320$</Text>
                            </View>
                        </View>
                        <View style={{padding:5}}>
                            <View style={{height: 200, width: 180, backgroundColor:'white'}}>
                                <Image source={pic1} style={{height:114, width:160, margin: 10 }}/>
                                <Text style={{fontWeight:'500', fontSize: 16, marginLeft: 10}}>Adidas</Text>
                                <Text style={{fontWeight:'300', fontSize: 16, marginLeft: 10, marginTop: 2}}>YEEZY BOOST 350 V2</Text>
                            </View>
                        </View>
                    </ScrollView>
                </View>
            </View>

        );
    }
}

export default DetailShoe;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center',
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