import React from 'react';
import axios from 'axios';
// import moment from 'moment';
import './styles.scss';
import Film from './film';
import First from '../../assets/1.png';
import Second from '../../assets/2.jpg';
import Third from '../../assets/3.jpg';
import Fourth from '../../assets/4.png';
import Fifth from '../../assets/5.png';
import Sixth from '../../assets/6.png';
import Seventh from '../../assets/7.jpg';
import Loader from '../../assets/loader.png';
import arrowLeft from '../../assets/arrow-left.png';
import {Link} from 'react-router-dom';

const images = [First, Second, Third, Fourth, Fifth, Sixth, Seventh];
// eslint-disable-next-line require-jsdoc
class Films extends React.Component {
  // eslint-disable-next-line require-jsdoc
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      isLoaded: false,
      films: [],
    };
  }
  // eslint-disable-next-line require-jsdoc
  onLoadFilms() {
    axios.get('https://swapi.co/api/films/')
        .then((response) => {
          this.setState({
            loading: false,
            isLoaded: true,
            films: response.data.results,
          });
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
    // eslint-disable-next-line max-len
    // const sortDates =(a, b) => moment(a.release_date, 'YYYY-MM-DD') -moment(b.release_date, 'YYYY-MM-DD');
    return (
      <div className="films">
        {this.state.loading ?
              <div className="loader">
                <img className="loader__image" src={Loader} alt="loader"/>
              </div> :
              null
        }
        <div className="container">
          {!isLoaded ?
              null :
              // eslint-disable-next-line max-len
              <div className="films__list">
                {films.map((film) =>
                // eslint-disable-next-line max-len,react/jsx-key
                  <Film key={film.episode_id} film={film} image={images[film.episode_id-1]} />,
                )}
                <Link className="back" to="/star-wars-wiki/">
                  <button className="back__button">
                    <img
                      className="arrow"
                      src={arrowLeft}
                      alt="Arrow left"/>
                  </button>
                  <p className="back__title">Go back</p>
                </Link>
              </div>
          }
        </div>
      </div>
    );
  }
}
export default Films;
