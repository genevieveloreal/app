import React from 'react'
import MovieHeader from '../../components/movie-header/movie-header';
import MoviePoster from '../../components/movie-poster/movie-poster';
import MovieInfoBasic from '../../components/movie-info-basic/movie-info-basic';
import MovieOverview from '../../components/movie-overview/movie-overview';
import WhiteArrowBackIcon from '../../../src/images/arrow_back_white.png';
import './movie-view.css';

const baseClass = "mdb-single-view";
const apiKey = "api_key=" + process.env.REACT_APP_MOVIE_DB_API_KEY;
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
    let apiRequest = searchQuery + this.props.match.params.id + '?' + apiKey;
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
      <>
        { this.state.searchResults &&
          <MovieHeader background={searchResults.backdrop_path}>
            <button
              onClick={this.navigateBack}
              className="mdb-back-button"
            >
              <img src={WhiteArrowBackIcon} alt="Go back"></img>
              Go Back
            </button>
          </MovieHeader>
        }
        <div className={baseClass}>
          { this.state.searchResults && 
            <div className="container">
              <div className={`${baseClass}__header-details`}>
                  <MoviePoster background={searchResults.poster_path}/>
                <div className={`${baseClass}__header-info`}>
                  <h2 className="bold">{searchResults.original_title}</h2>
                  <MovieInfoBasic 
                    releaseDate={searchResults.release_date}
                    userRating={searchResults.vote_average}
                    duration={searchResults.runtime}
                  />
                </div>
              </div>
              <hr></hr>
              <MovieOverview content={searchResults.overview}/>
            </div>
          }
        </div>
      </>
    )
  }
}
export default Movie