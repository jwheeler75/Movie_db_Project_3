import React, {Component} from "react"
import Header from "./Header"
import { Route, Link, Switch } from "react-router-dom";
import Footer from "./Footer";
import SearchResults from "./SearchResults";

class HomePage extends Component{
    constructor(props) {
      super(props);
      this.getSearchResults=this.getSearchResults.bind(this);

    }
    getSearchResults (searchInput) {
      console.log("homepage", searchInput)
      this.props.getSearchResults(searchInput)
    }
    render() {
      console.log(this.props)
        return (
          <div>
            <Header />
            <br></br>
            Welcome to the Movie DB Home Page
            <br></br>
            <nav>
              <Link to="/trendingmovies">Trending Movies</Link>
            </nav>
            <nav>
              <SearchResults getSearchResults = {this.getSearchResults}
              searchResults = {this.searchInput} 
              searchResultsArray = {this.props.searchResultsArray}/>

            </nav>
            <Footer />    
          </div>
        );
    }
}





export default HomePage;