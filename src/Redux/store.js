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
const userReducer = combineReducers({ user: userRecducer });

const persistConfig = { key: "root", storage: storage };
const persistUserConfig = { key: "user", storage: storage };

const psBasketReducers = persistReducer(persistConfig, rootReducer);
const psUserReducers = persistReducer(persistUserConfig, userReducer);

const customMidleware = getDefaultMiddleware({ serializableCheck: false });

const store = configureStore({
  reducer: { basket: psBasketReducers, user: psUserReducers },
  middleware: customMidleware,
});

const psStore = persistStore(store);

export { psStore, store };
