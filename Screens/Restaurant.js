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
    this.state = {
      restaurantName: props.navigation.state.params.name,
      cantina: props.navigation.state.params.cantina,
      dishes: props.navigation.state.params.dishes
    };
  }

  static navigationOptions = ({ navigation }) => ({
    title:
      navigation.state.params.name.toUpperCase() +
      ' - ' +
      navigation.state.params.cantina.toUpperCase()
  });

  _openItemOnPress(name) {
    Alert.alert(name);
  }

  render() {
    return (
      <View>
        <FlatList
          data={this.state.dishes}
          renderItem={({ item }) => (
            //<TouchableHighlight onPress={() => Alert.alert(item.name)}>
            <TouchableHighlight
              onPress={() => this._openItemOnPress(item.name)}
            >
              <View style={styles.listItem}>
                <Text style={styles.itemText}>{item.name.toUpperCase()}</Text>
                <Text style={styles.itemText}>{item.price}</Text>
              </View>
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
    marginBottom: 10,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },

  itemText: {
    marginLeft: 15,
    marginRight: 15,
    fontSize: 12,
    padding: 10
  }
});
export default RestaurantMenu;
