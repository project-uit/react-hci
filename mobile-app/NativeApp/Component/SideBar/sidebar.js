import React, { Component } from 'react';
import { Container, Header, Left, Body, Right, Button, Title, Icon, Content, Grid, Col, Footer } from 'native-base';
import { Platform, StyleSheet, TouchableOpacity, Text, View } from 'react-native';

export default class SideBar extends Component {

    state = {
        menu1: false,
        menu2: false,
        menu3: false,
        menu4: false,
        menu5: false,
        menu6: false,
        menu7: false,
        menu8: false
    }
    showMenu(value) {
        if (value === 1) {
            this.setState({ menu1: !this.state.menu1 })
        } else if (value === 2) {
            this.setState({ menu2: !this.state.menu2 })
        } else if (value === 3) {
            this.setState({ menu3: !this.state.menu3 })
        } else if (value === 4) {
            this.setState({ menu4: !this.state.menu4 })
        } else if (value === 5) {
            this.setState({ menu5: !this.state.menu5 })
        } else if (value === 6) {
            this.setState({ menu6: !this.state.menu6 })
        } else if (value === 7) {
            this.setState({ menu7: !this.state.menu7 })
        } else if (value === 8) {
            this.setState({ menu8: !this.state.menu8 })
        }
    }

    toDetail = () => {
        this.props.nav.navigate('ListShoe')
    }

    componentDidMount() {

    }

