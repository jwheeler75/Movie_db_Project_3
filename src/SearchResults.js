import React, {Component} from "react"
import Header from "./Header"
import { Route, Link, Switch } from "react-router-dom";
import Footer from "./Footer";

class SearchResults extends Component {
    render() {
        let movieSearchResults = this.props.searchResultsArray.map((movie, index) => {
            return (                  
                  <div className="movie" key={index}>
                {/* <input onClick={this.props.getData} type="button" value="Get Trending Movies"></input> */}
                <h3>Title: {movie.title}</h3>
                <h3>Release Date: {movie.release_date}</h3>
                <h3>Popularity: {movie.popularity}</h3>
              </div>
            );
    });
      return (
          <div>
            <form onSubmit={(event) => {
                  event.preventDefault();
                  this.props.getSearchResults(event.target.movie.value)
              }}>
                  <input name='movie' placeholder='Search Movies'/>
                  <button>Search Movies</button>  
              </form>
              {movieSearchResults}
          </div>
      );
    };
  }



export default SearchResults;