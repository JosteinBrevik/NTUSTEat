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
      restaurantNames: data.cantinas[props.number].restaurants,
      cantina: data.cantinas[props.number].name,
      restaurantDishes: props.url.restaurants
    };
  }

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'stretch' }}>
        <FlatList
          data={this.state.restaurantNames}
          renderItem={({ item }) => (
            <TouchableHighlight
              style={styles.listItem}
              onPress={() => {
                selectedItem = this.state.restaurantDishes.filter(
                  e => e.name === item
                );
                this.props.navigator.navigate('Restaurant', {
                  name: item,
                  cantina: this.state.cantina,
                  dishes: selectedItem[0].dishes
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
    fontSize: 20,
    padding: 10
  }
});

export default TabNavigator({
  Sports: { screen: Cantena1 },
  EE: { screen: Cantena2 },
  Faculty: { screen: Cantena3 }
});
