import React from 'react';
import HeroHeader from './components/hero-header/hero-header';
import MovieCard from './components/movie-card/movie-card';
import MovieCatalogueEmpty from './components/movie-catalogue-empty/movie-catalogue-empty';
import Footer from './components/footer/footer';
import SearchIcon from './search_icon.png';
import './App.css';

const baseClass = "mdb-app";
const apiKey = "&api_key=" + process.env.REACT_APP_MOVIE_DB_API_KEY;
let searchResults = [];
let searchQuery = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResults: [],
      searchTerm: '',
      previousSearch: ''
    };
    this.handleSearch = this.handleSearch.bind(this);
  }

  componentDidMount() {
    let previousSearch = localStorage.getItem('searchquery');
    let apiRequest = '';
    if (previousSearch) {
      searchQuery = `https://api.themoviedb.org/3/search/movie?query=${previousSearch}`;
      apiRequest = searchQuery.concat(apiKey);
      this.setState({
        searchTerm: previousSearch,
        previousSearch: previousSearch
      });
    } else {
      apiRequest = searchQuery.concat(apiKey);
    }
    this.fetchData(apiRequest);
  }

  handleSearch(event) {
    let updatedSearchQueryString = event.target.value;
    this.setState({searchTerm: updatedSearchQueryString});
    searchQuery = `https://api.themoviedb.org/3/search/movie?query=${updatedSearchQueryString}`;
    localStorage.setItem("searchquery", updatedSearchQueryString);
    this.setState({
      previousSearch: updatedSearchQueryString
    });
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

        <HeroHeader>
          <div className={`${baseClass}__search-input-container`}>
            <img 
              className={`${baseClass}__search-input-icon`}
              src={SearchIcon}
              alt="search icon"
            />
            <input 
              onKeyUp={this.handleSearch}
              className={`${baseClass}__search-input`}
              placeholder={this.state.previousSearch ? this.state.previousSearch : 'Search'}
            >
            </input>
          </div>
        </HeroHeader>

        <div className={`${baseClass}__catalogue-container container`}>
          <h3 className="bold">
            {this.state.searchResults ? 'Search results' : 'Popular Movies'}
          </h3>
          <div className="row">

            {/* Start search results
            If search results are returned, loop through results
            and if no search results returned, render empty catalogue message
            */}
            { this.state.searchResults && this.state.searchResults.length > 0 ?
              <>
                {searchResults.map((searchResult, index) =>
                  <div className="col-lg-4 col-sm-6 col-xs-6" key={index}>
                      <MovieCard
                        movieTitle={searchResult.title}
                        image={searchResult.poster_path}
                        movieRating={searchResult.vote_average}
                        releaseDate={searchResult.release_date}
                        id={searchResult.id}
                      />
                  </div>
                )}
              </>
              :
              <MovieCatalogueEmpty/>
            }
            {/* End Search Results */}

          </div>
          <Footer/>
        </div>
      </div>
    )
  }
}

export default App
