
import {useState, useEffect} from 'react';
import axios from 'axios';
const OMDB_API = process.env.REACT_APP_OMDB_API;

const useSearchForm = () =>{
    const [searchTitle, setSearchTitle] = useState('');
    const [movieList, setMovieList] = useState([]);
    const [movieNotFound, setMovieNotFound] = useState(false)
    const [nominations, setNominations] = useState([]);

// useEffect to get nominations from localStorage:

    useEffect(() =>{
        let nominationslist = JSON.parse(window.localStorage.getItem('nominations'));
        if(nominationslist) setNominations([...nominationslist])
    }, []);

// useEffect to set nominations in localStorage:

    useEffect(() =>{
        window.localStorage.setItem('nominations', JSON.stringify(nominations));
    }, [nominations])
    
// search input onChange event handler:

    const handleSearch = (event) => {
        setSearchTitle(event.target.value);
    }

// get movie list when enter is pressed:

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            event.preventDefault();
            getMovieList(searchTitle);
        }
    }

// handle search submit:

    const handleSubmit = (event) =>{
        event.preventDefault();
        getMovieList(searchTitle);
    }
// add nominate handler:

    const handleAddNominate = (event, nominatedMovie) =>{
        // console.log(movie);
        setNominations(prevArray => [...prevArray, nominatedMovie])
        
        let movieListUpdated = movieList.map(movie => 
            movie.imdbID === nominatedMovie.imdbID?{...movie, nominated: true}: {...movie} 
        );
        setMovieList(movieListUpdated)
    }

// remove nominate handler:

    const handleRemoveNominate = (event, nominatedMovie) =>{
        let newNominateList = nominations.filter(nomination => nomination.imdbID !== nominatedMovie.imdbID );
        setNominations([...newNominateList]);
        // window.localStorage.setItem('nominations', JSON.stringify(nominations));
        let movieListUpdated = movieList.map(movie => 
            movie.imdbID === nominatedMovie.imdbID?{...movie, nominated: false}: {...movie} 
        );
        setMovieList(movieListUpdated)
    }

// axios request to get movieList:

    const getMovieList = (search) => {
        // console.log(search)
        axios
            .get(`http://www.omdbapi.com/?apikey=${OMDB_API}&s=${search}`)
            .then(response => {
                if(response.data.Search){
                    let ids = response.data.Search.map(movie => movie.imdbID);

                    // removes the duplicate data by imdbID:

                    let list = response.data.Search.filter(
                                    ({imdbID}, index) => !ids.includes(imdbID, index+1));
                    let movieList = list.map(movie => ({...movie, nominated: false}));
                    setMovieList([...movieList]);
                    setMovieNotFound(false);
                } else {
                    setMovieNotFound(true);
                    setMovieList([]);
                };
            })
            .catch(error => console.log('error in movie data', error));
    }
    return {searchTitle, movieList, movieNotFound, nominations, handleSearch, handleKeyPress,
            handleSubmit, handleAddNominate, handleRemoveNominate}
}
export default useSearchForm;