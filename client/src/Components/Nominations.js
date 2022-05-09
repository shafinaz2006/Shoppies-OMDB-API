import React from "react";
import MovieName from "./MovieName";
import NominationsHeading from "./NominationsHeading";

const Nominations = ({nominations, handleRemoveNominate}) => {
  return (
    <div className="home__movieResult">
      {nominations.length > 0 ? 
        <>
          <NominationsHeading nominations={nominations}/>
          <ul className="home__list">
            {nominations.map(nomination => <MovieName key={nomination.imdbID} movie={nomination} buttonName='Remove' handleOnClick={handleRemoveNominate} />)}
          </ul>
        </>
      : 
        <div className="home__messageHeading">
          <p> Nominate your favourite movie!! </p>
        </div>
      }
    </div>
  );
};

export default Nominations;
