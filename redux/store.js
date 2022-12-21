import { legacy_createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { persistStore, persistReducer } from "redux-persist";

import schools_reducer from "./reducers";

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
  whitelist: ["Schools"],
};

const rootReducer = combineReducers({
  schools_reducer: persistReducer(persistConfig, schools_reducer),
});

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));

export const persistor = persistStore(store);
