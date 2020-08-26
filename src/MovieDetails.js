import React, { Component } from "react";
import "./MovieDetails.css";
import { render } from "@testing-library/react";
import { Route, Link, Switch } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

class MovieDetails extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let movieDetails = this.props.allData.id
      return (
        <div className="movie" key={index}>
          <img
            // src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            src={
              "https://image.tmdb.org/t/p/w500/sy6DvAu72kjoseZEjocnm2ZZ09i.jpg"
            }
            alt="Image not Found"
          />
          <h3>Title: {movie.title}</h3>
          <h3>Release Date: {movie.release_date}</h3>
          <h3>Movie Overview: {movie.overview}</h3>
          <h3>Original Language: {movie.original_language}</h3>
          <h3>Original Title: {movie.original_title}</h3>
          <h3>Popularity: {movie.popularity}</h3>
        </div>
      );
    });
    return (
      <div>
        <Header />
        <div>{movies}</div>
        <h1>Movie Details</h1>

        <Footer />
      </div>
    );
  }
}




export default MovieDetails;
