import MovieCard from "../components/MovieCard";

class MovieModel{
    constructor(plainMovieOrTitle, id, duration, overview, poster ){ 
        if(typeof plainMovieOrTitle=== 'object'){
        this.title= plainMovieOrTitle.title;
        this.id= plainMovieOrTitle.id;
        this.duration= plainMovieOrTitle.duration;
        this.overview= plainMovieOrTitle.overview;
        this.poster= "https://image.tmdb.org/t/p/w500"+plainMovieOrTitle.poster;
        
        } else{
            this.title= plainMovieOrTitle;
            this.id= id;
            this.duration= duration;
            this.overview= overview;
            this.poster= "https://image.tmdb.org/t/p/w500"+poster;
           
        }
    }
}
export default MovieModel