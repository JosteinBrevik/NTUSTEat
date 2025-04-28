import React from "react";
import {
  Alert,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

class RestaurantMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurant: props.navigation.state.params.restaurant,
      cantina: props.navigation.state.params.cantina,
      dishes: props.navigation.state.params.dishes,
    };
  }

  static navigationOptions = ({ navigation }) => ({
    title:
      navigation.state.params.restaurant.name.toUpperCase() +
      " - " +
      navigation.state.params.cantina.toUpperCase(),
    headerTitleStyle: {
      color: "white",
      fontSize: 15,
    },
    headerStyle: {
      height: 50,
      backgroundColor: "black",
    },
    headerTintColor: "white",
  });

  _openItemOnPress(name) {
    Alert.alert(name);
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Text style={styles.description}>
          {this.state.restaurant.description}
        </Text>
        <FlatList
          style={styles.list}
          data={this.state.dishes}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => this._openItemOnPress(item.name)}>
              <View style={styles.listItem}>
                <Text style={styles.itemText}>{item.name.toUpperCase()}</Text>
                <Text style={styles.itemPrice}>
                  {item.price}
                  {",-"}
                </Text>
              </View>
            </TouchableOpacity>
          )}
          keyExtractor={(item, index) => index}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  listItem: {
    borderColor: "#DDDDDD",
    borderBottomWidth: 1,
    width: "100%",
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: 10,
    paddingTop: 10,
  },
  list: {
    flex: 1,
    paddingBottom: 10,
  },
  description: {
    paddingHorizontal: 15,
    paddingTop: 5,
    paddingBottom: 10,
    fontSize: 15,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    textAlign: "center",
    elevation: 1,
  },
  itemText: {
    flex: 4,
    marginLeft: 15,
    marginRight: 25,
    fontSize: 15,
  },
  itemPrice: {
    flex: 1,
    fontSize: 15,
  },
});
export default RestaurantMenu;
