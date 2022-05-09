import React from "react";
import MovieName from "./MovieName";

const MovieResult = ({
  movieNotFound,
  movieList,
  searchTitle,
  handleAddNominate,
}) => {
  return (
    <div className="home__movieResult">
      {movieNotFound || movieList <= 0 ? (
        <p className="home__messageHeading">
          {movieNotFound
            ? `No movie found for "${searchTitle}"`
            : `Search any movie!!`}
        </p>
      ) : (
        ""
      )}
      {movieList.length > 0 ? (
        <div>
          <h2 className="home__subHeading home__subHeading--movieResult">
            Results for "{searchTitle}"
          </h2>
          <ul className="home__list">
            {movieList.map((movie) => (
              <MovieName
                key={movie.imdbID}
                movie={movie}
                buttonName="Nominate"
                handleOnClick={handleAddNominate}
              />
            ))}
          </ul>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};
export default MovieResult;
