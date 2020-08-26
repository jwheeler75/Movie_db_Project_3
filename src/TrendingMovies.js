import React, { Component } from "react";
import "./TrendingMovies.css";
import Header from "./Header";
import Footer from "./Footer";

class TrendingMovies extends Component {
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
        <Header />
        <h1>Trending Movies</h1>
        <div className="grid-container">{movies}</div>

        <Footer />
      </div>
    );
  }
}

export default TrendingMovies;
