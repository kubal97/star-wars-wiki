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
      count: 0,
      current: 1,
    };
  }
  // eslint-disable-next-line require-jsdoc

  onLoadPeoples() {
    axios.get(`https://swapi.co/api/people/${this.state.current}`)
        .then((response) => {
          this.setState({
            loading: false,
            isLoaded: true,
            peoples: response.data.results,
            count: response.data.count,
          });
          console.log(this.state.peoples);
        });
  }

  onNextPage() {
    // eslint-disable-next-line react/no-direct-mutation-state
    this.state.current = this.state.count ?
      null :
        this.setState({current: this.state.current + 1});
  }

  onPreviousPage() {
    this.setState({current: this.state.current - 1});
  }

  pagination(pages) {
    const active = this.state.current;
    const page = [];
    for (let i = 1; i <= pages; i++) {
      page.push(<p className="singlePage">{i}</p>);
    }
    return page[active-1];
  }

  componentDidMount() {
    this.onLoadPeoples();
  }

  // eslint-disable-next-line require-jsdoc
  render() {
    const {peoples, count} = this.state;
    const pages = Math.floor(count/10);
    // eslint-disable-next-line max-len
    return (
      <div className="people">
        <div className="people__header" />
        <div className="people__fade" />
        <img className="people__bcg" src={Vader} alt="Vader"/>
        {this.state.loading ?
              <div className="loader">
                <img className="loader__image" src={Loader} alt="loader"/>
              </div> : null
        }
        <div className="people__container">
          {peoples.map((person) =>
            <Person key={person.url} person={person} />
          )}
        </div>
        <div className="people__page">
          <button className="people__page--button">Previous</button>
          {this.pagination(pages)}
          <button className="people__page--button">Next</button>
        </div>
      </div>
    );
  }
}
export default People;
