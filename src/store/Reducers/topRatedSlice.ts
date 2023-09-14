import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IMovie } from "../../types/IMovie";
import { AppDispatch } from "../store";
import axios from "axios";
import { API_KEY } from "../../API";

interface IToprated {
  toprated: IMovie[];
}
const initialState: IToprated = {
  toprated: [],
};
export const topRatedSlice = createSlice({
  name: "toprated",
  initialState,
  reducers: {
    getTopRated: (state, action: PayloadAction<IMovie[]>) => {
      state.toprated = action.payload;
    },
  },
});
export default topRatedSlice.reducer;
export const { getTopRated } = topRatedSlice.actions;

export const topRatedMovie = () => {
  return async (dispath: AppDispatch) => {
    try {
      const url = await axios.get<{ results: IMovie[] }>(
        `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}`
      );
      dispath(getTopRated(url.data.results));
    } catch (err: any) {
      dispath(err.message);
    }
  };
};
