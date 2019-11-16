/* eslint-disable */
import React from 'react';
import FilmInfo from './filmInfo';
import './styles.scss';

class Film extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isFilmOpen: false,
    };
  }
  onOpenFilm() {
    this.setState((prevState) => ({isFilmOpen: !prevState.isFilmOpen}));
  }
  render() {
    const {image, film} = this.props;
    return (
      <div>
        <a onClick={this.onOpenFilm.bind(this)} className="film">
          <img
            className="film__poster"
            src={image}
            alt="poster"
          />
          <div className="film__item" key={film.episode_id}>
            {film.title}
          </div>
        </a>
        {this.state.isFilmOpen ?
          // eslint-disable-next-line max-len
          <FilmInfo details={film} image={image} isFilmOpen={this.onOpenFilm.bind(this)} /> : null}
      </div>
    );
  }
}
export default Film;
