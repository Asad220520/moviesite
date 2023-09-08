import { IMovie } from "./../../types/IMovie";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface IUserState {
  popular: IMovie[];
}
const initialState: IUserState = {
  popular: [],
};
export const popularSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    getUsers(state, action: PayloadAction<IMovie[]>) {
      state.popular = action.payload;
    },
  },
});
export const { getUsers } = popularSlice.actions;
export default popularSlice.reducer;
