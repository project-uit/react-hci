import React, { Component } from 'react';
import { Icon, Content, CheckBox, ListItem, Body, Input, Item, Badge, Button } from 'native-base';
import { Platform, StyleSheet, TouchableOpacity, Text, View } from 'react-native';

export default class SideBarFilter extends Component {

    state = {
        menu1: false,
        menu2: false,
        menu3: false,
        menu4: false,
        menu5: false,

        chkBox1: false,
        chkBox2: false,
        chkBox3: false,
        chkBox4: false,
        chkBox5: false,
        chkBox6: false,
        chkBox7: false,
        chkBox8: false,
        chkBox9: false,

        chkBoxNam: false,
        chkBoxNu: false,
        chkBoxUnisex: false,

        chkBoxColor: [false, false, false, false, false, false, false, false, false, false],

        chkBoxSize: [false, false, false, false, false, false, false, false, false, false]
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
        }
    }

    loaiGiaychkBoxChange(value) {
        if (value === 1) {
            this.setState({ chkBox1: !this.state.chkBox1 })
        } else if (value === 2) {
            this.setState({ chkBox2: !this.state.chkBox2 })
        } else if (value === 3) {
            this.setState({ chkBox3: !this.state.chkBox3 })
        } else if (value === 4) {
            this.setState({ chkBox4: !this.state.chkBox4 })
        } else if (value === 5) {
            this.setState({ chkBox5: !this.state.chkBox5 })
        } else if (value === 6) {
            this.setState({ chkBox6: !this.state.chkBox6 })
        } else if (value === 7) {
            this.setState({ chkBox7: !this.state.chkBox7 })
        } else if (value === 8) {
            this.setState({ chkBox8: !this.state.chkBox8 })
        } else if (value === 9) {
            this.setState({ chkBox9: !this.state.chkBox9 })
        }
    }

    gioiTinhchkBoxChange(value) {
        if (value === 1) {
            this.setState({ chkBoxNam: !this.state.chkBoxNam })
        } else if (value === 2) {
            this.setState({ chkBoxNu: !this.state.chkBoxNu })
        } else if (value === 3) {
            this.setState({ chkBoxUnisex: !this.state.chkBoxUnisex })
        }
    }

    toDetail = () => {
        this.props.nav.navigate('ListShoe')
    }

    onChangeColor(index) {
        let items = this.state.chkBoxColor;
        items[index] = !items[index];
        this.setState({
            chkBoxColor: items
        })
    }
    onChangeSize(index) {
        let items = this.state.chkBoxSize;
        items[index] = !items[index];
        this.setState({
            chkBoxSize: items
        })
    }
    componentWillMount() {

    }

    render() {
        return (
            <Content style={{
                backgroundColor: '#FFFFFF',
            }}>
                <View style={{ flex: 1 }}>

                    <TouchableOpacity style={styles.itemMenuContainer} >
                        <Icon name='ios-refresh' size={30} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.itemMenuContainer} onPress={() => { this.showMenu(1) }}>
                        <Icon name='ios-arrow-down' size={30} style={styles.arrowDropDown} />
                        <Text style={styles.itemMenuLv1Text}>Giới tính</Text>
                    </TouchableOpacity>
                    {
                        this.state.menu1 ?
                            <View style={styles.container}>
                                <ListItem>
                                    <CheckBox checked={this.state.chkBoxNam} color="black" onPress={() => this.gioiTinhchkBoxChange(1)} />
                                    <Body>
                                        <Text style={{ marginLeft: 5 }}>Nam</Text>
                                    </Body>
                                </ListItem>
                                <ListItem>
                                    <CheckBox checked={this.state.chkBoxNu} color="black" onPress={() => this.gioiTinhchkBoxChange(2)} />
                                    <Body>
                                        <Text style={{ marginLeft: 5 }}>Nữ</Text>
                                    </Body>
                                </ListItem>
                                <ListItem>
                                    <CheckBox checked={this.state.chkBoxUnisex} color="black" onPress={() => this.gioiTinhchkBoxChange(3)} />
                                    <Body>
                                        <Text style={{ marginLeft: 5 }}>Unisex</Text>
                                    </Body>
                                </ListItem>
                            </View>
                            : <View />
                    }
                    <TouchableOpacity style={styles.itemMenuContainer} onPress={() => { this.showMenu(2) }}>
                        <Icon name='ios-arrow-down' size={30} style={styles.arrowDropDown} />
                        <Text style={styles.itemMenuLv1Text}>Loại giày</Text>

                    </TouchableOpacity>
                    {
                        this.state.menu2 ?
                            <View style={styles.container}>
                                <ListItem>
                                    <CheckBox checked={this.state.chkBox1} color="black" onPress={() => this.loaiGiaychkBoxChange(1)} />
                                    <Body>
                                        <Text style={{ marginLeft: 5 }}>Running</Text>
                                    </Body>
                                    <CheckBox checked={this.state.chkBox2} color="black" onPress={() => this.loaiGiaychkBoxChange(2)} />
                                    <Body>
                                        <Text style={{ marginLeft: 5 }}>Classic</Text>
                                    </Body>
                                </ListItem>
                                <ListItem>
                                    <CheckBox checked={this.state.chkBox3} color="black" onPress={() => this.loaiGiaychkBoxChange(3)} />
                                    <Body>
                                        <Text style={{ marginLeft: 5 }}>Tennis</Text>
                                    </Body>
                                    <CheckBox checked={this.state.chkBox4} color="black" onPress={() => this.loaiGiaychkBoxChange(4)} />
                                    <Body>
                                        <Text style={{ marginLeft: 5 }}>Basketball</Text>
                                    </Body>
                                </ListItem>
                                <ListItem>
                                    <CheckBox checked={this.state.chkBox5} color="black" onPress={() => this.loaiGiaychkBoxChange(5)} />
                                    <Body>
                                        <Text style={{ marginLeft: 5 }}>Football</Text>
                                    </Body>
                                    <CheckBox checked={this.state.chkBox6} color="black" onPress={() => this.loaiGiaychkBoxChange(6)} />
                                    <Body>
                                        <Text style={{ marginLeft: 5 }}>LifeStyle</Text>
                                    </Body>
                                </ListItem>
                                <ListItem>
                                    <CheckBox checked={this.state.chkBox7} color="black" onPress={() => this.loaiGiaychkBoxChange(7)} />
                                    <Body>
                                        <Text style={{ marginLeft: 5 }}>Low top</Text>
                                    </Body>
                                    <CheckBox checked={this.state.chkBox8} color="black" onPress={() => this.loaiGiaychkBoxChange(8)} />
                                    <Body>
                                        <Text style={{ marginLeft: 5 }}>High top</Text>
                                    </Body>
                                </ListItem>
                                <ListItem>
                                    <CheckBox checked={this.state.chkBox9} color="black" onPress={() => this.loaiGiaychkBoxChange(9)} />
                                    <Body>
                                        <Text style={{ marginLeft: 5 }}>Jordan</Text>
                                    </Body>
                                </ListItem>
                            </View>
                            : <View />
                    }
                    <TouchableOpacity style={styles.itemMenuContainer} onPress={() => { this.showMenu(3) }}>
                        <Icon name='ios-arrow-down' size={30} style={styles.arrowDropDown} />
                        <Text style={styles.itemMenuLv1Text}>Màu sắc</Text>
                    </TouchableOpacity>
                    {
                        this.state.menu3 ?
                            <View style={styles.container}>
                                <ListItem>
                                    <TouchableOpacity style={{ margin: 2 }} onPress={() => this.onChangeColor(0)}>
                                        <Badge style={{ backgroundColor: '#555', height: 32, width: 32, }}>
                                            {
                                                this.state.chkBoxColor[0] && (
                                                    <Icon name="ios-checkmark" style={{ fontSize: 30, color: "#4494D5", lineHeight: 30, textAlign: 'center' }} />
                                                )
                                            }
                                        </Badge>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={{ margin: 2 }} onPress={() => this.onChangeColor(1)}>
                                        <Badge style={{ backgroundColor: 'white', height: 32, width: 32, borderColor: 'black', borderWidth: 1 }}>
                                            {
                                                this.state.chkBoxColor[1] && (
                                                    <Icon name="ios-checkmark" style={{ fontSize: 30, color: "#4494D5", lineHeight: 30, textAlign: 'center' }} />
                                                )
                                            }
                                        </Badge>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={{ margin: 2 }} onPress={() => this.onChangeColor(2)}>
                                        <Badge style={{ backgroundColor: '#A40000', height: 32, width: 32, borderColor: 'black', borderWidth: 1 }}>
                                            {
                                                this.state.chkBoxColor[2] && (
                                                    <Icon name="ios-checkmark" style={{ fontSize: 30, color: "#4494D5", lineHeight: 30, textAlign: 'center' }} />
                                                )
                                            }
                                        </Badge>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={{ margin: 2 }} onPress={() => this.onChangeColor(3)}>
                                        <Badge style={{ backgroundColor: '#00D7DC', height: 32, width: 32, borderColor: 'black', borderWidth: 1 }}>
                                            {
                                                this.state.chkBoxColor[3] && (
                                                    <Icon name="ios-checkmark" style={{ fontSize: 30, color: "#4494D5", lineHeight: 30, textAlign: 'center' }} />
                                                )
                                            }
                                        </Badge>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={{ margin: 2 }} onPress={() => this.onChangeColor(4)}>
                                        <Badge style={{ backgroundColor: '#99B402', height: 32, width: 32, borderColor: 'black', borderWidth: 1 }}>
                                            {
                                                this.state.chkBoxColor[4] && (
                                                    <Icon name="ios-checkmark" style={{ fontSize: 30, color: "#4494D5", lineHeight: 30, textAlign: 'center' }} />
                                                )
                                            }
                                        </Badge>
                                    </TouchableOpacity>
                                </ListItem>
                                <ListItem>
                                    <TouchableOpacity style={{ margin: 2 }} onPress={() => this.onChangeColor(5)}>
                                        <Badge style={{ backgroundColor: '#555', height: 32, width: 32, }}>
                                            {
                                                this.state.chkBoxColor[5] && (
                                                    <Icon name="ios-checkmark" style={{ fontSize: 30, color: "#4494D5", lineHeight: 30, textAlign: 'center' }} />
                                                )
                                            }
                                        </Badge>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={{ margin: 2 }} onPress={() => this.onChangeColor(6)}>
                                        <Badge style={{ backgroundColor: '#000000', height: 32, width: 32, borderColor: 'black', borderWidth: 1 }}>
                                            {
                                                this.state.chkBoxColor[6] && (
                                                    <Icon name="ios-checkmark" style={{ fontSize: 30, color: "#4494D5", lineHeight: 30, textAlign: 'center' }} />
                                                )
                                            }
                                        </Badge>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={{ margin: 2 }} onPress={() => this.onChangeColor(7)}>
                                        <Badge style={{ backgroundColor: '#006ABF', height: 32, width: 32, borderColor: 'black', borderWidth: 1 }}>
                                            {
                                                this.state.chkBoxColor[7] && (
                                                    <Icon name="ios-checkmark" style={{ fontSize: 30, color: "#4494D5", lineHeight: 30, textAlign: 'center' }} />
                                                )
                                            }
                                        </Badge>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={{ margin: 2 }} onPress={() => this.onChangeColor(8)}>
                                        <Badge style={{ backgroundColor: 'blue', height: 32, width: 32, borderColor: 'black', borderWidth: 1 }}>
                                            {
                                                this.state.chkBoxColor[8] && (
                                                    <Icon name="ios-checkmark" style={{ fontSize: 30, color: "#4494D5", lineHeight: 30, textAlign: 'center' }} />
                                                )
                                            }
                                        </Badge>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={{ margin: 2 }} onPress={() => this.onChangeColor(9)}>
                                        <Badge style={{ backgroundColor: '#048B44', height: 32, width: 32, borderColor: 'black', borderWidth: 1 }}>
                                            {
                                                this.state.chkBoxColor[9] && (
                                                    <Icon name="ios-checkmark" style={{ fontSize: 30, color: "#4494D5", lineHeight: 30, textAlign: 'center' }} />
                                                )
                                            }
                                        </Badge>
                                    </TouchableOpacity>
                                </ListItem>
                            </View>
                            : <View />
                    }
                    <TouchableOpacity style={styles.itemMenuContainer} onPress={() => { this.showMenu(4) }}>
                        <Icon name='ios-arrow-down' size={30} style={styles.arrowDropDown} />
                        <Text style={styles.itemMenuLv1Text}>Size</Text>
                    </TouchableOpacity>
                    {
                        this.state.menu4 ?
                            <View style={styles.container}>
                                <ListItem>
                                    <TouchableOpacity style={{ margin: 2 }} onPress= {() => this.onChangeSize(0)}>
                                        <Badge style={this.state.chkBoxSize[0] ? styles.badgeSize2 : styles.badgeSize1}>
                                            <Text style={this.state.chkBoxSize[0] ? styles.textSize2 : styles.textSize1}>35</Text>
                                        </Badge>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={{ margin: 2 }} onPress= {() => this.onChangeSize(1)}>
                                        <Badge style={this.state.chkBoxSize[1] ? styles.badgeSize2 : styles.badgeSize1}>
                                            <Text style={this.state.chkBoxSize[1] ? styles.textSize2 : styles.textSize1}>36</Text>
                                        </Badge>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={{ margin: 2 }} onPress= {() => this.onChangeSize(2)}>
                                        <Badge style={this.state.chkBoxSize[2] ? styles.badgeSize2 : styles.badgeSize1}>
                                            <Text style={this.state.chkBoxSize[2] ? styles.textSize2 : styles.textSize1}>37</Text>
                                        </Badge>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={{ margin: 2 }} onPress= {() => this.onChangeSize(3)}>
                                        <Badge style={this.state.chkBoxSize[3] ? styles.badgeSize2 : styles.badgeSize1}>
                                            <Text style={this.state.chkBoxSize[3] ? styles.textSize2 : styles.textSize1}>38</Text>
                                        </Badge>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={{ margin: 2 }} onPress= {() => this.onChangeSize(4)}>
                                        <Badge style={this.state.chkBoxSize[4] ? styles.badgeSize2 : styles.badgeSize1}>
                                            <Text style={this.state.chkBoxSize[4] ? styles.textSize2 : styles.textSize1}>39</Text>
                                        </Badge>
                                    </TouchableOpacity>
                                </ListItem>
                                <ListItem>
                                    <TouchableOpacity style={{ margin: 2 }} onPress= {() => this.onChangeSize(5)}>
                                        <Badge style={this.state.chkBoxSize[5] ? styles.badgeSize2 : styles.badgeSize1}>
                                            <Text style={this.state.chkBoxSize[5] ? styles.textSize2 : styles.textSize1}>40</Text>
                                        </Badge>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={{ margin: 2 }} onPress= {() => this.onChangeSize(6)}>
                                        <Badge style={this.state.chkBoxSize[6] ? styles.badgeSize2 : styles.badgeSize1}>
                                            <Text style={this.state.chkBoxSize[6] ? styles.textSize2 : styles.textSize1}>41</Text>
                                        </Badge>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={{ margin: 2 }} onPress= {() => this.onChangeSize(7)}>
                                        <Badge style={this.state.chkBoxSize[7] ? styles.badgeSize2 : styles.badgeSize1}>
                                            <Text style={this.state.chkBoxSize[7] ? styles.textSize2 : styles.textSize1}>42</Text>
                                        </Badge>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={{ margin: 2 }} onPress= {() => this.onChangeSize(8)}>
                                        <Badge style={this.state.chkBoxSize[8] ? styles.badgeSize2 : styles.badgeSize1}>
                                            <Text style={this.state.chkBoxSize[8] ? styles.textSize2 : styles.textSize1}>43</Text>
                                        </Badge>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={{ margin: 2 }} onPress= {() => this.onChangeSize(9)}>
                                        <Badge style={this.state.chkBoxSize[9] ? styles.badgeSize2 : styles.badgeSize1}>
                                            <Text style={this.state.chkBoxSize[9] ? styles.textSize2 : styles.textSize1}>44</Text>
                                        </Badge>
                                    </TouchableOpacity>
                                </ListItem>
                            </View>
                            : <View />
                    }
                    <TouchableOpacity style={styles.itemMenuContainer} onPress={() => { this.showMenu(5) }}>
                        <Icon name='ios-arrow-down' size={30} style={styles.arrowDropDown} />
                        <Text style={styles.itemMenuLv1Text}>Giá bán</Text>
                    </TouchableOpacity>
                    {
                        this.state.menu5 ?
                            <View style={styles.container}>
                                <View style={{ margin: 3 }}>
                                    <Item regular>
                                        <Input placeholder='Từ' />
                                    </Item>
                                    <Item regular>
                                        <Input placeholder='Đến' />
                                    </Item>
                                </View>
                            </View>
                            : <View />
                    }

                </View>
            </Content>
        );

    }
}


const styles = StyleSheet.create({

    textSize1: {
        color: 'black', lineHeight: 30, textAlign: 'center', fontSize: 15
    },
    textSize2: {
        color: '#096DD9', lineHeight: 30, textAlign: 'center', fontSize: 15
    },
    badgeSize1: {
        backgroundColor: 'white', borderColor: '#d9d9d9', borderWidth: 1, height: 32, width: 32,
    },
    badgeSize2: {
        backgroundColor: 'white', borderColor: '#096DD9', borderWidth: 1, height: 32, width: 32,
    },
    otherItem: {
        marginTop: 10,

    },
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    itemMenuContainer: {
        paddingTop: 10,
        backgroundColor: '#FAFAFA',
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
        fontFamily: 'Righteous',
        color: 'black',
        flex: 1,
        justifyContent: 'flex-start',
        marginLeft: 15,
        marginBottom: 3
    },
    arrowDropDown: {
        color: '#676E74',
        resizeMode: 'contain',
        marginLeft: 10,
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