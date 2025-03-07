import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import JobReducer from "../store/slice/JobSlice";

const rootReducer = combineReducers({
  JOB: JobReducer,
});

const config = {
  key: "persist",
  storage: storage,
};

const persistedReducers = persistReducer(config, rootReducer);

export const store = configureStore({
  reducer: persistedReducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoreActions: ["persist/PERSIST", "persist/REHYDRATE"],
      },
    }),
});

export const persistedStore = persistStore(store);
