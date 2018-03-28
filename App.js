import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReduxers, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TextInput,
  Button
} from 'react-native';
import { StackNavigator } from 'react-navigation';

import MenuScreen from './Screens/Menu';
import RestaurantScreen from './Screens/Restaurant';

//Main navigator for the app
const Navigator = StackNavigator({
  Home: {
    screen: MenuScreen,
    navigationOptions: {
      headerTitle: 'Lunch at 12?'
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
