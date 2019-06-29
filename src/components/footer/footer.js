import React from 'react';
import './footer.css';

const baseClass = "mdb-footer";

class Footer extends React.Component {
  render() {
    return (
        <div className={baseClass}>
            <p>Code by Gen C.</p>
            <p>This product uses the <a href="https://www.themoviedb.org">TMDb API</a> but is not endorsed or certified by TMDb.</p>
        </div>
        )
  }
}

export default Footer