import React, { Component } from "react";
import axios from "axios";
import "./App.css";
import { render } from "@testing-library/react";

class TrendingMovies extends Component {
  constructor() {
    super();
  }

  render() {
    let movies = this.props.allData.map((movie, index) => {
      return (
        <div className="movie" key={index}>
          <h3>Title: {movie.title}</h3>
          <h3>Release Date: {movie.release_date}</h3>
          <h3>Popularity: {movie.popularity}</h3>
        </div>
      );
    });

    return <div className="App">{movies}</div>;
  }
}
export default TrendingMovies;
