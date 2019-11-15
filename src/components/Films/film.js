import React from 'react';
import FilmInfo from './filmInfo';
import './styles.scss';

// eslint-disable-next-line require-jsdoc
class Film extends React.Component {
  // eslint-disable-next-line require-jsdoc
  constructor(props) {
    super(props);
    this.state = {
      isFilmOpen: false,
    };
  }
  // eslint-disable-next-line require-jsdoc
  onOpenFilm() {
    this.setState((prevState) => ({isFilmOpen: !prevState.isFilmOpen}));
  }
  // eslint-disable-next-line require-jsdoc
  render() {
    // eslint-disable-next-line react/prop-types
    const {image, film} = this.props;
    return (
      <div>
        <a onClick={this.onOpenFilm.bind(this)} className="films__list--button">
          <img
            className="films__list--poster"
            src={image}
            alt="poster"
          />
          {/* eslint-disable-next-line react/prop-types */}
          <div className="films__list--item" key={film.episode_id}>
            {/* eslint-disable-next-line react/prop-types */}
            {film.title}
          </div>
        </a>
        {this.state.isFilmOpen ?
          // eslint-disable-next-line max-len
          <FilmInfo details={film} isFilmOpen={this.onOpenFilm.bind(this)} /> : null}
      </div>
    );
  }
}
export default Film;
