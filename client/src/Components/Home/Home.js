import React from 'react';
import './Home.scss';
import star from '../../Assets/icons/star.svg';
import useSearchForm from '../../useSearchForm';

const Home = () => {
    const {searchTitle, movieList, movieNotFound, nominations, 
           handleSearch, handleKeyPress, handleSubmit,
           handleAddNominate, handleRemoveNominate} = useSearchForm();
    
    return (
        <section className='home'>
            <h1 className='home__heading'>The Shoppies</h1>
            <form className='home__movieSearch' onSubmit={handleSubmit}>
                <label className='input-label' htmlFor='movieTitle'>Movie title </label>
                <input className='input input--search' name='movieTitle' placeholder='movie title'
                    value={searchTitle} onKeyPress={handleKeyPress}
                    onChange={handleSearch}
                />
                <input className='button button--search' type='submit' value='Search'/>
            </form>
            <div className='home__movieInfo'>
                <div className= 'home__movieResult'>
                    {movieNotFound || movieList <=0?
                    <div className='home__messageHeading'>
                        <p>
                            {movieNotFound? `No movie found for "${searchTitle}"`: `Search any movie!!`}
                        </p>
                    </div>
                    : ''
                    }
                    {movieList.length > 0 ?
                    <div>
                        <h2 className='home__subHeading home__subHeading--movieResult'>Results for "{searchTitle}"</h2>
                        <ul className='home__list'>
                            {movieList.map(movie =>
                                <li className='home__item' key={movie.imdbID}>
                                    <span className='home__movieName'>
                                        <img className='home__starIcon' src={star} alt='star icon'/>
                                        {movie.Title} ({movie.Year})
                                    </span>
                                    <button className='button button--nominate' 
                                            disabled={movie.nominated}
                                            onClick={(event) => handleAddNominate(event, movie)}>
                                            Nominate
                                    </button>
                                </li>
                            )}
                        </ul>
                    </div>: ''
                    }
                </div>
                
                <div className='home__movieResult'>
                    {nominations.length > 0?
                    <div>
                        <h2 className='home__subHeading home__subHeading--movieResult'>
                            Nominations
                        </h2>
                        {nominations.length >= 5? 
                        <div className='home__messageHeading home__messageHeading--nominationsMore'>
                            <p>You have nominated {nominations.length} movies!!!</p>
                        </div>
                        : ''
                        }
                        <ul className='home__list'>
                            {nominations.map(nomination =>
                                <li className='home__item' key={nomination.imdbID}>
                                    <span className='home__movieName'>
                                        <img className='home__starIcon' src={star} alt='star icon'/>
                                        {nomination.Title} ({nomination.Year})
                                    </span>
                                    <button className='button button--nominate'
                                            onClick={(event) => handleRemoveNominate(event, nomination)}>
                                        Remove
                                    </button>
                                </li>
                            )}
                        </ul>
                    </div>
                    : 
                    <div className='home__messageHeading'>
                        <p> Nominate your favourite movie!! </p>
                    </div>
                    }
                </div>
            </div>
        </section>
    )
}
export default Home;