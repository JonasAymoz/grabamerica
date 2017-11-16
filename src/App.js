import React, { Component } from 'react';

import './css/style.css';

import Header from './components/Header';
import MainMap from './pages/mainMap/mainMap';
import Home from './pages/home/home';
import Projet from './pages/projet/projet';
import Equipe from './pages/equipe/equipe';
import Journal from './pages/journal/journal';
import Depart from './pages/depart/depart';

import {Route} from 'react-router-dom';
import Menu from "./components/Menu";


class App extends Component {

  render() {
    return (
      <div className="App">
          <Header/>

          <Route exact path="/" component={Home} />
          <Route path="/map" component={MainMap} />
          <Route path="/projet" component={Projet} />
          <Route path="/equipe" component={Equipe} />
          <Route path="/journal" component={Journal} />
          <Route path="/depart" component={Depart} />

          <Menu/>
      </div>
    );
  }
}

export default App;
