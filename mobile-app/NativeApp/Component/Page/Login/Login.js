import React, { Component } from 'react';
import { StyleSheet, Image } from 'react-native';
import {
    Text, Container, Left, Right, Header, Body, Title, Card, CardItem,
    Content, Form, Item, Input, Label, Button, Icon, Footer, FooterTab
} from 'native-base';
import BottomNavigation from '../../Common/BottomNavigation/BottomNavigation';

export default class Login extends Component {

    gotoRegister = () => {
        this.props.navigation.navigate('Register')
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
                        <Title>Đăng nhập</Title>
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
                            <Item last>
                                <Icon active name='key' />
                                <Input placeholder='Mật khẩu' />
                            </Item>
                        </Form>
                        <CardItem footer style={{ paddingTop: 20, paddingBottom: 20 }}>
                            <Left>
                                <Text style={styles.baseText}>Chưa có tài khoản?</Text>
                                <Text onPress={this.gotoRegister} style={[styles.baseText, { color: 'red' }]}>Đăng ký</Text>
                            </Left>
                            <Right>
                                <CardItem>
                                    <Text style={styles.baseText}>Quên mật khẩu ?</Text>
                                </CardItem>
                            </Right>
                        </CardItem>
                        <Button block dark>
                            <Text>Đăng nhập</Text>
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