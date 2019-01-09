import React, { Component } from 'react';
import { Container, Header, Left, Button, Icon, Body, Content, Title, Right, Col, Grid } from 'native-base';
import { Text, View } from 'react-native';


class ReviewShoe extends Component {
    render() {
        return (
            <Container>
                <Header style={{ backgroundColor: '#0F0F0F' }}>
                    <Left>
                        <Button transparent onPress={() => this.props.navigation.goBack()}>
                            <Icon name='ios-arrow-back' size={30} />
                        </Button>
                    </Left>
                    <Body style={{ flex: 3 }}>
                        <Text style={{
                            color: 'white',
                            fontSize: 18,
                        }}>Bình luận</Text>
                    </Body>
                </Header>
                <Content>
                  
                </Content>
            </Container>
        );
    }
}

export default ReviewShoe;