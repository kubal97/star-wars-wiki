import React from 'react';
import './styles.scss';

// eslint-disable-next-line require-jsdoc
class FilmInfo extends React.Component {
  // eslint-disable-next-line require-jsdoc
  render() {
    // eslint-disable-next-line react/prop-types
    const {details, isFilmOpen} = this.props;
    return (
      <div className="singleFilm">
        <button onClick={isFilmOpen}>EXIT</button>
        {/* eslint-disable-next-line react/prop-types */}
        <div>{details.title}</div>
      </div>
    );
  }
}
export default FilmInfo;
