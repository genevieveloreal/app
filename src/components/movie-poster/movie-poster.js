import React from 'react';
import './movie-poster.css';

const baseClass = "mdb-movie-poster";

class MoviePoster extends React.Component {
  render() {
    var divStyle = {
        backgroundImage: 'url(' + 'https://image.tmdb.org/t/p/w400/' + this.props.background + ')',
    };

    return (
      <div className={baseClass} style={divStyle}>
      </div>
    )
  }
}

export default MoviePoster