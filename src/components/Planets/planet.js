import React from 'react';
import './styles.scss';
import PropTypes from 'prop-types';

// eslint-disable-next-line require-jsdoc
class Planet extends React.Component {
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
    const {planet} = this.props;
    return (
      <div className="planet">
        {/* eslint-disable-next-line react/prop-types */}
        <h2 className="planet__name">{planet.name}</h2>
        <div className="planet__info">
          <div className="planet__info--column">
            <p className="key">Rotation period:</p>
            {/* eslint-disable-next-line react/prop-types */}
            <p className="value">{planet.rotation_period}</p>
          </div>
          <div className="planet__info--column">
            <p className="key">Orbital period:</p>
            {/* eslint-disable-next-line react/prop-types */}
            <p className="value">{planet.orbital_period}</p>
          </div>
        </div>
        <div className="planet__info">
          <div className="planet__info--column">
            <p className="key">Diameter:</p>
            {/* eslint-disable-next-line react/prop-types */}
            <p className="value">{planet.diameter}</p>
          </div>
          <div className="planet__info--column">
            <p className="key">Climate:</p>
            {/* eslint-disable-next-line react/prop-types */}
            <p className="value">{planet.climate}</p>
          </div>
        </div>
        <div className="planet__info">
          <div className="planet__info--column">
            <p className="key">Gravity:</p>
            {/* eslint-disable-next-line react/prop-types */}
            <p className="value">{planet.gravity}</p>
          </div>
          <div className="planet__info--column">
            <p className="key">Terrain:</p>
            {/* eslint-disable-next-line react/prop-types */}
            <p className="value">{planet.terrain}</p>
          </div>
        </div>
        <div className="planet__info">
          <div className="planet__info--column">
            <p className="key">Surface water:</p>
            {/* eslint-disable-next-line react/prop-types */}
            <p className="value">{planet.surface_water}</p>
          </div>
          <div className="planet__info--column">
            <p className="key">Population:</p>
            {/* eslint-disable-next-line react/prop-types */}
            <p className="value">{planet.population}</p>
          </div>
        </div>
      </div>
    );
  }
}
export default Planet;
