"use client";

import { Provider } from "react-redux";
import { store, persistedStore } from "../../store/store";
import { PersistGate } from "redux-persist/integration/react";

const ReduxProvider = ({ children }) => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistedStore}>
        {children}
      </PersistGate>
    </Provider>
  );
};

export default ReduxProvider;
