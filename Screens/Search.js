import React from "react";
import { FlatList, StyleSheet, Text, TextInput, View } from "react-native";

class DishInfo extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const item = this.props.dish;

    return (
      <View style={styles.dishRow}>
        <Text style={styles.itemText}>
          {item.name.toUpperCase()}
          {"\n"}
          <Text style={{ color: "grey" }}>
            {item.restaurant[0].toUpperCase() + item.restaurant.substr(1)}{" "}
            {" - "} {item.cafeteria}
          </Text>
        </Text>
        <Text style={styles.itemPrice}>{item.price},-</Text>
      </View>
    );
  }
}

class SearchField extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: this._getAllDishes(),
      inputText: "",
      results: [],
      lastItem: null,
    };
  }

  _getAllDishes() {
    //Data: List of objects [name, dishes[]]
    var rawData = [
      require("../data/sports.json").restaurants,
      require("../data/ee.json").restaurants,
      require("../data/faculty.json").restaurants,
    ];
    var data = [
      ...rawData[0].map((e) =>
        e.dishes.map((f) => {
          f.restaurant = e.name;
          f.cafeteria = "Sports";
          return f;
        })
      ),
      ...rawData[1].map((e) =>
        e.dishes.map((f) => {
          f.restaurant = e.name;
          f.cafeteria = "EE";
          return f;
        })
      ),
      ...rawData[2].map((e) =>
        e.dishes.map((f) => {
          f.restaurant = e.name;
          f.cafeteria = "Faculty";
          return f;
        })
      ),
    ];
    data = [].concat(...data); //flatten array

    return data;
  }

  _search(text) {
    this.setState({ inputText: text });
    var filtered = this.state.data.filter(
      (e) => text && e.name.toLowerCase().contains(text.toLowerCase())
    );
    this.setState({ results: filtered });
  }

  setFocus() {
    this.nameInput.focus();
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <TextInput
          autoFocus={true}
          ref={(input) => {
            this.nameInput = input;
          }}
          style={{ height: 40 }}
          onChangeText={(text) => {
            this._search(text);
          }}
          value={this.state.inputText}
        />
        <FlatList
          style={{ flex: 1 }}
          data={this.state.results}
          renderItem={({ item }) => (
            <DishInfo dish={item} lastItem={this.state.lastItem} />
          )}
          keyExtractor={(item, index) => index}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  dishRow: {
    //borderColor: '#DDDDDD',
    //borderWidth: 1,
    width: "100%",
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
    backgroundColor: "#EEEEEE",
  },
  itemText: {
    flex: 4,
    marginLeft: 15,
    marginRight: 15,
    fontSize: 15,
  },
  itemPrice: {
    flex: 1,
    fontSize: 15,
  },
});
export default SearchField;
