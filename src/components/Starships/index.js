import React from 'react';
import axios from 'axios';
import './styles.scss';
import Loader from '../Loader';
import {Link} from 'react-router-dom';
import arrowLeft from '../../assets/arrow-left.png';
import Starship from './starship';
import sp1 from '../../assets/starship1.png';
import sp2 from '../../assets/starship2.png';
import sp3 from '../../assets/starship3.png';
import sp4 from '../../assets/starship4.png';
import sp5 from '../../assets/starship5.png';
import sp6 from '../../assets/starship6.png';
import sp7 from '../../assets/starship7.png';
import sp8 from '../../assets/starship8.png';
import sp9 from '../../assets/starship9.png';
import sp10 from '../../assets/starship10.png';
import sp11 from '../../assets/starship11.png';
import sp12 from '../../assets/starship12.png';
import sp13 from '../../assets/starship13.png';
import sp14 from '../../assets/starship14.png';
import sp15 from '../../assets/starship15.png';
import sp16 from '../../assets/starship16.png';
import sp17 from '../../assets/starship17.png';
import sp18 from '../../assets/starship18.png';
import sp19 from '../../assets/starship19.png';
import sp20 from '../../assets/starship20.png';
import sp21 from '../../assets/starship21.png';
import sp22 from '../../assets/starship22.png';
import sp23 from '../../assets/starship23.png';
import sp24 from '../../assets/starship24.png';
import sp25 from '../../assets/starship25.png';
import sp26 from '../../assets/starship26.png';
import sp27 from '../../assets/starship27.png';
import sp28 from '../../assets/starship28.png';
import sp29 from '../../assets/starship29.png';
import sp30 from '../../assets/starship30.png';
import sp31 from '../../assets/starship31.png';
import sp32 from '../../assets/starship32.png';
import sp33 from '../../assets/starship33.png';
import sp34 from '../../assets/starship34.png';
import sp35 from '../../assets/starship35.png';
import sp36 from '../../assets/starship36.png';
import sp37 from '../../assets/starship37.png';

// eslint-disable-next-line max-len
const images = [sp1, sp2, sp3, sp4, sp5, sp6, sp7, sp8, sp9, sp10, sp11, sp12, sp13, sp14, sp15, sp16, sp17, sp18, sp19, sp20, sp21, sp22, sp23, sp24, sp25, sp26, sp27, sp28, sp29, sp30, sp31, sp32, sp33, sp34, sp35, sp36, sp37];

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
        {this.state.loading ? <Loader /> :
          <div>
            <div ref={this.myRef} className="container">
              {!isLoaded ?
            null :
            // eslint-disable-next-line max-len
            <div className="starships__list">
              {starships.map((starship, index) =>
                // eslint-disable-next-line max-len,react/jsx-key
                <Starship key={starship.url} starship={starship} image={images[index+1]} />,
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
          </div>}
      </div>
    );
  }
}
export default Starships;
