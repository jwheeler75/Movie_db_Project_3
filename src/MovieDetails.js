import React, { Component } from "react";
import "./MovieDetails.css";
import Header from "./Header";
import Footer from "./Footer";


class MovieDetails extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let combinedResults = [...this.props.allData, ...this.props.searchResultsArray]
    console.log(combinedResults)
    let movie = combinedResults.find((movie, index) => {
      return movie.id == this.props.match.params.id
      
    });
    console.log(movie)

    if (movie) {
      
    
      return (
        <div>
          <Header />
          <div className="movie">
            <h1>Movie Details</h1>
            <img
              src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                 
              alt="Image not Found"
            /> 
            
            <h3>Title: {movie.title}</h3>
            <h3>Release Date: {movie.release_date}</h3>
            <h3>Movie Overview: {movie.overview}</h3>
            <h3>Original Language: {movie.original_language}</h3>
            <h3>Original Title: {movie.original_title}</h3>
            <h3>Popularity: {movie.popularity}</h3>
                </div>

          <Footer />
        </div>
      );
    } else {return (
      <div>
        <Header />
        <div className="movie">
          <h1>Movie Details</h1>
          
        </div>

        <Footer />
      </div>
    );
      
    }
  }
}




export default MovieDetails;