import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Header, Tab, Tabs, ScrollableTab, Left, Body, Right, Button, Icon, Title, Drawer, Item, Input, Footer } from 'native-base';
import SideBarFilter from '../../Component/SideBarFilter/SideBarFilter';
import TopSellListShoe from './TopSellListShoe';
import TrendingListShoe from './TrendingListShoe';
import PopularListShoe from './PopularListShoe';
import AllListShoe from './AllListShoe';
import BottomNavigation from '../../Component/Common/BottomNavigation/BottomNavigation';


class ListShoe extends Component {
    closeDrawer() {
        this.drawer._root.close()
    };
    openDrawer() {
        this.drawer._root.open()
    };

    toSearchListShoe = () => {
        this.props.navigation.navigate('SearchListShoe')
    }
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
                    </Body>
                    <Right>
                        <Button transparent>
                            <Icon name='ios-search' size={30} onPress={this.toSearchListShoe} />
                        </Button>
                        <Button transparent onPress={() => this.openDrawer()}>
                            <Icon type="FontAwesome" name="filter" style={{ color: 'white' }} />

                        </Button>
                    </Right>
                </Header>
                <Tabs renderTabBar={() => <ScrollableTab />}>
                    <Tab heading="Tất cả" tabStyle={{ backgroundColor: '#0F0F0F' }} activeTabStyle={{ backgroundColor: '#393939' }} textStyle={{ color: 'white' }}>
                        <AllListShoe nav={this.props.navigation} />
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
                <Footer>
                    <BottomNavigation selectedScreen='ListShoe' navigation={this.props.navigation} />
                </Footer>
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