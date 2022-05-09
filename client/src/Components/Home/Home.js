import React from "react";
import "./Home.scss";
import useSearchForm from "../../useSearchForm";
import SearchForm from "../SearchForm";
import MovieResult from "../MovieResult";
import Nominations from "../Nominations";

const Home = () => {
  const {
    searchTitleTemp,
    searchTitle,
    movieList,
    movieNotFound,
    nominations,
    handleSearch,
    handleKeyPress,
    handleSubmit,
    handleAddNominate,
    handleRemoveNominate,
  } = useSearchForm();
  
  return (
    <section className="home">
      <h1 className="home__heading">The Shoppies</h1>
      <SearchForm searchTitleTemp={searchTitleTemp} handleSearch={handleSearch} handleKeyPress={handleKeyPress} handleSubmit={handleSubmit}/>
      <div className="home__movieInfo">
        <MovieResult
          movieList={movieList}
          movieNotFound={movieNotFound}
          searchTitle={searchTitle}
          handleAddNominate={handleAddNominate}
        />
        <Nominations nominations={nominations} handleRemoveNominate={handleRemoveNominate}/>
      </div>
    </section>
  );
};
export default Home;
