import React from 'react';
import './styles.scss';
import PropTypes from 'prop-types';

// eslint-disable-next-line require-jsdoc
class Vehicle extends React.Component {
  // eslint-disable-next-line require-jsdoc
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
    };
  }

  // eslint-disable-next-line require-jsdoc
  static get propTypes() {
    return {
      children: PropTypes.any,
      onClickOut: PropTypes.func,
    };
  }

  // eslint-disable-next-line require-jsdoc
  render() {
    // eslint-disable-next-line react/prop-types
    const {vehicle} = this.props;
    return (
      <div className="specie">
        {/* eslint-disable-next-line react/prop-types */}
        <h2 className="specie__name">{vehicle.name}</h2>
        <div className="specie__info">
          <div className="specie__info--column">
            <p className="key">Model:</p>
            {/* eslint-disable-next-line react/prop-types */}
            <p className="value">{vehicle.model}</p>
          </div>
          <div className="specie__info--column">
            <p className="key">Vehicle Class:</p>
            {/* eslint-disable-next-line react/prop-types */}
            <p className="value">{vehicle.vehicle_class}</p>
          </div>
        </div>
        <div className="specie__info">
          <div className="specie__info--column">
            <p className="key">Manufacturer:</p>
            {/* eslint-disable-next-line react/prop-types */}
            <p className="value">{vehicle.manufacturer}</p>
          </div>
          <div className="specie__info--column">
            <p className="key">Cost In Credits:</p>
            {/* eslint-disable-next-line react/prop-types */}
            <p className="value">{vehicle.cost_in_credits}</p>
          </div>
        </div>
        <div className="specie__info">
          <div className="specie__info--column">
            <p className="key">Length:</p>
            {/* eslint-disable-next-line react/prop-types */}
            <p className="value">{vehicle.length}</p>
          </div>
          <div className="specie__info--column">
            <p className="key">Max Speed:</p>
            {/* eslint-disable-next-line react/prop-types */}
            <p className="value">{vehicle.max_atmosphering_speed}</p>
          </div>
        </div>
        <div className="specie__info">
          <div className="specie__info--column">
            <p className="key">Crew:</p>
            {/* eslint-disable-next-line react/prop-types */}
            <p className="value">{vehicle.crew}</p>
          </div>
          <div className="person__info--column">
            <p className="key">Passengers:</p>
            {/* eslint-disable-next-line react/prop-types */}
            <p className="value">{vehicle.passengers}</p>
          </div>
        </div>
        <div className="specie__info">
          <div className="specie__info--column">
            <p className="key">Cargo Capacity:</p>
            {/* eslint-disable-next-line react/prop-types */}
            <p className="value">{vehicle.cargo_capacity}</p>
          </div>
          <div className="specie__info--column">
            <p className="key">Consumables:</p>
            {/* eslint-disable-next-line react/prop-types */}
            <p className="value">{vehicle.consumables}</p>
          </div>
        </div>
      </div>
    );
  }
}
export default Vehicle;
