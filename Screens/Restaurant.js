import React from 'react';
import {
  Text,
  View,
  FlatList,
  TouchableHighlight,
  Alert,
  StyleSheet
} from 'react-native';
import { TabNavigator } from 'react-navigation';

class RestaurantMenu extends React.Component {
  constructor(props) {
    super(props);
    //console.log(props.navigation);
    this.state = {
      name: props.navigation.state.params.name,
      cantina: props.navigation.state.params.cantina,
      dishes: props.navigation.state.params.dishes
    };
  }

  render() {
    //const url = '../data/' + this.state.cantina.toLowerCase() + '.json';
    const data = this.state.url;
    //const dishes = data.restaurants.name;
    console.log(this.state.dishes[0].dishes);
    return (
      <View>
        <Text>{this.state.name + ' ' + this.state.cantina}</Text>
        <FlatList
          data={this.state.dishes[0].dishes}
          renderItem={({ item }) => (
            <TouchableHighlight>
              <Text style={styles.itemText}>
                {item.name.toUpperCase() + '    ' + item.price}
              </Text>
            </TouchableHighlight>
          )}
          keyExtractor={(item, index) => index}
        />
      </View>
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
export default RestaurantMenu;
