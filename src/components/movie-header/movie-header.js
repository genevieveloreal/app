import React from 'react';
import MissingImage from '../../../src/images/missing_header_banner.jpg';
import './movie-header.css';

const baseClass = "mdb-movie-header";

class MovieHeader extends React.Component {
  render() {
    let divStyle = {
        backgroundImage: `url(https://image.tmdb.org/t/p/w1280/${this.props.background})`
    };

    let missingImage = {
      backgroundImage: 'url(' + MissingImage + ')',
    };

    return (
      <div className={`${baseClass} fade-in`} style={this.props.background ? divStyle : missingImage}>
        {this.props.children}
      </div>
    )
  }
}

export default MovieHeader