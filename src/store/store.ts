import topRatedSlice from "./Reducers/topRatedSlice";
import popularSlice from "./Reducers/popularSlice";
import storage from "redux-persist/lib/storage";
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import {
  AnyAction,
  Store,
  combineReducers,
  configureStore,
} from "@reduxjs/toolkit";
const persistConfig = {
  key: "root",
  storage,
};
const rootReducer = combineReducers({
  popularSlice,
  topRatedSlice,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);
export const setUpStore = () => {
  return configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }),
  });
};
export const persistor = persistStore(
  setUpStore() as Store<rootState, AnyAction>
);
export type rootState = ReturnType<typeof rootReducer>;
type AppStore = ReturnType<typeof setUpStore>;
export type AppDispatch = AppStore["dispatch"];

// npm i @reduxjs/toolkit react-redux @types/react-redux axios
