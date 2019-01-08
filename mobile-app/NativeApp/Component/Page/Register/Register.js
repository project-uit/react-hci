import React, { Component } from 'react';
import { StyleSheet, Image } from 'react-native';
import {
    Text, Container, Left, Right, Header, Body, Title, Card, CardItem,
    Content, Form, Item, Input, Button, Icon, Footer
} from 'native-base';
import BottomNavigation from '../../Common/BottomNavigation/BottomNavigation';

export default class Register extends Component {
    
    gotoProfile = () => {
        this.props.navigation.navigate('Login')
    }

    render() {
        return (
            <Container>
                <Header style={{ backgroundColor: '#0F0F0F' }}>
                    <Left>
                        <Button transparent onPress={() => this.props.navigation.goBack()}>
                            <Icon name='arrow-back' />
                        </Button>
                    </Left>
                    <Body>
                        <Title>Đăng ký</Title>
                    </Body>
                    <Right />
                </Header>
                <Content>
                    <Body>
                        {/* <Image source={require('./../../../../resources/image/logo.png')} /> */}
                    </Body>
                    <Card>
                        <Form>
                            <Item>
                                <Icon active name='contact' />
                                <Input placeholder='Tên tài khoản' />
                            </Item>
                            <Item>
                                <Icon active name='mail' />
                                <Input placeholder='Địa chỉ email' />
                            </Item>
                            <Item>
                                <Icon active name='key' />
                                <Input placeholder='Mật khẩu' />
                            </Item>
                            <Item last>
                                <Icon active name='key' />
                                <Input placeholder='Nhập lại mật khẩu' />
                            </Item>
                        </Form>
                        <CardItem footer style={{ paddingTop: 20, paddingBottom: 20 }}>
                            <Body/>
                            <Right>
                                <CardItem>
                                    <Text style={styles.baseText}>Đã có tài khoản? </Text>
                                    <Text onPress={this.gotoProfile} style={[styles.baseText, { color: 'red' }]}>Đăng nhập</Text>
                                </CardItem>
                            </Right>
                        </CardItem>
                        <Button block dark onPress={this.gotoProfile}>
                            <Text>Đăng ký</Text>
                        </Button>
                    </Card>
                </Content>
                <Footer>
                    <BottomNavigation selectedScreen='Profile' navigation={this.props.navigation} />
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
        fontSize: 20,
        fontWeight: 'bold',
    },
});