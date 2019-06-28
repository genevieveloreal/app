import React from 'react'
// import logo from './logo.svg';
import './App.css';

let baseClass = "mdb-app";

class App extends React.Component {
  render() {
    return (
      <div className={baseClass}>
        <header className={`${baseClass}__header`}>
          <h1>The Movie DB</h1>
        </header>
        <form className={`${baseClass}__search-form`}>
          <input 
            className={`${baseClass}__search-input`}
            placeholder="Search"
          >
          </input>
        </form>
      </div>
    )
  }
}

export default App
