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

var data = require('../data/restaurants.json');

class Cantena extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurants: data.cantinas[props.number].restaurants,
      cantina: data.cantinas[props.number].name,
      dishes: props.url.restaurants
    };
  }

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'stretch' }}>
        <FlatList
          data={this.state.restaurants}
          renderItem={({ item }) => (
            <TouchableHighlight
              style={styles.listItem}
              onPress={() => {
                dishs = this.state.dishes.filter(e => e.name === item);
                this.props.navigator.navigate('Dishes', {
                  name: item,
                  cantina: this.state.cantina,
                  dishes: dishs
                });
              }}
            >
              <Text style={styles.itemText}>{item.toUpperCase()}</Text>
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
  listItem: {
    backgroundColor: '#DDDDDD',
    width: '100%',
    marginBottom: 10
  },

  itemText: {
    marginLeft: 15,
    fontSize: 24,
    padding: 10
  }
});

const RestaurantStack1 = StackNavigator({
  Restaurants: { screen: Cantena1 },
  Dishes: { screen: RestaurantMenu }
});

const RestaurantStack2 = StackNavigator({
  Restaurants: { screen: Cantena2 },
  Dishes: { screen: RestaurantMenu }
});

const RestaurantStack3 = StackNavigator({
  Restaurants: { screen: Cantena3 },
  Dishes: { screen: RestaurantMenu }
});

export default TabNavigator({
  Sports: { screen: RestaurantStack1 },
  EE: { screen: RestaurantStack2 },
  Faculty: { screen: RestaurantStack3 }
});
