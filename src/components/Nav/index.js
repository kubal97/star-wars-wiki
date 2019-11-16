/* eslint-disable */
import React from 'react';
import {Link} from 'react-router-dom';
import './styles.scss';

class Nav extends React.Component {
  render() {
    return (
      <div>
        <nav className="nav">
          <ul className="ul">
            <li><Link className="item" to="/films">Films</Link></li>
            <li><Link className="item" to="/people">People</Link></li>
            <li><Link className="item" to="./">Planets</Link></li>
            <Link className="logo" to="/">
              <div className="logo__upper">star wars</div>
              <div className="logo__lower">wiki</div>
            </Link>
            <li><Link className="item" to="./">Species</Link></li>
            <li><Link className="item" to="./">Starships</Link></li>
            <li><Link className="item" to="./">Vehicles</Link></li>
          </ul>
        </nav>
      </div>
    );
  }
}
export default Nav;
