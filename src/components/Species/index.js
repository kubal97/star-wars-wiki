import React from 'react';
import axios from 'axios';
import './styles.scss';
import Specie from './specie';
import Loader from '../Loader';

// eslint-disable-next-line require-jsdoc
class Species extends React.Component {
  // eslint-disable-next-line require-jsdoc
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      isLoaded: false,
      species: [],
      count: 0,
      current: 1,
    };
  }
  // eslint-disable-next-line require-jsdoc
  onLoadSpecies() {
    this.setState({loading: true});
    axios.get(`https://swapi.co/api/species/?page=${this.state.current}`)
        .then((response) => {
          this.setState({
            loading: false,
            isLoaded: true,
            species: response.data.results,
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
        this.onLoadSpecies();
      });
    } else alert('There is no next page!');
  }
  // eslint-disable-next-line require-jsdoc
  onPreviousPage() {
    if (this.state.current > 1) {
      this.setState({
        current: this.state.current - 1,
      }, () => {
        this.onLoadSpecies();
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
            this.onLoadSpecies();
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
    this.onLoadSpecies();
  }

  // eslint-disable-next-line require-jsdoc
  render() {
    const {species} = this.state;
    // eslint-disable-next-line max-len
    return (
      <div className="species">
        <div className="species__bcg"/>
        <div className="species__header" />
        {this.state.loading ? <Loader /> :
            <div style={{width: '80%'}}>
              <div className="species__container">
                {species.map((specie) =>
                  <Specie key={specie.url} specie={specie} />
                )}
              </div>
              <div className="species__page">
                <button
                  onClick={() => this.onPreviousPage()}
                  className="species__page--button">Previous</button>
                {this.onCurrentPage()}
                {/* eslint-disable-next-line react/no-string-refs */}
                <button
                  onClick={() => this.onNextPage()}
                  className="species__page--button">Next</button>
              </div>
            </div>
        }
      </div>
    );
  }
}
export default Species;
