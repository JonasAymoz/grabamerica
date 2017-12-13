import React, { Component } from 'react';

import './css/style.css';
import "../node_modules/slick-carousel/slick/slick.css";
import "../node_modules/slick-carousel/slick/slick-theme.css";


import Header from './components/Header';
import MainMap from './pages/mainMap/mainMap';
import Home from './pages/home/home';
import Projet from './pages/projet/projet';
import Equipe from './pages/equipe/equipe';
import Journal from './pages/journal/journal';
import Depart from './pages/depart/depart';

import {Route} from 'react-router-dom';
import Menu from "./components/Menu";
import { CookiesProvider } from 'react-cookie';
import Fruits from "./pages/fruits/fruits";
import Tags from "./pages/tags/tags";

class App extends Component {

  render() {
    return (
      <div className="App">
          <CookiesProvider>
              <Header/>

              <Route exact path="/" component={Home} />
              <Route path="/map" component={MainMap} />
              <Route path="/projet" component={Projet} />
              <Route path="/equipe" component={Equipe} />
              <Route path="/journal" component={Journal} />
              <Route path="/depart" component={Depart} />
              <Route path="/fruits" component={Fruits} />
              <Route path="/tags" component={Tags} />

              <Menu/>
          </CookiesProvider>
      </div>
    );
  }
}

export default App;
