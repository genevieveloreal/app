import React from 'react';
import './movie-rating-percentage.css';

const baseClass = "mdb-movie-rating-percentage";

class MovieRatingPercentage extends React.Component {
    render() {
        let ratingPercentage = this.props.movieRating * 10;
        let ratingColour = "";
        if (ratingPercentage > 69) {
            ratingColour = "green";
        } else if (ratingPercentage < 70 && ratingPercentage > 39) {
            ratingColour = "purple";
        } else {
            ratingColour = "pink";
        }
        return (
        <div className={`${baseClass} ${ratingColour}`}>
            {ratingPercentage}%
        </div>
        )
    }
}

export default MovieRatingPercentage