import React, { Component } from 'react';
import { TouchableOpacity, StyleSheet, Text, View } from 'react-native';

export default class UserScreen extends React.Component{
    onLearnMore = () => {
        this.props.navigation.navigate('Switch');
    };
    render(){
        return(
            <View style={ styles.container }>
                <Text style={ styles.header }>Welcome to SocialWeb</Text>
                <TouchableOpacity>
                    <Text onPress={()=> this.onLearnMore()}>
                        Click to Login
                    </Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#00695C',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 5,
    },
    header: {
        fontSize: 30,
        fontWeight: 'bold',
        color: 'white',
    },
    body: {
        alignContent: 'center',
        fontSize: 25,
        color: 'white',
    }
});