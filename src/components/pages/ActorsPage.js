import React, { useEffect, useState } from "react";
import ActorModel from '../../models/ActorModel';
import ActorCard from '../ActorCard';
import axios from 'axios';
import MovieCard from '../MovieCard'
import SearchBox from "../SearchBox";
import MovieModel from '../../models/MovieModel'
import './ActorsPage.css'

function ActorsPage(){
    const [filter, setFilter]= useState("");
    const [actorsData, setActorsData]= useState([]);
    const [movieSearch, setMovieSearch]= useState("");
    const [movies, setMovies] = useState([]);
    const [searchText, setSearchText] = useState("");
    const [results, setResults] = useState([]);
    const [resultsFull, setResultsFull] = useState([]);
    
    useEffect(()=>{
        axios.get("actors.json").then(res=>{
        const actors= res.data.actors.map(plainActor => new ActorModel(plainActor));
        setActorsData(actors)
        });
    });

    let actorCard;

    if (actorsData !== []) {
        const filteredResult = actorsData.filter(actor => actor.fName.toLowerCase().includes(filter.toLowerCase()) 
        || actor.lName.toLowerCase().includes(filter.toLowerCase()));
        actorCard= filteredResult.map(actor=> <ActorCard actor={actor}/>);
            };

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
            <h1>Actors</h1>
            <div className="navbar-nav row">
                <form>
                    <label htmlFor="filter" > </label>
                    <input type="text" placeholder="Filter'em!" id="filter" value={filter} onChange={(e)=> setFilter(e.target.value)}/>
                </form>
            </div>
            
            <div className="container">
                {actorCard}
            </div> 
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

export default ActorsPage