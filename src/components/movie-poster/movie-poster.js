import React from 'react';
import MissingImage from '../../../src/missing_image.jpg';
import './movie-poster.css';

const baseClass = "mdb-movie-poster";

class MoviePoster extends React.Component {
  render() {
    var divStyle = {
        backgroundImage: 'url(' + 'https://image.tmdb.org/t/p/w400/' + this.props.background + ')',
    };

    var missingImage = {
      backgroundImage: 'url(' + MissingImage + ')',
    };

    return (
      <div className={baseClass} style={this.props.background? divStyle : missingImage}>
      </div>
    )
  }
}

export default MoviePoster