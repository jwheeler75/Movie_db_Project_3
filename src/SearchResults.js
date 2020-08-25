import React, { Component } from "react";
import Header from "./Header";
import { Route, Link, Switch } from "react-router-dom";
import Footer from "./Footer";
import "./App.css";

class SearchResults extends Component {
  render() {
    let movieSearchResults = this.props.searchResultsArray.map(
      (movie, index) => {
        return (
          <div className="movie" key={index}>
            <img
              className="Alt"
              src={`https://image.tmdb.org/t/p/w154/${movie.poster_path}`}
              alt="Image not Found"
            />
            <h3>Title: {movie.title}</h3>
            <h3>Release Date: {movie.release_date}</h3>
            <h3>Popularity: {movie.popularity}</h3>
          </div>
        );
      }
    );

    return (
      <div>
        <div>
          <Header />
        </div>
        <div>
          <form
            onSubmit={(event) => {
              event.preventDefault();
              this.props.getSearchResults(event.target.movie.value);
            }}
          >
            <input name="movie" placeholder="Search Movies" />
            <button>Search Movies</button>
          </form>
          <div className="grid-container">{movieSearchResults}</div>
        </div>
        <div>
          <Footer />
        </div>
      </div>
    );
  }
}

export default SearchResults;
