import React, { useEffect, useState } from "react";
import ActorModel from '../../models/ActorModel';
import ActorCard from '../ActorCard';
import axios from 'axios';

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
        </div>
    )
}

export default ActorsPage
