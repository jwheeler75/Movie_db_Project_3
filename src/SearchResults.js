import React, { Component } from "react";
import Header from "./Header";
import Footer from "./Footer";
import "./App.css";
import { Link } from "react-router-dom";

class SearchResults extends Component {
  render() {
    let searchedMovies = [...this.props.searchResultsArray];
    let movieSearchResults = searchedMovies.map((movie, index) => {
      if (searchedMovies[index].title.length > 40) {
        let substringTitle = searchedMovies[index].title.substr(0, 40);
        let ellipse = "...";
        movie.title = substringTitle + ellipse;
      }
      let releaseYear = searchedMovies[index].release_date.substr(0, 4);
      movie.release_date = releaseYear;

      return (
        <div className="movie" key={index}>
          <Link to={`/MovieDetails/${movie.id}`}>
            <img
              src={
                movie.poster_path
                  ? `https://image.tmdb.org/t/p/w154/${movie.poster_path}`
                  : "/image-not-found.png"
              }
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
    });

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
