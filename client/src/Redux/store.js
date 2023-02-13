import {
  combineReducers,
  configureStore,
  getDefaultMiddleware,
} from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import basketReducer from "./slices/basket";
import userRecducer from "./slices/user";

const rootReducer = combineReducers({ basket: basketReducer });

const persistConfig = { key: "root", storage: storage };

const psReducers = persistReducer(persistConfig, rootReducer);

const customMidleware = getDefaultMiddleware({ serializableCheck: false });

const store = configureStore({
  reducer: { basket: psReducers, user: userRecducer },
  middleware: customMidleware,
});

const psStore = persistStore(store);

export { psStore, store };
