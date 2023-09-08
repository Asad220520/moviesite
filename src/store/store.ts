import popularSlice from "./Reducers/popularSlice";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
const rootReducer = combineReducers({
  popularSlice,
});
export const setUpStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};
export type rootState = ReturnType<typeof rootReducer>;
type AppStore = ReturnType<typeof setUpStore>;
export type AppDispatch = AppStore["dispatch"];

// npm i @reduxjs/toolkit react-redux @types/react-redux axios
