import React, { Component } from "react";
import axios from "axios";
import "./App.css";
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
          <h3>Title: {movie.title}</h3>
          <h3>Release Date: {movie.release_date}</h3>
          <h3>Popularity: {movie.popularity}</h3>
        </div>
      );
    });
    return (
      <div>
        <Header />
        <h1>Trending Movies</h1>
        <div className="App">{movies}</div>
        <Footer />
      </div>
    );
  }
}

export default TrendingMovies;
