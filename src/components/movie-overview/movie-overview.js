import React from 'react';
import './movie-overview.css';

const baseClass = "mdb-movie-overview";

class MovieOverview extends React.Component {
  render() {
    return (
      <div className={baseClass}>
          <h3>Overview</h3>
          <div className={`${baseClass}__inner`}>
            {this.props.content}
          </div>
      </div>
    )
  }
}

export default MovieOverview