import React from 'react'
// import logo from './logo.svg';
import './App.css';

let baseClass = "mdb-app";
let apiKey = "6ed12e064b90ae1290fa326ce9e790ff";
let searchResults = [];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResults: []
    };
  }

  componentDidMount() {
    const self = this;
    const movieQuery = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key="
    const movieString = movieQuery.concat(apiKey);
    fetch(movieString)
      .then(res => res.json())
      .then(function(data) {
        searchResults = data.results;
        self.setState({ searchResults: searchResults });
      })
      .catch(error => console.log('Error is ', error));
  }

  render() {
    return (
      <div className={baseClass}>
        <header className={`${baseClass}__header`}>
          <h1>The Movie DB</h1>
          <form className={`${baseClass}__search-form`}>
            <input 
              className={`${baseClass}__search-input`}
              placeholder="Search"
            >
            </input>
          </form>
        </header>
        <div className={`${baseClass}__catalogue-container container`}>
          <h3>Popular Movies</h3>
          <div className="row">
            { this.state.searchResults.length > 1 &&
              <>
                {searchResults.map((searchResult, index) =>
                  <div className={`${baseClass}__catalogue-item-container`} key={index}>
                    <img 
                      src={`https://image.tmdb.org/t/p/w500/${searchResult.poster_path}`}
                      className="img-fluid"
                    >
                    </img>
                    <h5>{searchResult.original_title}</h5>
                    <p>{searchResult.release_date}</p>
                    <p>{searchResult.vote_average * 10}%</p>
                  </div>
                )}
              </>
            }
          </div>
          { this.state.searchResults.length > 1 &&
            console.log(this.state.searchResults)
          }
        </div>
      </div>
    )
  }
}

export default App
