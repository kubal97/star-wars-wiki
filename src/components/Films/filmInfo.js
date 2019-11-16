/* eslint-disable */
import React from 'react';
import './styles.scss';
import arrowLeft from '../../assets/arrow-left.png';
import {Link} from 'react-router-dom';

class FilmInfo extends React.Component {
  render() {
    const {details, image, isFilmOpen} = this.props;
    const re = /T.*$/;
    return (
      <div className="singleFilm">
        <div className="singleFilm__left">
          <img src={image} alt="Poster"/>
        </div>
        <div className="singleFilm__right">
          <div className="title">{details.title}</div>
          <div className="containerInfo">
            <div className="content">
              <p className="key">Director:</p>
              <p className="value">{details.director}</p>
            </div>
            <div className="content">
              <p className="key">Release day:</p>
              <p className="value">{details.release_date.replace(re, '')}</p>
            </div>
            <div className="content">
              <p className="key">Producer:</p>
              <p className="value">{details.producer}</p>
            </div>
            <div className="content">
              <p className="key">Description: </p>
              <p className="value">{details.opening_crawl}</p>
            </div>
            <div className="content">
              <Link onClick={isFilmOpen} className="back" to="/films">
                <button className="back__button">
                  <img
                    className="arrow"
                    src={arrowLeft}
                    alt="Arrow left"/>
                </button>
                <p className="back__title">Go back</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default FilmInfo;
