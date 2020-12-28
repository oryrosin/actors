

function ActorCard(props){
    const {actor}= props;
    
    return (
    <div className="container">    
    <div className="card" >
        <img className="card-img-top" src={actor.image} alt="Card "/>
        <div className="card-body">
            <h4 className="card-title">{actor.fName +" "+ actor.lName}</h4>
            <p className="card-text">Some example text.</p>

        </div>
    </div>
    </div>
    
        // <div className="card">
        //     <img src={actor.image} alt=""></img>
        // </div>
        
      );
}
export default ActorCard