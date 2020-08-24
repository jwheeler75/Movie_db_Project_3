import React, {Component} from "react"
import Header from "./Header"
import { Route, Link, Switch } from "react-router-dom";

class HomePage extends Component{
    render() {
        return (
          <div>
            Welcome to the Movie DB Home Page
            <Header />
            <br></br>
            <nav>
              <Link to="/trendingmovies">Trending Movies</Link>
            </nav>
          </div>
        );
    }
}





export default HomePage;