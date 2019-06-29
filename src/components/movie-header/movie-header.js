import React from 'react';
import MissingImage from '../../../src/missing_header_banner.jpg';
import './movie-header.css';

const baseClass = "mdb-movie-header";

class MovieHeader extends React.Component {
  render() {
    var divStyle = {
        backgroundImage: 'url(' + 'https://image.tmdb.org/t/p/w1280/' + this.props.background + ')',
    };

    var missingImage = {
      backgroundImage: 'url(' + MissingImage + ')',
    };

    return (
      <div className={baseClass} style={this.props.background ? divStyle : missingImage}>
        {this.props.children}
      </div>
    )
  }
}

export default MovieHeader