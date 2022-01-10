import React, { useEffect } from "react";
import { connect } from "react-redux";
import { StyleSheet, View, Text, FlatList } from "react-native";
import Spinner from "react-native-loading-spinner-overlay";

import FetchCoinData from "./../actions/FetchCoinData";
import CoinCard from "./CoinCard";

class CryptoContainer extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);

    // this.props.FetchCoinData();
  }

  componentDidUpdate() {
    console.log(this.props.crypto.id);
  }

  UNSAFE_componentWillMount() {
    console.log("component mounted!");
    this.props.FetchCoinData();
  }

  renderCoinCards = ({ item }) => {
    console.log(item);
    return <CoinCard coin={{ ...item }} />;
  };

  render() {
    if (this.props.crypto.isFetching)
      return (
        <View>
          <Spinner
            visible={this.props.crypto.isFetching}
            textContent="Loading..."
            textStyle={{ color: "#253145" }}
            animation="fade"
          />
        </View>
      );
    return (
      <FlatList
        keyExtractor={(item) => Math.random()}
        data={this.props.crypto.data}
        contentContainerStyle={styles.contentContainer}
        renderItem={this.renderCoinCards}
      />
    );
  }
}

function mapStateToProp(state) {
  return {
    crypto: state.crypto,
  };
}

const styles = StyleSheet.create({
  contentContainer: {
    paddingBottom: 100,
    paddingTop: 55,
  },
});

export default connect(mapStateToProp, { FetchCoinData })(CryptoContainer);
