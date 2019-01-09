import React, { Component } from 'react';
import { TouchableOpacity, View, Text, Image, StyleSheet } from 'react-native';


class CardShoe extends Component {
    render() {
        const img = this.props.img;
        return (
            <TouchableOpacity onPress={this.props.toDetailShoe}>
                <View style={styles.container}>
                    <Image style={{ width: 200, height: 150 }} source={{ uri: img }} />
                    <View style={styles.textContainer}>
                        <Text style={styles.company}>
                            {this.props.company}
                        </Text>
                        <Text style={styles.name}>
                            {this.props.name}
                        </Text>
                        <View style={{marginTop: 1}}>
                            <Text style={styles.gender}>
                                {this.props.gender}
                            </Text>
                            <Text style={styles.price}>
                                {this.props.price}
                            </Text>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        );
    }
}
export default CardShoe;
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        shadowColor: 'black',
        shadowOffset: {
            width: 2,
            height: 2
        },
        shadowRadius: 5,
        shadowOpacity: 1.0,
        elevation: 5
    },
    textContainer: {
        marginLeft: 4
    },
    company: {
        fontSize: 15,
        fontWeight: 'bold',
        fontFamily: 'serif',
    },
    name: {
        fontSize: 15,
        color: '#7c795d',
        fontFamily: 'serif',
        fontWeight: '700'
    },
    gender: {
        fontFamily: 'sans-serif',
        letterSpacing: 1,
        color: '#343434',
        fontSize: 13,
    },
    price: {
        fontSize: 13,
        letterSpacing: 1,
        color: '#343434',
        fontFamily: 'sans-serif'
    }
});