import React from 'react';
import { Alert, FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

interface Dish {
  name: string;
  price: string | number;
}

interface Restaurant {
  name: string;
  description: string;
}

interface RestaurantMenuProps {
  restaurant: Restaurant;
  dishes: Dish[];
}

const RestaurantMenu: React.FC<RestaurantMenuProps> = ({ restaurant, dishes }) => {
  const openItemOnPress = (name: string) => {
    Alert.alert(name);
  };
  // For debugging, print the parsed object

  return (
    <View style={{ flex: 1, backgroundColor: '#F5F5F5' }}>
      <Text style={styles.description}>{restaurant?.description}</Text>
      <FlatList
        style={styles.list}
        data={dishes}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => openItemOnPress(item.name)}>
            <View style={styles.listItem}>
              <Text style={styles.itemText}>{item.name.toUpperCase()}</Text>
              <Text style={styles.itemPrice}>{item.price}{',-'}</Text>
            </View>
          </TouchableOpacity>
        )}
        keyExtractor={(_, index) => index.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  listItem: {
    borderColor: '#DDDDDD',
    borderBottomWidth: 1,
    width: '100%',
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
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
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    textAlign: 'center',
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
