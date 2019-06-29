import React from 'react';
import './App.css';

const baseClass = "mdb-app";
const apiKey = "&api_key=6ed12e064b90ae1290fa326ce9e790ff";
let searchResults = [];
let searchQuery = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResults: [],
      searchTerm: ''
    };
    this.handleSearch = this.handleSearch.bind(this);
  }

  componentDidMount() {
    let apiRequest = searchQuery.concat(apiKey);
    this.fetchData(apiRequest);
  }

  handleSearch(event) {
    let updatedSearchQueryString = event.target.value;
    this.setState({searchTerm: updatedSearchQueryString});
    searchQuery = `https://api.themoviedb.org/3/search/movie?query=${updatedSearchQueryString}`;
    let apiRequest = searchQuery.concat(apiKey);
    this.fetchData(apiRequest);
  }

  fetchData(apiRequest) {
    const self = this;
    fetch(apiRequest)
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
              onKeyUp={this.handleSearch}
              className={`${baseClass}__search-input`}
              placeholder="Search"
            >
            </input>
          </form>
        </header>
        <div className={`${baseClass}__catalogue-container container`}>
          <h3>Popular Movies</h3>
          <div className="row">
            { this.state.searchResults && this.state.searchResults.length > 0 ?
              <>
                {searchResults.map((searchResult, index) =>
                  <div className="col-lg-4 col-sm-6 col-xs-12" key={index}>
                    <div className={`${baseClass}__catalogue-item-container`}>
                      <div className={`${baseClass}__catalogue-image-container`}>
                        <img 
                          src={`https://image.tmdb.org/t/p/w500/${searchResult.poster_path}`}
                          className="img-fluid"
                        >
                        </img>
                      </div>
                      <h5>{searchResult.original_title}</h5>
                      <p>{searchResult.release_date}</p>
                      <p>{searchResult.vote_average * 10}%</p>
                    </div>
                  </div>
                )}
              </>
              :
              <>
                <p>I've a feeling we're not in Kansas anymore...</p>
                <br/>
                <p>Try another search term to find your favourite movie.</p>
              </>
            }
          </div>
          { this.state.searchResults &&
            console.log(this.state.searchResults)
          }
        </div>
      </div>
    )
  }
}

export default App
