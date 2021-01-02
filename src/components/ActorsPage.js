import React, { useEffect, useState } from "react";
import ActorModel from '../models/ActorModel';
import ActorCard from './ActorCard';
import axios from 'axios';


function ActorsPage(props){
    const {actors, selectedActors}=props;
    const [filter, setFilter]= useState("");
    const [ actorsData, setActorsData]= useState([]);
    const [movieSearch, setMovieSearch]= useState("love");
 
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

    useEffect(()=> {
        axios.get
        ("https://api.themoviedb.org/3/search/movie?api_key=326d3ce51f35b38c9fc46926dc55bfaa&language=en-US&query="+(movieSearch)).then(res=>{
                let moviesIDs= res.data.results.map(movie=> movie.id);
                let listOfMovies= moviesIDs.map(movieID => axios.get
                    ("https://api.themoviedb.org/3/movie/"+movieID+"?api_key=326d3ce51f35b38c9fc46926dc55bfaa&language=en-US").then(res=>{
                console.log(res.data.title)
              
            }));   
        });
    },[]);
    
    return(
        <div id="main"> 
            <h1>Actors</h1>
            <div className="navbar-nav row">
                <form>
                    <label htmlFor="filter" >Filter It! </label>
                    <input type="text"  id="filter" value={filter} onChange={(e)=> setFilter(e.target.value)}/>
                </form>
            </div>
            
            <div className="container">
            
                {actorCard!== undefined?  actorCard: "loading..." }  
            </div> 
        </div>
    )
}

export default ActorsPage