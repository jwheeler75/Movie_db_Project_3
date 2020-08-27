import React, { Component } from "react";
import "./TrendingMovies.css";
import Header from "./Header";
import Footer from "./Footer";

class TrendingMovies extends Component {
  render() {
    let trendingMovies = [...this.props.allData];
    let movies = trendingMovies.map((movie, index) => {
      if (trendingMovies[index].title.length > 40) {
        let substringTitle = trendingMovies[index].title.substr(0, 40);
        let ellipse = "...";
        movie.title = substringTitle + ellipse;
      }
      let releaseYear = trendingMovies[index].release_date.substr(0, 4);
      movie.release_date = releaseYear;

      return (
        <div className="movie" key={index}>
          <a href={`/MovieDetails/${movie.id}`}>
            <img
              src={
                movie.poster_path
                  ? `https://image.tmdb.org/t/p/w154/${movie.poster_path}`
                  : "/image-not-found.png"
              }
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
