import React from "react";
import { Provider } from "react-redux";
import { store, persistor } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";
import { Loader } from "./utils/Loader";
import RootNavigator from "./navigation/RootNavigator";

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={<Loader />} persistor={persistor}>
        <RootNavigator />
      </PersistGate>
    </Provider>
  );
}
