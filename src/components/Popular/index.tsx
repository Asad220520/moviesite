import { useEffect } from "react";
import { useAppDispach } from "../../hooks/useAppDispaht";
import { useAppSelector } from "../../hooks/useAppSelector";
import "./index.scss";
import { PopularMovie } from "../../store/Reducers/popularCreator";
import MovieCard from "../MovieCard";
import { IMovie } from "../../types/IMovie";
const Popular = () => {
  const dispath = useAppDispach();
  const { popular } = useAppSelector((r) => r.popularSlice);
  useEffect(() => {
    dispath(PopularMovie());
  }, []);
  console.log("popular", popular);

  return (
    <div id="popular">
      <div className="container">
        <div className="popular">
          {popular.map((el: IMovie) => (
            <MovieCard el={el} key={el.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Popular;
