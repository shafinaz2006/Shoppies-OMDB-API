import React from "react";

const SearchForm = ({searchTitleTemp, handleSearch, handleKeyPress, handleSubmit}) => {
  return (
    <form className="home__movieSearch" onSubmit={handleSubmit}>
      <label className="input-label" htmlFor="movieTitle">
        Movie title{" "}
      </label>
      <input
        className="input input--search"
        name="movieTitle"
        placeholder="movie title"
        value={searchTitleTemp}
        onKeyPress={handleKeyPress}
        onChange={handleSearch}
      />
      <input className="button button--search" type="submit" value="Search" />
    </form>
  );
};

export default SearchForm;
