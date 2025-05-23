import React from "react";
import { Image } from "react-native";
import { StackNavigator } from "react-navigation";

import MenuScreen from "./Screens/Menu";
import RestaurantScreen from "./Screens/Restaurant";

class LogoTitle extends React.Component {
  render() {
    return (
      <Image
        source={require("./ntust_logo.png")}
        style={{ width: 30, height: 30, marginRight: 10 }}
      />
    );
  }
}

//Main navigator for the app
const Navigator = StackNavigator({
  Home: {
    screen: MenuScreen,
    navigationOptions: {
      headerTitle: "NTUST Restaurants",
      headerRight: <LogoTitle />,
      headerTitleStyle: {
        color: "black",
      },
      headerStyle: {
        backgroundColor: "white",
        height: 45,
      },
      headerTintColor: "#ddd",
    },
  },
  Restaurant: {
    screen: RestaurantScreen,
  },
});

export default class App extends React.Component {
  render() {
    return <Navigator />;
  }
}
