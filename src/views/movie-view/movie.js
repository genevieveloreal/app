import React from 'react'
import './movie-view.css';

const apiKey = "api_key=6ed12e064b90ae1290fa326ce9e790ff";
let searchResults = [];
let searchQuery = "http://api.themoviedb.org/3/movie/"

class Movie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResults: null
    };
  }
  
  componentDidMount() {
    let path = window.location.pathname;
    let urlRoute = "movie/";
    let id = path.replace(urlRoute, '').substring(1);
    let apiRequest = searchQuery + id + '?' + apiKey;
    this.fetchData(apiRequest);
  }

  fetchData(apiRequest) {
    const self = this;
    fetch(apiRequest)
    .then(res => res.json())
    .then(function(data) {
      searchResults = data;
      self.setState({ searchResults: searchResults });
    })
    .catch(error => console.log('Error is ', error));
  }

  render() {
    return (
      <div>
        <h1>Test</h1>
        { this.state.searchResults && 
          <p>{searchResults.original_title}</p>
        }
      </div>
    )
  }
}
export default Movie