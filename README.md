# The Movie Db App

## Project Overview
Project 3 is 3rd of 4 projects required in jdr-0622 SEI (Software Engineering Immersive) course by General Assembly as contracted for reskilling of displaced John Deere IT personnel.  Course for this cohort started 06/22/2020, hence the jdr-0622 course ID.  Exact project was determined by students within assignment prompt and as approved by advisor.

Project team for this project was selected by GA instructors.
Project Team Memebers:  
  Marc Wright (GA Instructor Lead as team advisor)
  Mark Meloy (student)
  Jason Wheeler (student)
  Darryl Grissom (student)

Hence the "MJD LLC" on app.

## Project Description
This is a full stack React Router JS app.  Uses The Movie Data Base (TMDB) API to list trending movies and to search by user inputs. Two different API endpoints are used to do this.  Deatils can be seen for both trending or search results by clicking on a individual movie image.

## Technologies Used
React JS, React Router, Axios, React-Dom, and React-Router-Dom. Flex Box and Flex Grid for CSS.

## API
- https://developers.themoviedb.org/


## Project Links

- GitHub Repo URL https://github.com/jwheeler75/Movie_db_Project_3
- Heroku Production URL https://movie-db-project-3.herokuapp.com/

## Wireframes and Flowcharts

This is the wireframe for the app.

- https://github.com/jwheeler75/Movie_db_Project_3/blob/master/planning/Movie_db_wire_diagram_2.drawio.pdf
- https://github.com/jwheeler75/Movie_db_Project_3/blob/master/planning/Movie_Db_flowchart.drawio.pdf


## User Stories
- As a user, I want a button to see trending movies.
- As a user, I want to search for movies by my inputs.
- As a user, I want a button to see search results.
- As a user, I want the movie poster for any results (trending or search).
- As a user, I want basic information about each movies on the results (trening or search).
- As a user, I want to click on any movie poster and see a detail screen for that movie.
- As a user, I want detail movie screen to have a larger image of the movie poster than results pages.
- As a user, I want detail movie screen to have overview, original title and original language in addition to basic info on results pages.
- As a user, I want a button to go back to home page from all pages.
- As a user, I want a page title (ex. "Trending") on each page.
- As a user, I want the entire app to have a consistent look and feel.
- As a user, I want clickable elements to change color/highlight when I hover over them.
- As a user, Marc wants an alternate "flat-tire" image to display when a movie poster is not available in the API.
    

### MVP/PostMVP

#### MVP
- Create homepage with 2 React routes to a Trending Movies page and a Search Results page
- Call to API to get data
- Enter user inputs to guide search API endpoint call
- Render data for the max 20 movies returned from Trending Movies or for Serrach Results
- Allow user to interact with all pages.

#### PostMVP

- Create a detail page which displays any movie whose image is clicked on results pages
- Handle/limit extra long movie titles.

## Code Snippet

This code sets the maxium number of characters for the movie title to 40 and adds the ... to the end of the first 40 characters.  The second strips off the month and date from the realease year.

let trendingMovies = [...this.props.allData];
    let movies = trendingMovies.map((movie, index) => {
      if (trendingMovies[index].title.length > 40) {
        let substringTitle = trendingMovies[index].title.substr(0, 40);
        let ellipse = "...";
        movie.title = substringTitle + ellipse;
      }
      let releaseYear = trendingMovies[index].release_date.substr(0, 4);
      movie.release_date = releaseYear;


## Issues and Resolutions

**ERROR**: Getting the same title and year for both the trending and search results.                              
**RESOLUTION**: We mapping over the the trending data array and not the search array data.  Simple copy and paste snag.
