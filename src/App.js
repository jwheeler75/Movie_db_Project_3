import React, { Component } from "react";
import Axios from "axios";
import "./App.css";
import { render } from "@testing-library/react";
import TrendingMovies from "./TrendingMovies";
import HomePage from "./HomePage"
import SearchResults from "./SearchResults"
import { Route, Link, Switch } from "react-router-dom"
import Header from "./Header"
class App extends Component {
  constructor() {
    super();

    this.state = {
      allData: [],
    };
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

  render() {
    return (
      <div className="App">
        <header>
          
        </header>
        <div>
          
        </div>
        <main>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route
              path="/trendingmovies"
              render={(routerProps) => (
                <TrendingMovies {...this.state} {...routerProps} />
              )}
            />
          </Switch>
        </main>

        
      </div>
    );
  }
}
export default App;
