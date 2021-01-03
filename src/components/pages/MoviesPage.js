import { Container } from "react-bootstrap";
import SearchBox from "../SearchBox";
import MovieCard from '../MovieCard'
import MovieModel from '../../models/MovieModel'
import "./MoviesPage.css";
import React, { useEffect, useState } from "react";
import axios from 'axios';



function MoviesPage() {
    const [movieSearch, setMovieSearch]= useState("");
    const [movies, setMovies] = useState([]);
    const [searchText, setSearchText] = useState("");
    const [results, setResults] = useState([]);
    const [resultsFull, setResultsFull] = useState([]);

    function searchTextChange(newSearchText) {
        setSearchText(newSearchText);
        // update results if search is not empty
        if (newSearchText) {
            axios.get
            ("https://api.themoviedb.org/3/search/movie?api_key=326d3ce51f35b38c9fc46926dc55bfaa&language=en-US&query=" + newSearchText)
            .then(res => {
                setResults(res.data.results.map(result => result.title));
                setResultsFull(res.data.results); // give me 20 movies with all details (obj array)
                console.log(resultsFull);
                let moviesIDs= res.data.results.map(movie=> movie.id);
                let listOfMovies= moviesIDs.map(movieID => axios.get
                    ("https://api.themoviedb.org/3/movie/"+ movieID 
                    +"/credits?api_key=326d3ce51f35b38c9fc46926dc55bfaa&language=en-US")
                    .then(res=>{
                        console.log(res.data.cast[0])
                }));   
            });        
        } else {
            setResults([]);
        }
    };        

    //("https://api.themoviedb.org/3/movie/"+resultsFull[index].id+"?api_key=326d3ce51f35b38c9fc46926dc55bfaa&language=en-US")
    function addMovie(index) {
        setMovies(movies.concat(new MovieModel(
            resultsFull[index].title,
            resultsFull[index].id,
            resultsFull[index].run_time,
            resultsFull[index].overview,
            resultsFull[index].poster_path
            )));
        console.log(movies);
        setSearchText("");
        setResults([]);
    };
    const moviesView = movies.map((movie) => <MovieCard movie={movie}/>)
    
    return(
        <div id="main">
            <div>
                <SearchBox placeholder="Add movie..." value={searchText} onSearchChange={searchTextChange}
                    results={results} onResultSelected={addMovie}/>
            </div>
            <div>
                <h1> Your movies list : </h1>
                {moviesView} 
            </div>
        </div>
        
    )   
}
export default MoviesPage;