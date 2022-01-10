import React, { useEffect } from "react";
import { StyleSheet, View, ScrollView, Text } from "react-native";

const Header = () => {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.header}>CryptoApp</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    display: "flex",
    marginTop: 55,
    alignItems: "center",
  },
  header: { fontWeight: "bold", fontSize: 20 },
});

export default Header;
