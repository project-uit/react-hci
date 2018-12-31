import React, { Component } from 'react';
import { Container, Header, Left, Body, Right, Button, Title,Icon } from 'native-base';

type Props = {};

export default class HeaderComponent extends Component<Props> {

    render() {

        return (
            <Header>
                <Left>
                    <Button transparent>
                        <Icon name='arrow-back' size={30}/>
                    </Button>
                </Left>
                <Body>
                    <Title>Shoe style</Title>
                </Body>
                <Right>
                    <Button transparent>
                        <Icon name='ios-menu' size={30}/>
                    </Button>
                </Right>
            </Header>

        );

    }
}