import { StatusBar } from "expo-status-bar";
import React from "react";
import { Provider } from "react-redux";
import { StyleSheet, Text, View } from "react-native";

import Store from "./src/Store";
import { Header, CryptoContainer } from "./src/components";

export default function App() {
  return (
    <Provider store={Store}>
      <View>
        <Header />
        <CryptoContainer />
      </View>
    </Provider>
  );
}
