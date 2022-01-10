import { Platform } from "react-native";
import { createStore, applyMiddleware, compose } from "redux";
import ReduxThunk from "redux-thunk";

import RootReducer from "./reducers";

const Store = createStore(RootReducer, applyMiddleware(ReduxThunk));

export default Store;
