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
              <div className="content__inside">
                <p className="key">Created:</p>
                <p className="key">Director:</p>
                <p className="key">Release day:</p>
              </div>
              <div className="content__inside">
                {/* eslint-disable-next-line react/prop-types */}
                <p className="value">{details.created.replace(re, '')}</p>
                {/* eslint-disable-next-line react/prop-types */}
                <p className="value">{details.director}</p>
                {/* eslint-disable-next-line react/prop-types */}
                <p className="value">{details.release_date.replace(re, '')}</p>
              </div>
            </div>
            <div className="content">
              <div className="content__inside">
                <p className="key">Edited:</p>
                <p className="key">Producer:</p>
              </div>
              <div className="content__inside">
                {/* eslint-disable-next-line react/prop-types */}
                <p className="value">{details.edited.replace(re, '')}</p>
                {/* eslint-disable-next-line react/prop-types */}
                <p className="value">{details.producer}</p>
              </div>
            </div>
          </div>
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
    );
  }
}
export default FilmInfo;
