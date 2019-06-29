import React from 'react';
import './movie-header.css';

const baseClass = "mdb-movie-header";

class MovieHeader extends React.Component {
  render() {
    var divStyle = {
        backgroundImage: 'url(' + 'https://image.tmdb.org/t/p/w1280/' + this.props.background + ')',
    };

    return (
      <div className={baseClass} style={divStyle}>
      </div>
    )
  }
}

export default MovieHeader