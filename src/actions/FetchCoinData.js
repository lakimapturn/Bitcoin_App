import axios from "axios";
import * as action from "../Utils/ActionTypes";

const FetchCoinData = () => {
  return (dispatch) => {
    dispatch({ type: action.FETCHING_COIN_DATA });

    return fetch(
      "https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest",
      {
        method: "GET",
        qs: {
          start: "1",
          limit: "1",
          convert: "USD",
        },
        headers: {
          "X-CMC_PRO_API_KEY": "38c898da-6d95-4f94-83e5-bd622ddda1d7",
        },
        json: true,
        gzip: true,
      }
    )
      .then((response) => {
        return response.json();
      })
      .then((res) => {
        // console.log("API call response:", res);
        console.log("GOT DATA!");
        return dispatch({
          type: action.FETCHING_COIN_DATA_SUCCESS,
          payload: res.data,
        });
      })
      .catch((err) => {
        return dispatch({
          type: action.FETCHING_COIN_DATA_FAIL,
          payload: err,
        });
        console.log("API call error:", err.message);
      });
  };
};

export default FetchCoinData;
