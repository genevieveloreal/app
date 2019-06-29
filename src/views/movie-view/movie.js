import React from 'react'
import MovieHeader from '../../components/movie-header/movie-header';
import MoviePoster from '../../components/movie-poster/movie-poster';
import MovieInfoBasic from '../../components/movie-info-basic/movie-info-basic';
import MovieOverview from '../../components/movie-overview/movie-overview';
import './movie-view.css';

const baseClass = "mdb-single-view";
const apiKey = "api_key=6ed12e064b90ae1290fa326ce9e790ff";
let searchResults = [];
let searchQuery = "http://api.themoviedb.org/3/movie/"

class Movie extends React.Component {
  constructor(props) {
    super(props);
    this.navigateBack = this.navigateBack.bind(this);
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

  navigateBack(){
    this.props.history.goBack();
  }

  render() {
    return (
      <div className={baseClass}>
        { this.state.searchResults && 
          <div className="container">
            <button onClick={this.navigateBack}>Go Back</button>
            <MovieHeader background={searchResults.backdrop_path}/>
            <MoviePoster background={searchResults.poster_path}/>
            <h2>{searchResults.original_title}</h2>
            <MovieInfoBasic 
              releaseDate={searchResults.release_date}
              userRating={searchResults.vote_average}
              duration={searchResults.runtime}
            />
            <hr></hr>
            <MovieOverview content={searchResults.overview}/>
          </div>
        }
        { this.state.searchResults && 
          console.log(this.state.searchResults)
        }
      </div>
    )
  }
}
export default Movie