import React from 'react';
import axios from 'axios';
import './styles.scss';
import Vehicle from './vehicle';
import Loader from '../Loader';

// eslint-disable-next-line require-jsdoc
class Vehicles extends React.Component {
  // eslint-disable-next-line require-jsdoc
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      isLoaded: false,
      vehicles: [],
      count: 0,
      current: 1,
    };
  }
  // eslint-disable-next-line require-jsdoc
  onLoadVehicles() {
    this.setState({loading: true});
    axios.get(`https://swapi.co/api/vehicles/?page=${this.state.current}`)
        .then((response) => {
          this.setState({
            loading: false,
            isLoaded: true,
            vehicles: response.data.results,
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
        this.onLoadVehicles();
      });
    } else alert('There is no next page!');
  }
  // eslint-disable-next-line require-jsdoc
  onPreviousPage() {
    if (this.state.current > 1) {
      this.setState({
        current: this.state.current - 1,
      }, () => {
        this.onLoadVehicles();
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
            this.onLoadVehicles();
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
    this.onLoadVehicles();
  }

  // eslint-disable-next-line require-jsdoc
  render() {
    const {vehicles} = this.state;
    // eslint-disable-next-line max-len
    return (
      <div className="vehicles">
        <div className="vehicles__bcg"/>
        <div className="vehicles__header" />
        {this.state.loading ? <Loader /> :
            <div style={{width: '80%'}}>
              <div className="vehicles__container">
                {vehicles.map((vehicle) =>
                  <Vehicle key={vehicle.url} vehicle={vehicle} />
                )}
              </div>
              <div className="vehicles__page">
                <button
                  onClick={() => this.onPreviousPage()}
                  className="vehicles__page--button">Previous</button>
                {this.onCurrentPage()}
                {/* eslint-disable-next-line react/no-string-refs */}
                <button
                  onClick={() => this.onNextPage()}
                  className="vehicles__page--button">Next</button>
              </div>
            </div>
        }
      </div>
    );
  }
}
export default Vehicles;
