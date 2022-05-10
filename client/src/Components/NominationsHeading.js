import React from "react";

const NominationsHeading = ({nominations}) => {
  return (
    <>
      <h2 className="home__subHeading home__subHeading--movieResult">
        Nominations
      </h2>
      {nominations.length >= 5 ?
          <p className="home__messageHeading home__messageHeading--nominationsMore">
            You have nominated {nominations.length} movies!!!
          </p>
       : ''}
    </>
  );
};

export default NominationsHeading;
