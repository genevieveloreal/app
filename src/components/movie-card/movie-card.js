import React from 'react';
import moment from 'moment';
import MovieRatingPercentage from '../movie-rating-percentage/movie-rating-percentage';
import MissingImage from '../../../src/images/missing_image.jpg';
import './movie-card.css';

const baseClass = "mdb-movie-card";

class MovieCard extends React.Component {
  render() {
    let divStyle = {
        backgroundImage: `url(https://image.tmdb.org/t/p/w500/${this.props.image})`
    };

    let missingImage = {
        backgroundImage: 'url(' + MissingImage + ')',
    };
    
    let releaseDate = moment(this.props.releaseDate, 'YYYY-MM-DD').format('MMMM YYYY');

    return (
        <a href={`${process.env.PUBLIC_URL}/movie/${this.props.id}`} className="mdb-movie-link" id={this.props.id}>
            <div className={`${baseClass} fade-in`}>
                <div 
                    className={`${baseClass}__image`}
                    style={this.props.image ? divStyle : missingImage}
                >
                    <MovieRatingPercentage movieRating={this.props.movieRating}/>
                </div>
                <div className={`${baseClass}__details`}>
                    <h5 className={`${baseClass}__title`}>{this.props.movieTitle}</h5>
                    <p>{releaseDate}</p>
                </div>
            </div>
        </a>
    )
  }
}

export default MovieCard