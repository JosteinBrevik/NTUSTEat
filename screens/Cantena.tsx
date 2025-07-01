import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import restaurantsData from '../data/restaurants.json';

interface Restaurant {
  name: string;
  dishes: Dish[];
}

interface Dish {
  name: string;
  price: string | number;
}

interface CantenaProps {
  number: number;
  url: { restaurants: Restaurant[] };
}

const Cantena: React.FC<CantenaProps> = ({ number, url }) => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  const restaurants = restaurantsData.cantinas[number].restaurants;
  const cantina = restaurantsData.cantinas[number].name;
  const restaurantDishes = url.restaurants;

  return (
    <View style={styles.container}>
      <FlatList
        data={restaurants}
        renderItem={({ item }) => {
          const selectedItem = restaurantDishes.filter(
            (e) => e.name === item.name
          );
          return (
            <TouchableOpacity
              style={styles.listItem}
              onPress={() => {
                navigation.navigate('restaurant', {
                  restaurant: JSON.stringify(item),
                  cantina: cantina,
                  dishes: JSON.stringify(selectedItem[0]?.dishes || []),
                });
              }}
            >
              <Text style={styles.itemText}>{item.name.toUpperCase()}</Text>
            </TouchableOpacity>
          );
        }}
        keyExtractor={(_, index) => index.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
    backgroundColor: '#CCCCCC',
  },
  listItem: {
    backgroundColor: '#EEEEEE',
    borderWidth: 1,
    borderColor: '#DDDDDD',
    width: '100%',
  },
  itemText: {
    fontFamily: 'Roboto',
    marginLeft: 5,
    fontSize: 20,
    padding: 10,
  },
});
export default Cantena;
