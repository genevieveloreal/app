import React from 'react';
import './movie-info-basic.css';

const baseClass = "mdb-movie-info-basic";

class MovieInfoBasic extends React.Component {
  render() {
    let releaseYear = this.props.releaseDate.substring(0,4);
    let voteAverage = this.props.userRating * 10;
    let durationMins = this.props.duration;
    /* Calculate duration in hours and minutes */
    let hours = Math.floor(durationMins / 60);
    let mins = durationMins % 60;
    hours = hours < 10 ? '0' + hours : hours;
    mins = mins < 10 ? '0' + mins : mins;
    /* End duration in hours and minutes */
    return (
      <div className={baseClass}>
        <p>{releaseYear} - {voteAverage}% User Score</p>
        <p>{hours}h {mins}m</p>
      </div>
    )
  }
}

export default MovieInfoBasic