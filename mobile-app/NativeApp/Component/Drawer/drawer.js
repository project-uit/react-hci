import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, DrawerLayoutAndroid, ToolbarAndroid } from 'react-native';
type Props = {};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    }, toolbar: {
        backgroundColor: 'black',
        height: 56,
        alignSelf: 'stretch',
        textAlign: 'center',
    },
});
export default class DrawerComponent extends Component<Props> {

    onActionSelected = (pos) => {
        if (position === 0) { // index of 'Settings'

        }
    }
    render() {

        var navigationView = (
            <View style={{ flex: 1, backgroundColor: '#fff' }}>
                <Text style={{ margin: 10, fontSize: 15, textAlign: 'left' }}>I'm in the Drawer!</Text>
                <Text style={{ margin: 10, fontSize: 15, textAlign: 'left' }}>I'm in the Drawer!</Text>
            </View>
        );
        return (
            <DrawerLayoutAndroid
                drawerWidth={300}
                drawerPosition={DrawerLayoutAndroid.positions.Left}
                renderNavigationView={() => navigationView}>
                <View style={{ flex: 1, alignItems: 'center' }}>

                    <ToolbarAndroid
                        style={styles.toolbar}
                        logo={require('../../Images/logo_retina.png')}
                        title="AwesomeApp"
                        actions={[{ title: 'Settings', icon: require('../../Images/logo_retina.png'), show: 'always' }]}
                        onActionSelected={this.onActionSelected} />
                    <Text style={{ margin: 10, fontSize: 15, textAlign: 'right' }}>Hello1</Text>
                    <Text style={{ margin: 10, fontSize: 15, textAlign: 'right' }}>World!</Text>
                </View>
            </DrawerLayoutAndroid>

        );

    }
}
