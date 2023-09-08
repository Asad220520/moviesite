import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IUser } from "../../types/IUser";

interface IUserState {
  user: IUser[];
}
const initialState: IUserState = {
  user: [],
};
export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    getUsers(state, action: PayloadAction<IUser[]>) {
      state.user = action.payload;
    },
  },
});
export const { getUsers } = userSlice.actions;
