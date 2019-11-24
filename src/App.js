import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.scss';
import Nav from './components/Nav';
import Home from './components/Home';
import Films from './components/Films';
import Film from './components/Films/film';
import People from './components/People';
import Planets from './components/Planets';
// eslint-disable-next-line require-jsdoc
function App() {
  return (
    <Router className="App">
      <Nav />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/films" component={Films} />
        <Route exact path="/film" component={Film} />
        <Route exact path="/people" component={People} />
        <Route exact path="/planets" component={Planets} />
      </Switch>
    </Router>
  );
}

export default App;
