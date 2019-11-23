import React from 'react';
import axios from 'axios';
import './styles.scss';
import Person from './person';
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
    this.setState({loading: true});
    axios.get(`https://swapi.co/api/people/?page=${this.state.current}`)
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

  // eslint-disable-next-line require-jsdoc
  onNextPage() {
    const pages = Math.ceil(this.state.count/10);
    // eslint-disable-next-line react/no-direct-mutation-state
    if (this.state.current < pages) {
      this.setState({
        current: this.state.current + 1,
      }, () => {
        this.onLoadPeoples();
      });
    } else alert('There is no next page!');
  }
  // eslint-disable-next-line require-jsdoc
  onPreviousPage() {
    if (this.state.current > 1) {
      this.setState({
        current: this.state.current - 1,
      }, () => {
        this.onLoadPeoples();
      });
    } else alert('There is no previous page!');
  }
  // eslint-disable-next-line require-jsdoc
  onCurrentPage() {
    const pages = Math.ceil(this.state.count/10);
    const restPages = [];
    for (let i = 1; i <= pages; i++) {
      restPages.push(<a
        onClick={() => {
          this.setState({
            current: i,
          }, () => {
            this.onLoadPeoples();
          });
        }}
        id={i}
        // eslint-disable-next-line react/no-direct-mutation-state
        className={this.state.current === i ?
            'singlePage active' :
            'singlePage'}>{i}</a>);
    }
    return restPages;
  }
  // eslint-disable-next-line require-jsdoc
  componentDidMount() {
    this.onLoadPeoples();
  }

  // eslint-disable-next-line require-jsdoc
  render() {
    const {peoples} = this.state;
    // eslint-disable-next-line max-len
    return (
      <div className="people">
        <div className="people__bcg"/>
        <div className="people__header" />
        {this.state.loading ?
              <div className="loader">
                <img className="loader__image" src={Loader} alt="loader"/>
              </div> :
            <div>
              <div className="people__container">
                {peoples.map((person) =>
                  <Person key={person.url} person={person} />
                )}
              </div>
              <div className="people__page">
                <button
                  onClick={() => this.onPreviousPage()}
                  className="people__page--button">Previous</button>
                {this.onCurrentPage()}
                {/* eslint-disable-next-line react/no-string-refs */}
                {console.log(this.refs[this.state.current])}
                <button
                  onClick={() => this.onNextPage()}
                  className="people__page--button">Next</button>
              </div>
            </div>
        }
      </div>
    );
  }
}
export default People;
