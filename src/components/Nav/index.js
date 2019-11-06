import React from 'react';
import {Link} from 'react-router-dom';
import './styles.scss';
// eslint-disable-next-line require-jsdoc
class Nav extends React.Component {
  // eslint-disable-next-line require-jsdoc
  render() {
    return (
      <div>
        <nav className="nav">
          <ul className="ul">
            <li><Link className="item" to="/films">Films</Link></li>
            <li><a className="item" >People</a></li>
            <li><a className="item" >Planets</a></li>
            <Link className="logo" to="/">
              <div className="logo__upper">star wars</div>
              <div className="logo__lower">wiki</div>
            </Link>
            <li><a className="item" >Species</a></li>
            <li><a className="item" >Starships</a></li>
            <li><a className="item">Vehicles</a></li>
          </ul>
        </nav>
      </div>
    );
  }
}
export default Nav;
