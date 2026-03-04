import RestaurantMenu from "@/screens/Restaurant";
import { useNavigation } from "@react-navigation/native";
import { useLocalSearchParams } from "expo-router";
import React, { useLayoutEffect, useMemo } from "react";
import { View } from "react-native";

const RestaurantRouter = () => {
  const { restaurant, cantina, dishes } = useLocalSearchParams();
  const navigation = useNavigation();

  const parsedRestaurant = useMemo(() => {
    try {
      if (typeof restaurant === "string") {
        return JSON.parse(restaurant);
      }
      return restaurant;
    } catch {
      return restaurant;
    }
  }, [restaurant]);

  const parsedDishes = useMemo(() => {
    try {
      if (typeof dishes === "string") {
        return JSON.parse(dishes);
      }
      return dishes;
    } catch {
      return [];
    }
  }, [dishes]);

  const cantinaName = useMemo(() => {
    if (typeof cantina === "string") {
      return cantina;
    }
    if (Array.isArray(cantina)) {
      return cantina[0];
    }
    return undefined;
  }, [cantina]);

  useLayoutEffect(() => {
    const restaurantName =
      parsedRestaurant?.name?.toUpperCase?.() ?? "RESTAURANT";
    const cantinaTitle = cantinaName ? ` - ${cantinaName.toUpperCase()}` : "";

    navigation.setOptions({
      title: `${restaurantName}${cantinaTitle}`,
      headerTitle: `${restaurantName}${cantinaTitle}`,
      headerBackTitle: cantinaName || "Cantina",
    });
  }, [cantinaName, navigation, parsedRestaurant]);

  return (
    <View>
      <RestaurantMenu
        restaurant={parsedRestaurant}
        dishes={parsedDishes || []}
      />
    </View>
  );
};

export default RestaurantRouter;
