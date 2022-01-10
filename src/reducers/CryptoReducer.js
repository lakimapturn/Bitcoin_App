import {
  FETCHING_COIN_DATA,
  FETCHING_COIN_DATA_SUCCESS,
  FETCHING_COIN_DATA_FAIL,
} from "../Utils/ActionTypes";

const initialState = {
  isFetching: false,
  data: [],
  hasError: false,
  errorMessage: null,
};

const CryptoReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_COIN_DATA: {
      return Object.assign(state, {
        isFetching: true,
        data: null,
        hasError: false,
        errorMessage: null,
      });
    }

    case FETCHING_COIN_DATA_SUCCESS: {
      console.log("success!");
      return Object.assign({}, state, {
        isFetching: false,
        data: action.payload,
        hasError: false,
        errorMessage: null,
      });
    }

    case FETCHING_COIN_DATA_FAIL: {
      console.log("fail!");
      return Object.assign(state, {
        isFetching: false,
        data: [],
        hasError: true,
        errorMessage: action.err,
      });
    }

    default:
      return state;
  }
};

export default CryptoReducer;
