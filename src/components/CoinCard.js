import React from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import { images } from "../Utils/CoinIcons";

const CoinCard = ({
  symbol,
  coin_name,
  price,
  percent_change_7d,
  percent_change_24hr,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.upperRow}>
        <Image style={styles.image} source={{ uri: images[symbol] }} />
        <Text style={styles.coinSymbol}>{symbol}</Text>
        <Text style={styles.separator}>|</Text>
        <Text style={styles.coinName}>{coin_name}</Text>
        <Text style={styles.coinPrice}>
          {price} <Text style={styles.moneySymbol}> $ </Text>
        </Text>
      </View>

      <View style={styles.statisticsContainer}>
        <Text>
          24Hr:{" "}
          <Text
            style={[
              styles.percentChange,
              styles[percent_change_24hr < 0 ? "minus" : "plus"],
            ]}
          >
            {percent_change_24hr} %
          </Text>
        </Text>
        <Text>
          7D:{" "}
          <Text
            style={[
              styles.percentChange,
              styles[percent_change_7d < 0 ? "minus" : "plus"],
            ]}
          >
            {percent_change_7d} %
          </Text>
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    marginBottom: 20,
    borderBottomColor: "#e5e5e5",
    borderBottomWidth: 3,
    padding: 20,
  },
  upperRow: {
    display: "flex",
    flexDirection: "row",
    marginBottom: 15,
  },
  separator: {
    marginTop: 10,
  },
  coinSymbol: {
    marginTop: 10,
    marginLeft: 20,
    marginRight: 5,
    fontWeight: "bold",
  },
  coinName: {
    marginTop: 10,
    marginLeft: 5,
    marginRight: 20,
  },
  coinPrice: {
    marginTop: 10,
    marginLeft: "auto",
    marginRight: 10,
    fontWeight: "bold",
  },
  image: {
    width: 35,
    height: 35,
  },
  moneySymbol: {
    fontWeight: "bold",
  },
  statisticsContainer: {
    display: "flex",
    borderTopColor: "#fafafa",
    borderTopWidth: 2,
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  percentChange: {
    fontWeight: "bold",
    marginLeft: 5,
  },
  plus: {
    color: "#00bfa5",
  },
  minus: {
    color: "#dd2c00",
  },
});

export default CoinCard;
