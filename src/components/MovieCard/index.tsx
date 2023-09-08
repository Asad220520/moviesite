import React from "react";
import "./index.scss";
import { GoHeartFill } from "react-icons/go";
import { AiOutlineClockCircle } from "react-icons/ai";
import { IMovie } from "../../types/IMovie";
const MovieCard = ({ el }: { el:IMovie }): JSX.Element => {
  return (
    <div className="movieCard">
      <div className="movieCard__img">
        <img
          src={`https://www.themoviedb.org/t/p/w220_and_h330_face/${el.poster_path}`}
          alt=""
        />
      </div>
      <div className="movieCard__title">
        <div className="movieCard__title-block">
          <span>
            <AiOutlineClockCircle size={"14px"} /> 2h 2m
          </span>
          <span>
            <GoHeartFill className="icon" />
          </span>
        </div>
        <h2>{el.title.slice(0, 10)}</h2>
        <div className="movieCard__title-wrap">
          <p>Animation</p>
          <p>Action</p>
          <p>Adventure</p>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
