/* eslint-disable */
import React from 'react';
import {Link} from 'react-router-dom';
import './styles.scss';
import arrowRight from '../../assets/arrow-right.png';

class Home extends React.Component {
  render() {
    return (
      <div className="home">
        <div className="home__bcg"/>
        <div className="home__clones"/>
        <div className="container">
          <h3 className="container__title">explore the dark side of...</h3>
          <h1 className="container__star">star wars</h1>
          <h4 className="container__description">A long, long time ago in a
              distant galaxy, Star Wars has redefined the blockbuster movies ...
              We come to the rescue to remind you of the details
              of individual heroes, planets, vehicles and
              many other curiosities</h4>
          <Link className="container__explore" to="/films">
            <p className="container__explore--title">Explore</p>
            <button className="container__explore--button">
              <img
                className="arrow"
                src={arrowRight}
                alt="Arrow right"/>
            </button>
          </Link>
        </div>
      </div>
    );
  }
}
export default Home;
