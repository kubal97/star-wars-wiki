import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.scss';
import Nav from './components/Nav';
import Home from './components/Home';
import Films from './components/Films';
import Film from './components/Films/film';
import People from './components/People';
import Planets from './components/Planets';
import Species from './components/Species';
// eslint-disable-next-line require-jsdoc
function App() {
  return (
    <Router className="App">
      <Nav />
      <Switch>
        <Route exact path="/star-wars-wiki/" component={Home} />
        <Route exact path="/star-wars-wiki/films" component={Films} />
        <Route exact path="/star-wars-wiki/film" component={Film} />
        <Route exact path="/star-wars-wiki/people" component={People} />
        <Route exact path="/star-wars-wiki/planets" component={Planets} />
        <Route exact path="/star-wars-wiki/species" component={Species} />
      </Switch>
    </Router>
  );
}

export default App;
