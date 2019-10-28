import React from 'react';
import Home from '../Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';
import './styles.scss';
// eslint-disable-next-line require-jsdoc
class Nav extends React.Component {
  // eslint-disable-next-line require-jsdoc
  render() {
    return (
      <Router>
        <div>
          <nav className="nav">
            <ul className="ul">
              <li><Link className="item" >Films</Link></li>
              <li><Link className="item" >People</Link></li>
              <li><Link className="item" >Planets</Link></li>
              <Link className="logo" to="/">
                <div className="logo__upper">star wars</div>
                <div className="logo__lower">wiki</div>
              </Link>
              <li><Link className="item" >Species</Link></li>
              <li><Link className="item" >Starships</Link></li>
              <li><Link className="item">Vehicles</Link></li>
            </ul>
          </nav>
          <Switch>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}
export default Nav;
