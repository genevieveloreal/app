import React from 'react';
import Kansas from '../../../src/images/kansas.gif';
import './movie-catalogue-empty.css';

let baseClass = "mdb-movie-catalogue-empty";

class MovieCatalogueEmpty extends React.Component {
  render() {
    return (
        <div className={`${baseClass}`}>
            <div className={`${baseClass}__inner`}>
                <h3>I've a feeling we're not in Kansas anymore...</h3>
                <img className="img-fluid fade-in" src={Kansas} alt="No search results found"></img>
                <p>Try another search term to find your favourite movie.</p>
            </div>
        </div>
    )
  }
}

export default MovieCatalogueEmpty