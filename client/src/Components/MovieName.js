import React from "react";
import star from "../Assets/icons/star.svg";

const MovieName = ({movie, buttonName, handleOnClick}) => {
  return (
    <li className="home__item" >
      <span className="home__movieName">
        <img className="home__starIcon" src={star} alt="star icon" />
        {movie.Title} ({movie.Year})
      </span>
      <button
        className="button button--nominate"
        disabled={movie.nominated}
        onClick={(event) => handleOnClick(event, movie)}
      >
        {buttonName}
      </button>
    </li>
  );
};

export default MovieName;
