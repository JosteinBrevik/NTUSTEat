import RestaurantMenu from "@/screens/Restaurant";
import { useNavigation } from "@react-navigation/native";
import { useLocalSearchParams } from "expo-router";
import { View } from "react-native";

const RestaurantRouter = () => {
    const { restaurant, cantina, dishes } = useLocalSearchParams();
    const navigation = useNavigation();
    // Fix: Always send restaurant and dishes as JSON strings in navigation, and always parse here
    const parsedRestaurant = typeof restaurant === 'string' ? JSON.parse(restaurant) : restaurant;
    const parsedDishes = typeof dishes === 'string' ? JSON.parse(dishes) : dishes;
    const cantinaName = typeof cantina === 'string' ? cantina : cantina[0];

    navigation.setOptions({
        title: parsedRestaurant?.name.toUpperCase() + (cantinaName ? ` - ${cantinaName.toUpperCase()}` : ''),
        headerTitle:  parsedRestaurant?.name.toUpperCase() + (cantinaName ? ` - ${cantinaName.toUpperCase()}` : ''),
        headerBackTitle: cantinaName || 'Cantina',
    });
  return (
    <View>
      <RestaurantMenu restaurant={parsedRestaurant} dishes={parsedDishes} />
    </View>
  );
}

export default RestaurantRouter;