/* eslint-disable */
import React from 'react';
import StarshipInfo from './starshipInfo';
import './styles.scss';

class Starship extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isStarshipOpen: false,
    };
  }
  onOpenStarship() {
    this.setState((prevState) => ({isStarshipOpen: !prevState.isStarshipOpen}));
  }
  render() {
    const {image, starship} = this.props;
    return (
      <div className="starship__container">
        <a onClick={this.onOpenStarship.bind(this)} className="starship">
          <div className="cont">
            <img
              className="starship__poster"
              src={image}
              alt="poster"
            />
          </div>
          <div className="starship__item" key={starship.url}>
            {starship.name}
          </div>
        </a>
        {this.state.isStarshipOpen ?
          // eslint-disable-next-line max-len
          <StarshipInfo details={starship} image={image} isStarshipOpen={this.onOpenStarship.bind(this)} /> : null}
      </div>
    );
  }
}
export default Starship;
