import React, { Component } from "react";
import Axios from "axios";
import "./App.css";
import { render } from "@testing-library/react";
import TrendingMovies from "./TrendingMovies";

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
        <TrendingMovies {...this.state} />
      </div>
    );
  }
}
export default App;
