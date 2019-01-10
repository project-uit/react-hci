import React, { Component } from 'react';
import { StyleSheet, ScrollView, View } from 'react-native';
import {
    Container, Header, Left, Right, Body, Footer, Title,
    Button, Icon, Text, Thumbnail, ListItem, List, Textarea
} from 'native-base';
import BottomNavigation from '../../Common/BottomNavigation/BottomNavigation';

export default class Support extends Component {
    render() {
        return (
            <Container>
                <Header hasTabs style={{ backgroundColor: '#0F0F0F' }}>
                    <Left>
                        <Button transparent onPress={() => this.props.navigation.goBack()}>
                            <Icon name='arrow-back' />
                        </Button>
                    </Left>
                    <Body>
                        <Title>Hỗ trợ</Title>
                    </Body>
                    <Right />
                </Header>

                <View style={{ flex: 1 }}>
                    <ScrollView>
                        <List>
                            <ListItem avatar>
                                <Left>
                                    <Thumbnail small source={{ uri: 'http://ditjenpdn.kemendag.go.id/assets/library/img/avatars/avatar2_big@2x.png' }} />
                                </Left>
                                <Body>
                                    <Text>Supporter</Text>
                                    <Text note>Chào bạn, tôi có thể giúp gì cho bạn ?</Text>
                                </Body>
                                <Right>
                                    <Text note>3:43 pm</Text>
                                </Right>
                            </ListItem>
                            <ListItem avatar>
                                <Left>
                                    <Thumbnail small source={{ uri: 'http://ditjenpdn.kemendag.go.id/assets/library/img/avatars/avatar1_big.png' }} />
                                </Left>
                                <Body>
                                    <Text>Tôi</Text>
                                    <Text note>Tôi muốn tư vấn ...</Text>
                                </Body>
                                <Right>
                                    <Text note>3:45 pm</Text>
                                </Right>
                            </ListItem>
                        </List>
                    </ScrollView>
                    <View style={{ padding: 10 }}>
                        <Textarea rowSpan={5} bordered placeholder="Nhập nội dung" />
                        <Text></Text>
                        <Button block style={{backgroundColor: '#40A9FF'}} >
                            <Text>Gửi</Text>
                            <Icon name='send' />
                        </Button>
                    </View>
                </View>
                <Footer>
                    <BottomNavigation selectedScreen='Support' navigation={this.props.navigation} />
                </Footer>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    baseText: {
        fontSize: 12
    },
    titleText: {
        fontSize: 16,
        color: 'white',
    },
    verticalCenter: {
        justifyContent: 'center',
        alignItems: 'center'
    }
});
