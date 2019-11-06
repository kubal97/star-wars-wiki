import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.scss';
import Nav from './components/Nav';
import Home from './components/Home';
import Films from './components/Films';
// eslint-disable-next-line require-jsdoc
function App() {
  return (
    <Router className="App">
      <Nav />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/films" exact component={Films} />
      </Switch>
    </Router>
  );
}

export default App;
