import React from 'react';
import './styles.scss';
import arrowLeft from '../../assets/arrow-left.png';
import {Link} from 'react-router-dom';

// eslint-disable-next-line require-jsdoc
class FilmInfo extends React.Component {
  // eslint-disable-next-line require-jsdoc
  render() {
    // eslint-disable-next-line react/prop-types
    const {details, image, isFilmOpen} = this.props;
    const re = /T.*$/;
    return (
      <div className="singleFilm">
        <div className="singleFilm__left">
          <img src={image} alt="Poster"/>
        </div>
        <div className="singleFilm__right">
          {/* eslint-disable-next-line react/prop-types */}
          <div className="title">{details.title}</div>
          <div className="containerInfo">
            <div className="content">
              <p className="key">Director:</p>
              {/* eslint-disable-next-line react/prop-types */}
              <p className="value">{details.director}</p>
            </div>
            <div className="content">
              <p className="key">Release day:</p>
              {/* eslint-disable-next-line react/prop-types */}
              <p className="value">{details.release_date.replace(re, '')}</p>
            </div>
            <div className="content">
              <p className="key">Producer:</p>
              {/* eslint-disable-next-line react/prop-types */}
              <p className="value">{details.producer}</p>
            </div>
            <div className="content">
              <p className="key">Description: </p>
              {/* eslint-disable-next-line react/prop-types */}
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
