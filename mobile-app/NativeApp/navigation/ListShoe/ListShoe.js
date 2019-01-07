import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Header, Tab, Tabs, ScrollableTab, Left, Body, Right, Button, Icon, Title, Drawer, Item, Input } from 'native-base';
import pic1 from '../../Images/012392_01.jpg'
import SideBar from '../../Component/SideBar/sidebar';
import SideBarFilter from '../../Component/SideBarFilter/SideBarFilter';
import TopSellListShoe from './TopSellListShoe';
import TrendingListShoe from './TrendingListShoe';
import PopularListShoe from './PopularListShoe';
import AllListShoe from './AllListShoe';


class ListShoe extends Component {
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
                content={<SideBarFilter navigator={this.navigator} nav={this.props.navigation} />}
                onClose={() => this.closeDrawer()} >
                <Header style={{ backgroundColor: '#0F0F0F' }}>
                    <Left>
                        <Button transparent onPress={() => this.props.navigation.goBack()}>
                            <Icon name='ios-arrow-back' size={30} />
                        </Button>

                    </Left>
                    <Body>
                        <Title>Danh sách giày</Title>
                        {/* <Item >
                            <Input placeholder='Tìm kiếm tên giày' style={{color: 'white'}}/>
                            <Icon active name='ios-close-circle-outline' />
                        </Item> */}
                    </Body>
                    <Right>
                        <Button transparent>
                            <Icon name='ios-search' size={30} />
                        </Button>
                        <Button transparent onPress={() => this.openDrawer()}>
                            <Icon name='ios-list' size={30} />
                        </Button>
                    </Right>
                </Header>
                <Tabs renderTabBar={() => <ScrollableTab />}>
                    <Tab heading="Tất cả" tabStyle={{ backgroundColor: '#0F0F0F' }} activeTabStyle={{ backgroundColor: '#393939' }} textStyle={{ color: 'white' }}>
                        <AllListShoe />
                    </Tab>
                    <Tab heading="Phổ biến" tabStyle={{ backgroundColor: '#0F0F0F' }} activeTabStyle={{ backgroundColor: '#393939' }} textStyle={{ color: 'white' }}>
                       <PopularListShoe />
                    </Tab>
                    <Tab heading="Bán chạy" tabStyle={{ backgroundColor: '#0F0F0F' }} activeTabStyle={{ backgroundColor: '#393939' }} textStyle={{ color: 'white' }}>
                        <TopSellListShoe />
                    </Tab>
                    <Tab heading="Trending" tabStyle={{ backgroundColor: '#0F0F0F' }} activeTabStyle={{ backgroundColor: '#393939' }} textStyle={{ color: 'white' }}>
                       <TrendingListShoe />
                    </Tab>
                </Tabs>
            </Drawer>
        );
    }
}

export default ListShoe;

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