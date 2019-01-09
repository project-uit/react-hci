import {
    Text,
    View, StyleSheet,
    Image, TouchableOpacity
} from 'react-native'
import Swiper from 'react-native-swiper'
import { Icon } from 'native-base';
import React, { Component } from 'react';

class Carousel extends Component {
    toDetailShoe = () => {
        this.props.nav.navigate('DetailShoe')
    }
    render() {
        return (
            <Swiper
                style={styles.wrapper}
                showsButtons={false}
                showsPagination={true}
                dotColor="gray"
                activeDotColor="white"
                autoplay={true}>
                <View>
                    <TouchableOpacity style={{ width: '100%' }}>
                        <Image style={{ width: '100%', height: '100%' }} source={{ uri: "https://www.flightclub.com/media/catalog/product/cache/1/image/1600x1140/9df78eab33525d08d6e5fb8d27136e95/8/0/804354_1.jpg" }} />
                    </TouchableOpacity>
                </View>
                <View >
                    <TouchableOpacity style={{ width: '100%' }} onPress={this.toDetailShoe}>
                        <Image style={{ width: '100%', height: '100%' }}
                            source={{ uri: "https://www.flightclub.com/media/catalog/product/cache/1/image/1600x1140/9df78eab33525d08d6e5fb8d27136e95/8/0/805531_01.jpg" }} />
                    </TouchableOpacity>
                </View>
                <View>
                    <TouchableOpacity style={{ width: '100%' }}>
                        <Image style={{ width: '100%', height: '100%' }} source={{ uri: "https://www.flightclub.com/media/catalog/product/cache/1/image/1600x1140/9df78eab33525d08d6e5fb8d27136e95/8/0/805570_4.jpg" }} />
                    </TouchableOpacity>

                </View>
            </Swiper>
        );
    }
}

export default Carousel;
const styles = StyleSheet.create({

    wrapper: {
        height: 300,
    },
    slide1: {
        flex: 1,
    },

    slide3: {
        flex: 1,
    },

});
