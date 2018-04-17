import React from 'react';
import {
  Text,
  View,
  FlatList,
  TouchableHighlight,
  Alert,
  StyleSheet
} from 'react-native';
import { TabNavigator, StackNavigator } from 'react-navigation';
import RestaurantMenu from './Restaurant.js';
import SearchField from './Search.js';

var data = require('../data/restaurants.json');

class Cantena extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurants: data.cantinas[props.number].restaurants,
      cantina: data.cantinas[props.number].name,
      restaurantDishes: props.url.restaurants
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.state.restaurants}
          renderItem={({ item }) => (
            <TouchableHighlight
              style={styles.listItem}
              onPress={() => {
                selectedItem = this.state.restaurantDishes.filter(
                  e => e.name === item.name
                );
                this.props.navigator.navigate('Restaurant', {
                  restaurant: item,
                  cantina: this.state.cantina,
                  dishes: selectedItem[0].dishes
                });
              }}
            >
              <Text style={styles.itemText}>{item.name.toUpperCase()}</Text>
            </TouchableHighlight>
          )}
          keyExtractor={(item, index) => index}
        />
      </View>
    );
  }
}

class Cantena1 extends React.Component {
  render() {
    return (
      <Cantena
        number="0"
        navigator={this.props.navigation}
        url={require('../data/sports.json')}
      />
    );
  }
}

class Cantena2 extends React.Component {
  render() {
    return (
      <Cantena
        number="1"
        navigator={this.props.navigation}
        url={require('../data/ee.json')}
      />
    );
  }
}

class Cantena3 extends React.Component {
  render() {
    return (
      <Cantena
        number="2"
        navigator={this.props.navigation}
        url={require('../data/faculty.json')}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
    backgroundColor: '#CCCCCC'
  },
  listItem: {
    backgroundColor: '#EEEEEE',
    borderWidth: 1,
    borderColor: '#DDDDDD',
    width: '100%'
  },

  itemText: {
    fontFamily: 'Roboto',
    marginLeft: 15,
    fontSize: 20,
    padding: 10
  }
});

export default TabNavigator(
  {
    Sports: { screen: Cantena1 },
    EE: { screen: Cantena2 },
    Faculty: { screen: Cantena3 },
    Search: { screen: SearchField }
  },
  {
    navigationOptions: ({ navigation }) => ({}),
    tabBarOptions: {
      style: {
        backgroundColor: 'black'
      },
      activeBackgroundColor: 'gray',
      activeTintColor: 'white'
    },
    animationEnabled: true,
    lazy: true
  }
);
