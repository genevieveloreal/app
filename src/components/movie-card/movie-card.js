import React from 'react';
import MovieRatingPercentage from '../movie-rating-percentage/movie-rating-percentage';
import './movie-card.css';
import MissingImage from '../../../src/missing_image.jpg';

const baseClass = "mdb-movie-card";

class MovieCard extends React.Component {
  render() {
    var divStyle = {
        backgroundImage: 'url(' + 'https://image.tmdb.org/t/p/w500/' + this.props.image + ')',
    };
    var missingImage = {
        backgroundImage: 'url(' + MissingImage + ')',
    };
    
    /* Format date */
    let dateBase = this.props.releaseDate;
    const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"];
    let dateYear = dateBase.substring(0, 4);
    let dateMonth = dateBase.substring(5, 7);
    dateMonth = parseInt(dateMonth, 10);
    let monthNamed = monthNames[dateMonth];
    /* Format date */

    return (
        <a href={`/movie/${this.props.id}`} className="mdb-movie-link" id={this.props.id}>
            <div className={baseClass}>
                <div 
                    className={`${baseClass}__image`}
                    style={this.props.image ? divStyle : missingImage}
                >
                    <MovieRatingPercentage movieRating={this.props.movieRating}/>
                </div>
                <div className={`${baseClass}__details`}>
                    <h5 className={`${baseClass}__title`}>{this.props.movieTitle}</h5>
                    <p>{monthNamed ? monthNamed : ''} {dateYear ? dateYear : ''}</p>
                </div>
            </div>
        </a>
    )
  }
}

export default MovieCard