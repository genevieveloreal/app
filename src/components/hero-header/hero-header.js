import React from 'react';
import Logo from '../../../src/movie-db-logo.svg';
import HeroBackground from '../../../src/movie_db_hero_bg_large.png';
import './hero-header.css';

const baseClass = "mdb-hero-header";

class HeroHeader extends React.Component {
  render() {
    var divStyle = {
      backgroundImage: 'url(' + HeroBackground + ')',
    };

    return (
      <>
        <div className={`${baseClass}__overlay`} style={divStyle}>
        </div>
        <header className={`${baseClass}`}>
            <img className={`${baseClass}__logo`} src={Logo} alt="Movie DB Logo"></img>
            <form className={`${baseClass}__search-form`}>
                {this.props.children}
            </form>
        </header>
      </>
    )
  }
}

export default HeroHeader