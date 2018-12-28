import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator, createStackNavigator } from 'react-navigation';
import AuthScreen from './screens/AuthScreen';
import UserScreen from './screens/UserScreen';
import LoginScreen from './screens/LoginScreen';

export default class App extends React.Component {

  render() {
    const MainNavigator = createStackNavigator({
      User: {screen: UserScreen,
        navigationOptions: {
          title: 'SocialWeb',
        }
      },
      Switch: createBottomTabNavigator({
        Login: {screen: LoginScreen},
        Info: {screen: AuthScreen},
      }),
    });
    return (
      <View style={ styles.container }>
        <MainNavigator />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
  },
  hi: {    
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    fontWeight: 'bold'
  }
});