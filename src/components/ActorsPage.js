import React, { useEffect, useState } from "react";
import ActorModel from '../models/ActorModel';
import ActorCard from './ActorCard';


function ActorsPage(props){
    const {actors, selectedActors}=props;
    const [filter, setFilter]= useState("");

    const actor1= new ActorModel(
        "Daniel", "Day-Lewis","1957-04-29", 
        "https://m.media-amazon.com/images/M/MV5BMjE2NDY2NDc1Ml5BMl5BanBnXkFtZTcwNjAyMjkwOQ@@._V1_UY317_CR13,0,214,317_AL_.jpg", 
        "https://www.imdb.com/name/nm0000358/?ref_=nv_sr_srsg_0#actor" );
    const actor2= new ActorModel("Brad ","Pitt","1963-12-18",
        "https://m.media-amazon.com/images/M/MV5BMjA1MjE2MTQ2MV5BMl5BanBnXkFtZTcwMjE5MDY0Nw@@._V1_UX214_CR0,0,214,317_AL_.jpg",
        "https://www.imdb.com/name/nm0000093/");
    const actor3= new ActorModel ("Tzipi", "Shavit", "1947-01-04", 
        "https://m.media-amazon.com/images/M/MV5BNDM5N2RkNDctNDA3OS00OTgxLWIxODgtNzM2NWEzYTI3MGU4XkEyXkFqcGdeQXVyMjMyMzI4MzY@._V1_UY317_CR161,0,214,317_AL_.jpg",
        "https://www.imdb.com/name/nm0789558/?ref_=nv_sr_srsg_0");

    const actor4= new ActorModel ("David", "Bowie", "1947-01-08", 
        "https://m.media-amazon.com/images/M/MV5BMTQ4NTE3MTYzOF5BMl5BanBnXkFtZTcwNDM4OTcyMg@@._V1_UY317_CR7,0,214,317_AL_.jpg",
        "https://www.imdb.com/name/nm0000309/?ref_=fn_al_nm_1");
    const actor5= new ActorModel ("Michelle", "Pfeiffer", "1958-04-29", 
        "https://m.media-amazon.com/images/M/MV5BMTUzNjI0Njc5NF5BMl5BanBnXkFtZTYwOTM2MjYz._V1_UX214_CR0,0,214,317_AL_.jpg",
        "https://www.imdb.com/name/nm0000201/?ref_=nv_sr_srsg_0");
    
    const list= [actor1,actor2,actor3,actor4, actor5]; 
    
    const filteredResult = list.filter(actor => actor.fName.toLowerCase().includes(filter.toLowerCase().trim()));
    const actorCard= filteredResult.map(actor=> <ActorCard actor={actor}/>);


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
            
                {actorCard}  
            </div> 
        </div>
    )
}

export default ActorsPage