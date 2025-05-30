import React, { useEffect, useRef, useState } from 'react';
import { FlatList, StyleSheet, Text, TextInput, View } from 'react-native';

interface Dish {
  name: string;
  price: string | number;
  restaurant: string;
  cafeteria: string;
}

interface DishInfoProps {
  dish: Dish;
  lastItem?: any;
}

const DishInfo: React.FC<DishInfoProps> = ({ dish }) => (
  <View style={styles.dishRow}>
    <Text style={styles.itemText}>
      {dish.name.toUpperCase()}
      {'\n'}
      <Text style={{ color: 'grey' }}>
        {dish.restaurant.charAt(0).toUpperCase() + dish.restaurant.slice(1)} {' - '} {dish.cafeteria}
      </Text>
    </Text>
    <Text style={styles.itemPrice}>{dish.price},-</Text>
  </View>
);

const getAllDishes = (): Dish[] => {
  const sports = require('../data/sports.json').restaurants;
  const ee = require('../data/ee.json').restaurants;
  const faculty = require('../data/faculty.json').restaurants;
  let data: Dish[] = [];
  [
    { arr: sports, cafeteria: 'Sports' },
    { arr: ee, cafeteria: 'EE' },
    { arr: faculty, cafeteria: 'Faculty' },
  ].forEach(({ arr, cafeteria }) => {
    arr.forEach((e: any) => {
      e.dishes.forEach((f: any) => {
        data.push({ ...f, restaurant: e.name, cafeteria });
      });
    });
  });
  return data;
};

const SearchField: React.FC = () => {
  const [inputText, setInputText] = useState('');
  const [results, setResults] = useState<Dish[]>([]);
  const data = useRef(getAllDishes());
  const nameInput = useRef<TextInput>(null);

  const search = (text: string) => {
    setInputText(text);
    const filtered = data.current.filter(
      (e) => text && e.name.toLowerCase().includes(text.toLowerCase())
    );
    setResults(filtered);
  };

  useEffect(() => {
    if (nameInput.current) {
      nameInput.current.focus();
    }
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <TextInput
        autoFocus
        ref={nameInput}
        style={styles.searchInput}
        onChangeText={search}
        value={inputText}
      />
      <FlatList
        style={{ flex: 1 }}
        data={results}
        renderItem={({ item }) => <DishInfo dish={item} />}
        keyExtractor={(_, index) => index.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  dishRow: {
    width: '100%',
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    backgroundColor: '#EEEEEE',
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
  searchInput: {
    height: 40,
    borderColor: '#CCCCCC',
    borderWidth: 1,
    paddingHorizontal: 10,
    margin: 10,
    borderRadius: 5,
    backgroundColor: '#FFFFFF',
    
  }
});

export default SearchField;
