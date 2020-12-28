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
    const actor3= new ActorModel ("David", "Bowie", "1947-01-08", 
        "https://m.media-amazon.com/images/M/MV5BMTQ4NTE3MTYzOF5BMl5BanBnXkFtZTcwNDM4OTcyMg@@._V1_UY317_CR7,0,214,317_AL_.jpg",
        "https://www.imdb.com/name/nm0000309/?ref_=fn_al_nm_1");
    
    const list= [actor1,actor2,actor3]; 
    const actorCard= list.map(actor=> <ActorCard actor={actor}/>);
    
    
    return(
        <div>
            <div>{actorCard}</div>
        </div>
    )
}

export default ActorsPage