    render() {
        return (
            <Content style={{
                backgroundColor: '#001529',
            }}>
                <View style={{ flex: 1 }}>
                    <TouchableOpacity style={{ marginBottom: -19 }}>
                        <Text ></Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.itemMenuContainer} >
                        <Text style={styles.itemMenuLv1Text}>AIR JORDAN</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.itemMenuContainer} onPress={() => { this.showMenu(1) }}>
                        <Text style={styles.itemMenuLv1Text}>NIKE</Text>
                        <Icon name='ios-arrow-down' size={30} style={styles.arrowDropDown} />
                    </TouchableOpacity>
                    {
                        this.state.menu1 ?
                            <View style={styles.container}>
                                <TouchableOpacity style={styles.itemMenulv2Container} >
                                    <Text style={styles.itemMenuLv2Text}>Jordan</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.itemMenulv2Container}>
                                    <Text style={styles.itemMenuLv2Text}>Tennis</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.itemMenulv2Container}>
                                    <Text style={styles.itemMenuLv2Text}>Traning</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.itemMenulv2Container}>
                                    <Text style={styles.itemMenuLv2Text}>Football</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.itemMenulv2Container}>
                                    <Text style={styles.itemMenuLv2Text}>Cricket</Text>
                                </TouchableOpacity>
                            </View>
                            : <View />
                    }
                    <TouchableOpacity style={styles.itemMenuContainer} onPress={() => { this.showMenu(2) }}>
                        <Text style={styles.itemMenuLv1Text}>ADIDAS</Text>
                        <Icon name='ios-arrow-down' size={30} style={styles.arrowDropDown} />
                    </TouchableOpacity>
                    {
                        this.state.menu2 ?
                            <View style={styles.container}>
                                <TouchableOpacity style={styles.itemMenulv2Container}>
                                    <Text style={styles.itemMenuLv2Text}>Football</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.itemMenulv2Container}>
                                    <Text style={styles.itemMenuLv2Text}>Running</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.itemMenulv2Container}>
                                    <Text style={styles.itemMenuLv2Text}>Basketball</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.itemMenulv2Container}>
                                    <Text style={styles.itemMenuLv2Text}>Originals</Text>
                                </TouchableOpacity>
                            </View>
                            : <View />
                    }
                    <TouchableOpacity style={styles.itemMenuContainer} onPress={() => { this.showMenu(3) }}>
                        <Text style={styles.itemMenuLv1Text}>CONVERSE</Text>
                        <Icon name='ios-arrow-down' size={30} style={styles.arrowDropDown} />
                    </TouchableOpacity>
                    {
                        this.state.menu3 ?
                            <View style={styles.container}>
                                <TouchableOpacity style={styles.itemMenulv2Container}>
                                    <Text style={styles.itemMenuLv2Text}>Classic</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.itemMenulv2Container}>
                                    <Text style={styles.itemMenuLv2Text}>Chuck 70s</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.itemMenulv2Container}>
                                    <Text style={styles.itemMenuLv2Text}>All star</Text>
                                </TouchableOpacity>
                            </View>
                            : <View />
                    }
                    <TouchableOpacity style={styles.itemMenuContainer} onPress={() => { this.showMenu(4) }}>
                        <Text style={styles.itemMenuLv1Text}>YEEZY</Text>
                        <Icon name='ios-arrow-down' size={30} style={styles.arrowDropDown} />
                    </TouchableOpacity>
                    {
                        this.state.menu4 ?
                            <View style={styles.container}>
                                <TouchableOpacity style={styles.itemMenulv2Container}>
                                    <Text style={styles.itemMenuLv2Text}>Yeezy boost 350</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.itemMenulv2Container}>
                                    <Text style={styles.itemMenuLv2Text}>Yeezy boost 700</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.itemMenulv2Container}>
                                    <Text style={styles.itemMenuLv2Text}>Yeezy boost 750</Text>
                                </TouchableOpacity>
                            </View>
                            : <View />
                    }
                    <TouchableOpacity style={styles.itemMenuContainer}>
                        <Text style={styles.itemMenuLv1Text}>BALENCIAGA</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.itemMenuContainer} onPress={() => { this.showMenu(5) }}>
                        <Text style={styles.itemMenuLv1Text}>VANS</Text>
                        <Icon name='ios-arrow-down' size={30} style={styles.arrowDropDown} />
                    </TouchableOpacity>
                    {
                        this.state.menu5 ?
                            <View style={styles.container}>
                                <TouchableOpacity style={styles.itemMenulv2Container}>
                                    <Text style={styles.itemMenuLv2Text}>Low top</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.itemMenulv2Container}>
                                    <Text style={styles.itemMenuLv2Text}>High top</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.itemMenulv2Container}>
                                    <Text style={styles.itemMenuLv2Text}>Slip-on</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.itemMenulv2Container}>
                                    <Text style={styles.itemMenuLv2Text}>Original Classic</Text>
                                </TouchableOpacity>
                            </View>
                            : <View />
                    }
                    <TouchableOpacity style={styles.itemMenuContainer} onPress={() => { this.showMenu(6) }}>
                        <Text style={styles.itemMenuLv1Text}>REEBOK</Text>
                        <Icon name='ios-arrow-down' size={30} style={styles.arrowDropDown} />
                    </TouchableOpacity>
                    {
                        this.state.menu6 ?
                            <View style={styles.container}>
                                <TouchableOpacity style={styles.itemMenulv2Container}>
                                    <Text style={styles.itemMenuLv2Text}>Running</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.itemMenulv2Container}>
                                    <Text style={styles.itemMenuLv2Text}>Classic</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.itemMenulv2Container}>
                                    <Text style={styles.itemMenuLv2Text}>LifeStyle</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.itemMenulv2Container}>
                                    <Text style={styles.itemMenuLv2Text}>Basketball</Text>
                                </TouchableOpacity>
                            </View>
                            : <View />
                    }
                    <TouchableOpacity style={styles.itemMenuContainer} onPress={() => { this.showMenu(7) }}>
                        <Text style={styles.itemMenuLv1Text}>RICK OWEN</Text>
                        <Icon name='ios-arrow-down' size={30} style={styles.arrowDropDown} />
                    </TouchableOpacity>
                    {
                        this.state.menu7 ?
                            <View style={styles.container}>
                                <TouchableOpacity style={styles.itemMenulv2Container}>
                                    <Text style={styles.itemMenuLv2Text}>Boots</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.itemMenulv2Container}>
                                    <Text style={styles.itemMenuLv2Text}>Sandal</Text>
                                </TouchableOpacity>
                            </View>
                            : <View />
                    }

                    <TouchableOpacity style={styles.otherItem}>
                        <Text style={styles.itemMenuLv2Text}>Giảm giá</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.otherItem} onPress={this.toDetail}>
                        <Text style={styles.itemMenuLv2Text}>Tất cả giày</Text>
                    </TouchableOpacity>
                    <View style={{ width: '100%', height: 150, backgroundColor: '#001529', borderBottomWidth: 0.5, borderColor: '#676E74', }} />
                    <TouchableOpacity style={styles.aboutContainer} onPress={() => { this.showMenu(8) }}>
                        <Text style={styles.aboutText}>Thông tin cừa hàng và dịch vụ</Text>
                        <Icon name='ios-arrow-down' size={30} style={styles.arrowDropDown} />
                    </TouchableOpacity>
                    {
                        this.state.menu8 ?
                            <View style={styles.container}>
                                <TouchableOpacity style={styles.itemMenulv2Container}>
                                    <Text style={styles.itemMenuLv2Text}>Thông tin cửa hàng</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.itemMenulv2Container}>
                                    <Text style={styles.itemMenuLv2Text}>FAQ</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.itemMenulv2Container}>
                                    <Text style={styles.itemMenuLv2Text}>CSKH</Text>
                                </TouchableOpacity>
                            </View>
                            : <View />
                    }

                </View>
            </Content>
        );

    }
}


const styles = StyleSheet.create({
    aboutContainer: {
        marginTop: 10,
        borderColor: '#676E74',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomWidth: 0.5,

    },
    aboutText: {
        fontFamily: 'Righteous',
        flex: 1,
        justifyContent: 'flex-start',
        marginLeft: 3,
        marginBottom: 3,
        fontSize: 14,
        fontWeight: '800',
        color: '#676E74',
        fontStyle: 'italic'
    },
    otherItem: {
        marginTop: 10,

    },
    container: {
        flex: 1,

        backgroundColor: '#000c17',
    },
    itemMenuContainer: {
        marginTop: 10,

        borderColor: '#676E74',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomWidth: 0.5,
    },

    itemMenuLv1Text: {
        fontSize: 18,
        fontWeight: '400',
        fontFamily: 'Righteous, cursive',
        color: 'white',
        flex: 1,
        justifyContent: 'flex-start',
        marginLeft: 3,
        marginBottom: 3,
    },
    arrowDropDown: {
        color: '#676E74',
        resizeMode: 'contain',
        marginRight: 10,
        fontSize: 16
    },
    itemMenuLv2Text: {
        fontSize: 16,
        fontWeight: '800',
        color: '#676E74',
        marginVertical: 10,
        marginHorizontal: 3,
    },
    itemMenulv2Container: {
        marginHorizontal: 30,

    },
});