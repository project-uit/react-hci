import React, { Component } from 'react';
import { Container, Header, Left, Button, Icon, Body, Content, Title, Right, Col, Grid, Item, Input, Footer, FooterTab, List, ListItem, Thumbnail } from 'native-base';
import { Text, View, TouchableOpacity, Image } from 'react-native';
import ReadMore from 'react-native-read-more-text';
import StarRating from 'react-native-star-rating';
class ReviewShoe extends Component {


    state = {
        starCount: 0
    }
    _renderTruncatedFooter = (handlePress) => {
        return (
            <Text style={{ marginTop: 5, color: '#40A9FF', textAlign: 'right' }} onPress={handlePress}>
                Hiển thị thêm
          </Text>
        );
    }

    _renderRevealedFooter = (handlePress) => {
        return (
            <Text style={{ marginTop: 5, color: '#40A9FF', textAlign: 'right' }} onPress={handlePress}>
                Ẩn
          </Text>
        );
    }
    _handleTextReady = () => {
        // ...
    }
    onStarRatingPress(rating) {
        this.setState({
          starCount: rating
        });
      }
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
                    <List>
                        <ListItem avatar>
                            <Left>
                                <Thumbnail small source={{ uri: 'http://ditjenpdn.kemendag.go.id/assets/library/img/avatars/avatar2_big@2x.png' }} />
                            </Left>
                            <Body>
                                <Text>Messi</Text>
                                <View style={{ width: 100 }}>
                                    <StarRating
                                        starSize={25}
                                        disabled={true}
                                        maxStars={5}
                                        rating={5}
                                        fullStarColor={'#FADB14'}
                                    />
                                </View>
                                <ReadMore
                                    numberOfLines={2}
                                    renderTruncatedFooter={this._renderTruncatedFooter}
                                    renderRevealedFooter={this._renderRevealedFooter}
                                    onReady={this._handleTextReady}>

                                    <Text
                                    >Giày mang rất thoải mái, kiểu dáng này là
                                                                     loại mà mình thích nhất, mình thường mang để chơi thể thao vào mỗi sáng sớm
                                    rất êm, thực sự rất tốt. Shiper rất nhanh, nhiệt tình và vui vẻ, mình rất thích việc shop cho gửi hàng đến tận nơi rồi mới thanh toán, rất tiện dụng!</Text>
                                </ReadMore>
                                <Image style={{ width: 120, height: 80 }} source={{ uri: 'https://www.flightclub.com/media/catalog/product/cache/1/image/1600x1140/9df78eab33525d08d6e5fb8d27136e95/8/0/805531_02.jpg' }} />
                            </Body>
                            <Right>
                                <Text note>a few seconds ago</Text>
                            </Right>
                        </ListItem>
                        <ListItem avatar>
                            <Left>
                                <Thumbnail small source={{ uri: 'http://ditjenpdn.kemendag.go.id/assets/library/img/avatars/avatar2_big@2x.png' }} />
                            </Left>
                            <Body>
                                <Text>Rooney</Text>
                                <View style={{ width: 100 }}>
                                    <StarRating
                                        starSize={25}
                                        disabled={true}
                                        maxStars={5}
                                        rating={4.5}
                                        fullStarColor={'#FADB14'}
                                    />
                                </View>
                                <ReadMore
                                    numberOfLines={2}
                                    renderTruncatedFooter={this._renderTruncatedFooter}
                                    renderRevealedFooter={this._renderRevealedFooter}
                                    onReady={this._handleTextReady}>

                                    <Text
                                    >Giày thoải mái nhất mà tôi đã từng đi, nó chỉ cần lót thêm đệm để mang đến cho bạn một trải nghiệm hoàn hảo. Chưa kể trông nó còn rất đẹp. Chúng có màu sáng hơn một chút so với hình ảnh, nhưng tôi thực sự thích chúng theo cách này nhiều hơn!
                                    </Text>
                                </ReadMore>
                                <Image style={{ width: 120, height: 80 }} source={{ uri: 'https://www.flightclub.com/media/catalog/product/cache/1/image/1600x1140/9df78eab33525d08d6e5fb8d27136e95/8/0/805531_03.jpg' }} />
                            </Body>
                            <Right>
                                <Text note>a few seconds ago</Text>
                            </Right>
                        </ListItem>
                    </List>
                </Content>
                <View style={{ width: 100, margin: 3 }}>
                    <StarRating
                        starSize={25}
                        disabled={false}
                        maxStars={5}
                        rating={this.state.starCount}
                        fullStarColor={'#FADB14'}
                        selectedStar={(rating) => this.onStarRatingPress(rating)}
                    />
                </View>
                <Footer>
                    <FooterTab style={{ backgroundColor: '#ECEFF1' }}>
                        <Input placeholder='Nhập bình luận' />
                        <TouchableOpacity style={{ borderLeftWidth: 0.4, borderLeftColor: 'black', width: '10%', backgroundColor: '#40A9FF', borderRadius: 3 }}>
                            <Icon name='md-send' size={30} style={{ textAlign: 'center', marginTop: 15 }} />
                        </TouchableOpacity>
                    </FooterTab>
                </Footer>
            </Container >
        );
    }
}

export default ReviewShoe;