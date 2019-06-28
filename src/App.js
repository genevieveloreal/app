import React from 'react'
// import logo from './logo.svg';
import './App.css';

let baseClass = "mdb-app";
let apiKey = "6ed12e064b90ae1290fa326ce9e790ff";
let movieResults = [];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // error: null,
      // isLoaded: false,
      movieResults: []
    };
  }

  componentDidMount() {
    var movieQuery = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key="
    var movieString = movieQuery.concat(apiKey);
    fetch(movieString)
      .then(res => res.json())
      .then(function(data) {
        movieResults = data.results;
        console.log(movieResults);
      })
      .catch(error => console.log('Error is ', error));
  }

  render() {
    return (
      <div className={baseClass}>
        <header className={`${baseClass}__header`}>
          <h1>The Movie DB</h1>
        </header>
        <form className={`${baseClass}__search-form`}>
          <input 
            className={`${baseClass}__search-input`}
            placeholder="Search"
          >
          </input>
        </form>
        <div className={`${baseClass}__movie-container`}>
        </div>
      </div>
    )
  }
}

export default App
