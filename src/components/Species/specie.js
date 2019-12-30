import React from 'react';
import './styles.scss';
import PropTypes from 'prop-types';

// eslint-disable-next-line require-jsdoc
class Specie extends React.Component {
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
    const {specie} = this.props;
    return (
      <div className="specie">
        {/* eslint-disable-next-line react/prop-types */}
        <h2 className="specie__name">{specie.name}</h2>
        <div className="specie__info">
          <div className="specie__info--column">
            <p className="key">Language:</p>
            {/* eslint-disable-next-line react/prop-types */}
            <p className="value">{specie.language}</p>
          </div>
          <div className="specie__info--column">
            <p className="key">Designation:</p>
            {/* eslint-disable-next-line react/prop-types */}
            <p className="value">{specie.designation}</p>
          </div>
        </div>
        <div className="specie__info">
          <div className="specie__info--column">
            <p className="key">Homeworld:</p>
            {/* eslint-disable-next-line react/prop-types */}
            <p className="value">{specie.homeworld}</p>
          </div>
          <div className="specie__info--column">
            <p className="key">Average Height:</p>
            {/* eslint-disable-next-line react/prop-types */}
            <p className="value">{specie.average_height}</p>
          </div>
        </div>
        <div className="specie__info">
          <div className="specie__info--column">
            <p className="key">Average Lifespan</p>
            {/* eslint-disable-next-line react/prop-types */}
            <p className="value">{specie.average_lifespan}</p>
          </div>
          <div className="specie__info--column">
            <p className="key">Classification</p>
            {/* eslint-disable-next-line react/prop-types */}
            <p className="value">{specie.classification}</p>
          </div>
        </div>
        <div className="specie__info">
          <div className="specie__info--column">
            <p className="key">Eye colors:</p>
            {/* eslint-disable-next-line react/prop-types */}
            <p className="value">{specie.eye_colors}</p>
          </div>
          <div className="person__info--column">
            <p className="key">Hair colors:</p>
            {/* eslint-disable-next-line react/prop-types */}
            <p className="value">{specie.hair_colors}</p>
          </div>
        </div>
        <div className="specie__info">
          <div className="specie__info--column">
            <p className="key">Skin colors:</p>
            {/* eslint-disable-next-line react/prop-types */}
            <p className="value">{specie.skin_colors}</p>
          </div>
          <div className="specie__info--column">
            <p className="key"></p>
            <p className="value"></p>
          </div>
        </div>
      </div>
    );
  }
}
export default Specie;
