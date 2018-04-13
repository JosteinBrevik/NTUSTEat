import React from 'react';
import {
  Text,
  TextInput,
  View,
  FlatList,
  TouchableHighlight,
  Alert,
  StyleSheet
} from 'react-native';
import { TabNavigator } from 'react-navigation';

class DishInfo extends React.Component {
  render() {
    const item = this.props.dish;
    return (
      <View>
        <View style={styles.dishRow}>
          <Text style={styles.itemText}>
            {item.name.toUpperCase()}
            {'\n'}
            {item.restaurant[0].toUpperCase() + item.restaurant.substr(1)}
          </Text>
          <Text style={styles.itemPrice}>{item.price},-</Text>
        </View>
      </View>
    );
  }
}

class SearchField extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: this._getAllDishes(),
      inputText: '',
      results: []
    };
  }

  _getAllDishes() {
    //Data: List of objects [name, dishes[]]
    var rawData = [
      require('../data/sports.json').restaurants,
      require('../data/ee.json').restaurants,
      require('../data/faculty.json').restaurants
    ];
    var data = [
      ...rawData[0].map(e =>
        e.dishes.map(f => {
          f.restaurant = e.name;
          f.cafeteria = 'Sports';
          return f;
        })
      ),
      ...rawData[1].map(e =>
        e.dishes.map(f => {
          f.restaurant = e.name;
          f.cafeteria = 'EE';
          return f;
        })
      ),
      ...rawData[2].map(e =>
        e.dishes.map(f => {
          f.restaurant = e.name;
          f.cafeteria = 'Faculty';
          return f;
        })
      )
    ];
    data = [].concat(...data); //flatten array
    //console.log(data);

    return data;
  }

  _search(text) {
    this.setState({ inputText: text });
    console.log('Searching ' + text);
    var filtered = this.state.data.filter(
      e => text && e.name.toLowerCase().contains(text.toLowerCase())
    );

    console.log('FILTERED');
    console.log(filtered);
    this.setState({ results: filtered });
  }
  componentDidMount() {
    this.nameInput.focus();
  }

  render() {
    console.log(this.state);
    console.log(this.state.results);
    return (
      <View style={{ flex: 1 }}>
        <View>
          <TextInput
            autoFocus={true}
            ref={input => {
              this.nameInput = input;
            }}
            style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
            onChangeText={text => {
              this._search(text);
            }}
            value={this.state.inputText}
          />
        </View>
        <View style={{ flex: 1 }}>
          <FlatList
            style={{ flex: 1 }}
            data={this.state.results}
            renderItem={({ item }) => (
              <TouchableHighlight
                onPress={() => this._openItemOnPress(item.name)}
              >
                <DishInfo dish={item} />
              </TouchableHighlight>
            )}
            keyExtractor={(item, index) => index}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  dishRow: {
    borderColor: '#DDDDDD',
    borderWidth: 1,
    width: '100%',
    flex: 1,
    flexDirection: 'row',
    marginBottom: 10
  },
  itemText: {
    flex: 4,
    marginLeft: 15,
    marginRight: 15,
    fontSize: 15
  },
  itemPrice: {
    flex: 1,
    fontSize: 15
  }
});
export default SearchField;
