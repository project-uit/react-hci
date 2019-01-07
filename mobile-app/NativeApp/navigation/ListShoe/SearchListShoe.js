import React, { Component } from 'react';
import { View } from 'react-native';
import { Header, Left, Button, Body, Title, Right, Icon, Item, Input } from 'native-base';

class SearchListShoe extends Component {

    state = {
        searchText: null
    }

    onChangeText = (event) => {
        this.setState({
            searchText: event.nativeEvent.text
        })
    }
    clearText = () => {
        this.setState({
            searchText: ''
        })
    }
    render() {
        return (
            <View>
                <Header style={{ backgroundColor: '#0F0F0F' }}>
                    <Left>
                        <Button transparent onPress={() => this.props.navigation.goBack()}>
                            <Icon name='ios-arrow-back' size={30} />
                        </Button>
                    </Left>
                    <Right>
                        <Item >
                            <Input placeholder='Tìm kiếm tên giày' style={{ color: 'white' }} value={this.state.searchText} onChange={this.onChangeText} />
                            <Icon active name='ios-close-circle-outline' style={{ color: 'white' }} onPress={this.clearText} />
                        </Item>
                        <Button transparent>
                            <Icon name='ios-search' size={30} />
                        </Button>
                    </Right>
                </Header>
            </View>
        );
    }
}

export default SearchListShoe;