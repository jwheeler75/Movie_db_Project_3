import React, { Component } from "react";
import Header from "./Header";
import Footer from "./Footer";
import "./App.css";

class SearchResults extends Component {
  render() {
    let movieSearchResults = this.props.searchResultsArray.map(
      (movie, index) => {
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
