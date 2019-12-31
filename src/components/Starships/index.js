import React from 'react';
import axios from 'axios';
import './styles.scss';
import Loader from '../Loader';
import {Link} from 'react-router-dom';
import arrowLeft from '../../assets/arrow-left.png';
import First from '../../assets/1.png';
import Starship from './starship';

// eslint-disable-next-line require-jsdoc
class Starships extends React.Component {
  // eslint-disable-next-line require-jsdoc
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
    this.state = {
      loading: true,
      isLoaded: false,
      starships: [],
      count: 0,
      current: 1,
    };
  }
  // eslint-disable-next-line require-jsdoc
  onLoadPeoples() {
    this.setState({loading: true});
    axios.get(`https://swapi.co/api/starships/?page=${this.state.current}`)
        .then((response) => {
          this.setState({
            loading: false,
            isLoaded: true,
            starships: response.data.results,
            count: response.data.count,
          });
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
        this.myRef.current.scrollTo(0, 0);
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
        this.myRef.current.scrollTo(0, 0);
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
            this.myRef.current.scrollTo(0, 0);
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
    const {starships, isLoaded} = this.state;
    console.log(starships);
    // eslint-disable-next-line max-len
    return (
      <div className="starships">
        {this.state.loading ? <Loader /> : null}
        <div ref={this.myRef} className="container">
          {!isLoaded ?
            null :
            // eslint-disable-next-line max-len
            <div className="starships__list">
              {starships.map((starship) =>
                // eslint-disable-next-line max-len,react/jsx-key
                <Starship key={starship.url} starship={starship} image={First} />,
              )}
              <Link className="starship back" to="/star-wars-wiki/">
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
        <div className="people__page">
          <button
            onClick={() => this.onPreviousPage()}
            className="people__page--button">Previous</button>
          {this.onCurrentPage()}
          {/* eslint-disable-next-line react/no-string-refs */}
          <button
            onClick={() => this.onNextPage()}
            className="people__page--button">Next</button>
        </div>
      </div>
    );
  }
}
export default Starships;
