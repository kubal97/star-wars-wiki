import React from 'react';
import axios from 'axios';
import './styles.scss';
import Person from './person';
import Vader from '../../assets/people.png';
import Loader from '../../assets/loader.png';

// eslint-disable-next-line require-jsdoc
class People extends React.Component {
  // eslint-disable-next-line require-jsdoc
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      isLoaded: false,
      peoples: [],
    };
  }
  // eslint-disable-next-line require-jsdoc
  onLoadPeoples() {
    axios.get('https://swapi.co/api/people/')
        .then((response) => {
          this.setState({
            loading: false,
            isLoaded: true,
            peoples: response.data.results,
          });
          console.log(this.state.peoples);
        });
  }
  componentDidMount() {
    this.onLoadPeoples();
  }

  // eslint-disable-next-line require-jsdoc
  render() {
    const {peoples} = this.state;
    // eslint-disable-next-line max-len
    return (
      <div className="people">
        <div className="people__fade"></div>
        <img className="people__bcg" src={Vader} alt="Vader"/>
        {this.state.loading ?
              <div className="loader">
                <img className="loader__image" src={Loader} alt="loader"/>
              </div> : null
        }
        <div className="container">
          {peoples.map((person) =>
            <Person key={person.url} person={person} />
          )}
        </div>
      </div>
    );
  }
}
export default People;
