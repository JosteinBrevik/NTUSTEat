import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReduxers, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import {
  StyleSheet,
  Image,
  Text,
  View,
  StatusBar,
  TextInput,
  Button
} from 'react-native';
import { StackNavigator } from 'react-navigation';

import MenuScreen from './Screens/Menu';
import RestaurantScreen from './Screens/Restaurant';

class LogoTitle extends React.Component {
  render() {
    return (
      <Image
        source={require('./ntust_logo.png')}
        style={{ width: 30, height: 30 }}
      />
    );
  }
}

//Main navigator for the app
const Navigator = StackNavigator({
  Home: {
    screen: MenuScreen,
    navigationOptions: {
      headerTitle: <LogoTitle />,
      headerTitleStyle: {
        color: 'black'
      },
      headerStyle: {
        backgroundColor: 'white'
      },
      headerTintColor: '#ddd'
    }
  },
  Restaurant: {
    screen: RestaurantScreen
  }
});

export default class App extends React.Component {
  render() {
    return <Navigator />;
  }
}
