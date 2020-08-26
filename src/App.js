import React, { Component } from "react";
import Axios from "axios";
import "./App.css";
import { render } from "@testing-library/react";
import TrendingMovies from "./TrendingMovies";
import HomePage from "./HomePage"
import SearchResults from "./SearchResults"
import { Route, Link, Switch, withRouter } from "react-router-dom"
import Header from "./Header"
import MovieDetails from "./MovieDetails"

class App extends Component {
  constructor() {
    super();

    this.state = {
      allData: [],
      searchInput: "",
      searchResultsArray: [],
    };
    this.getSearchResults=this.getSearchResults.bind(this);
  }

  componentDidMount() {
    this.getData();
  }

  getData() {
    Axios.get(
      "https://api.themoviedb.org/3/trending/movie/day?api_key=4e6272d3a21f96d1387f88fd8d8e1acc"
    ).then((response) => {
      console.log(response.data.results);
      this.setState({
        allData: response.data.results,
      });
    });
  }

  getSearchResults(searchInputFromForm) {
    console.log("getSearchResults")
    let searchInput = searchInputFromForm;
    Axios.get(
      `https://api.themoviedb.org/3/search/movie?api_key=4e6272d3a21f96d1387f88fd8d8e1acc&query=${searchInput}&page=1`
    ).then((response) => {
      console.log(response.data.results);
      this.setState({
        searchInput: searchInput,
        searchResultsArray: response.data.results,
      });
      this.props.history.push("/searchresults");
    });
  }

  render() {
    console.log(this.state);
    return (
      <div className="App">
        <header>
          
        </header>
        <div>
          
        </div>
        <main>
          <Switch>
            <Route exact 
              path="/" 
              render={(routerProps) =>  (
                <HomePage getSearchResults={this.getSearchResults} 
                  searchResultsArray={this.state.searchResultsArray} /> 
              )}
            />

            <Route
              path="/trendingmovies"
              render={(routerProps) => (
                <TrendingMovies {...this.state} {...routerProps} />
              )}
            />  

            <Route 
              path="/searchresults"
              render={(routerProps) => (
                <SearchResults 
                  {...this.state} 
                  {...routerProps} 
                  getSearchResults={this.getSearchResults} />
              )}
            />
            <Route
              path="/MovieDetails/:id"
              render={(routerProps) => (
                <MovieDetails
                { ...this.state }
            {...routerProps}
              />
              )}/>
          </Switch>
        </main>
        

        
      </div>
    );
  }
}
export default withRouter (App);
