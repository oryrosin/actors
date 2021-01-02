import "./MovieCard.css";
function MovieCard(props) {
    const {movie}= props;
    
    return(
        <div className= "container">
            <div className="movie-card">
                <div calssName="col1">
                    <h1>{movie.title}</h1>
                    <p>Movie ID on TMDB :  {movie.id}</p>
                    <p>Duration :  {movie.duration}  minutes</p>
                    <p>Overview:<br></br>{movie.overview}</p>
                </div>
                <div calssName="col2">
                    <img className="movie-card-image" src={movie.poster}></img>
                </div>
            </div>
        </div>    
    )   
}

export default MovieCard