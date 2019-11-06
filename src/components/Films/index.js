import React from 'react';
import axios from 'axios';
import './styles.scss';
import arrowYellow from '../../assets/arrow-yellow.png';
// eslint-disable-next-line require-jsdoc
class Films extends React.Component {
  // eslint-disable-next-line require-jsdoc
  constructor(props) {
    super(props);
    this.state = {isLoaded: false, films: []};
  }
  // eslint-disable-next-line require-jsdoc
  onLoadFilms() {
    axios.get('https://swapi.co/api/films/').then((response) => {
      this.setState({isLoaded: true, films: response.data.results});
      console.log(this.state.films);
    });
  }
  // eslint-disable-next-line require-jsdoc
  componentDidMount() {
    this.onLoadFilms();
  }

  // eslint-disable-next-line require-jsdoc
  render() {
    const {isLoaded, films} = this.state;
    return (
      <div className="films">
        <div className="container">
          <a className="container__left">
            <img className="arrowLeft" src={arrowYellow} alt="arrowLeft"/>
          </a>
          <a className="container__right">
            <img className="arrowRight" src={arrowYellow} alt="arrowRight"/>
          </a>
          {/* eslint-disable-next-line max-len */}
          {!isLoaded ?
              null :
              // eslint-disable-next-line max-len
              <div className="films__list">
                {/* eslint-disable-next-line max-len */}
                {films.map((films) =>
                // eslint-disable-next-line max-len
                  <div className="films__list--item" key={films.episode_id}>{films.title}</div>
                )}
              </div>
          }
        </div>
      </div>
    );
  }
}
export default Films;
