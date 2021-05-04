import React from 'react';
import {useState} from 'react';
import axios from 'axios';
import './Home.scss';

const Home = () =>{
    const [searchTitle, setSearchTitle] = useState(''); 
    const [movieList, setMovieList] = useState([]);
    const handleSearch = (event) =>{
        setSearchTitle(event.target.value);
    }
    const handleKeyPress = (event) =>{
        if (event.key === 'Enter') {
            event.preventDefault();
            console.log('do validate');
            getMovieList(searchTitle);
        }
    }
    const getMovieList = (search) =>{
        console.log(search)
        axios
            .get(`http://www.omdbapi.com/?apikey=4bb50978&s=${search}`)
            .then(response =>{
                console.log(response.data.Search);
                setMovieList([...response.data.Search])
            })
            .catch(error => console.log('error in movie data', error));
    }
    console.log(movieList);
    return(
        
        <section className='home'>
            <h1 className='home__heading'>The Shoppies</h1>
            <form className='home__movieSearch'>
                <label className='input-label' htmlFor='movieTitle'>Movie title </label>
                <input className='input input--search' name='movieTitle'  placeholder='movie title'
                    value={searchTitle} onKeyPress={handleKeyPress}
                    onChange={handleSearch}
                />
            </form>
            <div className='home__movieInfo'>
                {movieList.length > 0? 
                <div className='home__movieResult'>
                    <h2 className='home__subHeading home__subHeading--movieResult'>Results for "{searchTitle}"</h2>
                    <ul className='home__list'>
                    {movieList.map(movie =>
                        <li className='home__item' key={movie.imdbID}>
                            {movie.Title} ({movie.Year})
                            <button className='button button--nominate'>Nominate</button>
                        </li>
                    )
                    }
                    </ul>
                </div>
                : 
                <div className='home__movieResult'>
                    <h2 className='home__subHeading'>Search for a movie</h2>
                </div>
                }
                <div className='home__nominations'>
                    <h2 className='home__subHeading home__subHeading--movieResult'>
                        Nominations
                    </h2>
                </div>
            </div>
        </section>
    )
}
export default Home;