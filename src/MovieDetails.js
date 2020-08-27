import React, { Component } from "react";
import "./MovieDetails.css";
import Header from "./Header";
import Footer from "./Footer";

class MovieDetails extends Component {
  render() {
    let combinedResults = [
      ...this.props.allData,
      ...this.props.searchResultsArray,
    ];
    console.log(combinedResults);
    let movie = combinedResults.find((movie, index) => {
      return movie.id == this.props.match.params.id;
    });
    console.log(movie);

    if (movie) {
      return (
        <div>
          <Header />
          <div className="movieDetails">
            <h1>Movie Details</h1>
            <img
              src={
                movie.poster_path
                  ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
                  : "/image-not-found.png"
              }
              alt="Image not Found"
            />
            <h3>
              <span>Title: </span>
              {movie.title}
            </h3>

            <h3>
              <span>Release Date: </span>
              {movie.release_date}
            </h3>
            <h3>
              <span>Movie Overview: </span>
              {movie.overview}
            </h3>
            <h3>
              <span>Original Language: </span>
              {movie.original_language}
            </h3>
            <h3>
              <span>Original Title: </span>
              {movie.original_title}
            </h3>
            <h3>
              <span>Popularity: </span>
              {movie.popularity}
            </h3>
          </div>

          <Footer />
        </div>
      );
    } else {
      return (
        <div>
          <Header />

          <Footer />
        </div>
      );
    }
  }
}

export default MovieDetails;
