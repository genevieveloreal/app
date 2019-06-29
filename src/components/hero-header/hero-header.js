import React from 'react';
import Logo from '../../../src/movie-db-logo.svg';
import './hero-header.css';

const baseClass = "mdb-hero-header";

class HeroHeader extends React.Component {
  render() {
    return (
        <header className={`${baseClass}`}>
            <img className={`${baseClass}__logo`} src={Logo} alt="Movie DB Logo"></img>
            <form className={`${baseClass}__search-form`}>
                {this.props.children}
            </form>
        </header>
        )
  }
}

export default HeroHeader