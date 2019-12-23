/* eslint-disable */
import React from 'react';
import {NavLink} from 'react-router-dom';
import './styles.scss';

class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isHamburgerOpen: false,
    };
  }

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
            <li><NavLink className="item" activeClassName="active" to="/star-wars-wiki/starships">Starships</NavLink>
            </li>
            <li><NavLink className="item" activeClassName="active" to="/star-wars-wiki/vehicles">Vehicles</NavLink>
            </li>
            <button
              onClick={() => this.setState({isHamburgerOpen: !this.state.isHamburgerOpen})}
              className={this.state.isHamburgerOpen ? "hamburger hamburger--emphatic is-active" : "hamburger hamburger--emphatic"}
              type="button">
            <span className="hamburger-box">
              <span className="hamburger-inner"></span>
            </span>
            </button>
          </ul>
        </nav>
        {this.state.isHamburgerOpen ?
          <nav className="nav2">
            <ul onClick={() => this.setState({isHamburgerOpen: false})} className="ul2">
              <li><NavLink className="item" activeClassName="active" to="/star-wars-wiki/films">Films</NavLink></li>
              <li><NavLink className="item" activeClassName="active" to="/star-wars-wiki/people">People</NavLink></li>
              <li><NavLink className="item" activeClassName="active" to="/star-wars-wiki/planets">Planets</NavLink></li>
              <li><NavLink className="item" activeClassName="active" to="/star-wars-wiki/species">Species</NavLink></li>
              <li><NavLink className="item" activeClassName="active" to="/star-wars-wiki/starships">Starships</NavLink></li>
              <li><NavLink className="item" activeClassName="active" to="/star-wars-wiki/vehicles">Vehicles</NavLink></li>
            </ul>
          </nav>
           : null}
      </div>
    );
  }
}
export default Nav;
