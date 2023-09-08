import { combineReducers, configureStore } from "@reduxjs/toolkit";
const rootReducer = combineReducers({});
export const setUpStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};
export type rootState = ReturnType<typeof rootReducer>;
type AppStore = ReturnType<typeof setUpStore>;
export type AppDispahtch = AppStore["dispatch"];

// npm i @reduxjs/toolkit react-redux @types/react-redux axios
