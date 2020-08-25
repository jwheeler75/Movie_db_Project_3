import React, { Component } from "react";
import Header from "./Header";
import { Route, Link, Switch } from "react-router-dom";
import Footer from "./Footer";
import SearchResults from "./SearchResults";
import "./HomePage.css"

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.getSearchResults = this.getSearchResults.bind(this);
  }

  getSearchResults(searchInput) {
    console.log("homepage", searchInput);
    this.props.getSearchResults(searchInput);
  }

  render() {
    console.log(this.props);
    return (
      <div className="main">
        <div>
          <Header />
        </div>
        <br></br>
        Welcome to the Movie DB Home Page
        <nav>
          <Link to="/trendingmovies">Trending Movies</Link>
          <form
            onSubmit={(event) => {
              event.preventDefault();
              this.props.getSearchResults(event.target.movie.value);
            }}
          >
            <input name="movie" placeholder="Search Movies" />
            <button>Search Movies</button>
          </form>
        </nav>
        <div className="extraDiv"></div>
        <div className="footer">
        <Footer/>
        </div>
      </div>
    );
  }
}

export default HomePage;
