import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class AuthScreen extends React.Component{
    render(){
        return(
            <View style={ styles.container }>
                <Text style={ styles.header }>About</Text>
                <Text style={ styles.body }>Hi, i've created this screen using the createBottomTabNavigator. You clicked on the icon at the bottom tab to get here. When you clicked the icon, its request went to the createBottomTabNavigator method which routed it to the AuthScreen in the screens folder.</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#00695C',
        alignItems: 'center',
    },
    header: {
        fontSize: 30,
        fontWeight: 'bold',
        color: 'white',
    },
    body: {
        fontSize: 15,
        color: 'white',
        justifyContent: 'center',
        padding: 5,
    }
});