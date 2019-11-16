import React from 'react';
import './styles.scss';

// eslint-disable-next-line require-jsdoc
class Person extends React.Component {
  // eslint-disable-next-line require-jsdoc
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
    };
  }

  // eslint-disable-next-line require-jsdoc
  render() {
    const {person} = this.props;
    // eslint-disable-next-line max-len
    return (
      <div className="person">
        <h2 className="person__name">{person.name}</h2>
        <div className="person__info">
          <div className="person__info--column">
            <p className="key">Gender:</p>
            <p className="value">{person.gender}</p>
          </div>
          <div className="person__info--column">
            <p className="key">Mass:</p>
            <p className="value">{person.mass}</p>
          </div>
        </div>
        <div className="person__info">
          <div className="person__info--column">
            <p className="key">Birth year:</p>
            <p className="value">{person.birth_year}</p>
          </div>
          <div className="person__info--column">
            <p className="key">Height:</p>
            <p className="value">{person.height}</p>
          </div>
        </div>
        <div className="person__info">
          <div className="person__info--column">
            <p className="key">Homeworld</p>
            <p className="value">homeworld</p>
          </div>
          <div className="person__info--column">
            <p className="key">Skin color:</p>
            <p className="value">{person.skin_color}</p>
          </div>
        </div>
        <div className="person__info">
          <div className="person__info--column">
            <p className="key">Hair color:</p>
            <p className="value">{person.hair_color}</p>
          </div>
          <div className="person__info--column">
            <p className="key">Eye color:</p>
            <p className="value">{person.eye_color}</p>
          </div>
        </div>
      </div>
    );
  }
}
export default Person;
