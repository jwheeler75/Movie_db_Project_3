import React, { Component } from "react";
import axios from "axios";
import "./TrendingMovies.css";
import { render } from "@testing-library/react";
import { Route, Link, Switch } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

class TrendingMovies extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let movies = this.props.allData.map((movie, index) => {
      return (
        <div className="movie" key={index}>
          <a href={`/MovieDetails/${movie.id}`}>
            <img
              src={`https://image.tmdb.org/t/p/w154/${movie.poster_path}`}
              alt="Image not Found"
            />
          </a>
          <h3>
            <span>Title: </span>
            {movie.title}
          </h3>
          <h3>
            <span>Released: </span>
            {movie.release_date}
          </h3>
          <h3>
            <span>Popularity: </span>
            {movie.popularity}
          </h3>
        </div>
      );
    });
    return (
      <div>
        <Header />
        <div className="grid-container">{movies}</div>
        <h1>Trending Movies</h1>

        <Footer />
      </div>
    );
  }
}

export default TrendingMovies;
