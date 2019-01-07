import React from 'react'
import {
    Text,
    View,
    Image, TouchableOpacity
} from 'react-native'
import Swiper from 'react-native-swiper'
import { Icon} from 'native-base';
var styles = {
    wrapper: {
        height: 300,
    },
    slide1: {
        flex: 1,
    },
    slide2: {
        flex: 1,
    },
    slide3: {
        flex: 1,
    },
}

export default Carousel = <Swiper
    style={styles.wrapper}
    showsButtons ={false}
    showsPagination={true}
    dotColor="gray"
    activeDotColor="white"
    autoplay={true}>
    <View style={styles.slide1}>
        <Image style={{ flex: 1 }} source={{ uri: "https://www.flightclub.com/media/catalog/product/cache/1/image/1600x1140/9df78eab33525d08d6e5fb8d27136e95/8/0/804354_1.jpg" }} />
    </View>
    <View style={styles.slide2}>
        <Image style={{ flex: 1 }} source={{ uri: "https://www.flightclub.com/media/catalog/product/cache/1/image/1600x1140/9df78eab33525d08d6e5fb8d27136e95/8/0/805531_01.jpg" }} />
    </View>
    <View style={styles.slide3}>
        <Image style={{ flex: 1 }} source={{ uri: "https://www.flightclub.com/media/catalog/product/cache/1/image/1600x1140/9df78eab33525d08d6e5fb8d27136e95/8/0/805570_4.jpg" }} />
    </View>
</Swiper>