import { IMovie } from "./../../types/IMovie";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface IPopularState {
  popular: IMovie[];
}
const initialState: IPopularState = {
  popular: [],
};
export const popularSlice = createSlice({
  name: "popular",
  initialState,
  reducers: {
    getPopular(state, action: PayloadAction<IMovie[]>) {
      state.popular = action.payload;
    },
  },
});
export const { getPopular } = popularSlice.actions;
export default popularSlice.reducer;
