import React, { Component } from "react";
import Header from "./Header";
import { Route, Link, Switch } from "react-router-dom";
import Footer from "./Footer";
import SearchResults from "./SearchResults";
import "./HomePage.css";

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
        <h1>Welcome to the Movie DB Home Page</h1>
        <nav className="align-links">
          
            <Link to="/trendingmovies">Trending Movies</Link>
          
          <form
            onSubmit={(event) => {
              event.preventDefault();
              this.props.getSearchResults(event.target.movie.value);
            }}
          >
            <br></br>
            <input name="movie" placeholder="Search Movies" />
            <button>Search Movies</button>
          </form>
        </nav>
        <div className="extraDiv"></div>
        <div className="footer">
          <Footer />
        </div>
      </div>
    );
  }
}

export default HomePage;
