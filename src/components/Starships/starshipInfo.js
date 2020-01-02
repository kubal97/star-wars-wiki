/* eslint-disable */
import React from 'react';
import './styles.scss';
import arrowLeft from '../../assets/arrow-left.png';
import {Link} from 'react-router-dom';

class StarshipInfo extends React.Component {
  render() {
    const {details, image, isStarshipOpen} = this.props;
    return (
      <div className="singleStarship">
        <div className="singleStarship__left">
          <img src={image} alt="Poster"/>
        </div>
        <div className="singleStarship__right">
          <div className="title">{details.name}</div>
          <div className="containerInfo">
            <div className="content">
              <p className="key">Model:</p>
              <p className="value">{details.model}</p>
            </div>
            <div className="content">
              <p className="key">Starship Class: </p>
              <p className="value">{details.starship_class}</p>
            </div>
            <div className="content">
              <p className="key">Manufacturer:</p>
              <p className="value">{details.manufacturer}</p>
            </div>
            <div className="content">
              <p className="key">Cost in credits:</p>
              <p className="value">{details.cost_in_credits}</p>
            </div>
            <div className="content">
              <p className="key">Length: </p>
              <p className="value">{details.length}</p>
            </div>
            <div className="content">
              <p className="key">Max atmosphering speed: </p>
              <p className="value">{details.max_atmosphering_speed}</p>
            </div>
            <div className="content">
              <p className="key">Crew: </p>
              <p className="value">{details.crew}</p>
            </div>
            <div className="content">
              <p className="key">Passengers: </p>
              <p className="value">{details.passengers}</p>
            </div>
            <div className="content">
              <p className="key">Cargo Capacity: </p>
              <p className="value">{details.cargo_capacity}</p>
            </div>
            <div className="content">
              <p className="key">Consumables: </p>
              <p className="value">{details.consumables}</p>
            </div>
            <div className="content">
              <p className="key">Hyperdrive rating: </p>
              <p className="value">{details.hyperdrive_rating}</p>
            </div>
            <div className="content">
              <p className="key">MGLT: </p>
              <p className="value">{details.MGLT}</p>
            </div>
            <div className="content">
              <Link onClick={isStarshipOpen} className="back" to="/star-wars-wiki/starships">
                <button className="back__button">
                  <img
                    className="arrow"
                    src={arrowLeft}
                    alt="Arrow left"/>
                </button>
                <p className="back__title">Go back</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default StarshipInfo;
