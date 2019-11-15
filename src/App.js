import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.scss';
import Nav from './components/Nav';
import Home from './components/Home';
import Films from './components/Films';
import Film from './components/Films/film';
// eslint-disable-next-line require-jsdoc
function App() {
  return (
    <Router className="App">
      <Nav />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/films" component={Films} />
        <Route exact path="/film" component={Film} />
      </Switch>
    </Router>
  );
}

export default App;
