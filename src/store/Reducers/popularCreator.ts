import axios from "axios";
import { AppDispatch } from "./../store";
import { IMovie } from "../../types/IMovie";
import { getPopular } from "./popularSlice";
import { API_KEY } from "../../API";
export const PopularMovie = () => {
  return async (dispath: AppDispatch) => {
    try {
      const url = await axios.get<{ results: IMovie[] }>(
        `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`
      );
      dispath(getPopular(url.data.results));
    } catch (error: any) {
      dispath(error.message);
    }
  };
};
