import React, { Component } from "react";
import Header from "./Header";
import Footer from "./Footer";
import "./App.css";
import { Route, Link, Switch, withRouter } from "react-router-dom";


class SearchResults extends Component {
  render() {
    let movieSearchResults = this.props.searchResultsArray.map(
      (movie, index) => {
        return (
          <div className="movie" key={index}>
            <Link to={`/MovieDetails/${movie.id}`}>
              <img
                src={`https://image.tmdb.org/t/p/w154/${movie.poster_path}`}
                alt="Image not Found"
              />
            </Link>
            <h3>
              <p>(click image for more details)</p>
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
      }
    );

    return (
      <div>
        <div>
          <Header />
        </div>
        <div>
          <h1>Search Results</h1>
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
