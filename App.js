import {StatusBar} from "expo-status-bar";
import React from "react";
import {StyleSheet, Text, View, FlatList} from "react-native";
import {NavigationContainer} from "@react-navigation/native";

//Redux
import {Provider} from "react-redux";
import store from "./Redux/store";

//navigators
import Main from "./Navigators/Main";

//screens
import ProductContainer from "./Screens/Products/ProductContainer";
import Header from "./Shared/Header";

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Header />
        <Main />
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "gainsboro",
  },
});
