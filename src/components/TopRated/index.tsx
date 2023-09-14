import { useEffect } from "react";
import { useAppSelector } from "../../hooks/useAppSelector";
import { topRatedMovie } from "../../store/Reducers/topRatedSlice";
import { useAppDispach } from "../../hooks/useAppDispaht";
import MovieCard from "../MovieCard";
import "./index.scss";
const TopRated = () => {
  const { toprated } = useAppSelector((r) => r.topRatedSlice);
  const dispaht = useAppDispach();

  useEffect(() => {
    dispaht(topRatedMovie());
  }, []);
  console.log(toprated);

  return (
    <div id="topRated">
      <div className="container">
        <div className="topRated">
          {toprated.map((el) => (
            <MovieCard el={el} key={el.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopRated;
