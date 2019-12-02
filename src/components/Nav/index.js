/* eslint-disable */
import React from 'react';
import {NavLink} from 'react-router-dom';
import './styles.scss';

class Nav extends React.Component {
  render() {
    return (
      <div>
        <nav className="nav">
          <ul className="ul">
            <li><NavLink className="item" activeClassName="active" to="/star-wars-wiki/films">Films</NavLink></li>
            <li><NavLink className="item" activeClassName="active" to="/star-wars-wiki/people">People</NavLink></li>
            <li><NavLink className="item" activeClassName="active" to="/star-wars-wiki/planets">Planets</NavLink></li>
            <NavLink className="logo" to="/star-wars-wiki/">
              <div className="logo__upper">star wars</div>
              <div className="logo__lower">wiki</div>
            </NavLink>
            <li><NavLink className="item" activeClassName="active" to="/star-wars-wiki/species">Species</NavLink></li>
            <li><NavLink className="item" activeClassName="active" to="/star-wars-wiki/starships">Starships</NavLink></li>
            <li><NavLink className="item" activeClassName="active" to="/star-wars-wiki/vehicles">Vehicles</NavLink></li>
          </ul>
        </nav>
      </div>
    );
  }
}
export default Nav;
