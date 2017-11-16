import React, { Component } from 'react';
import Header from './Header';
import MainMap from '../pages/mainMap/mainMap';
import Home from '../pages/home/home';
import Projet from '../pages/projet/projet';
import Equipe from '../pages/equipe/equipe';
import Journal from '../pages/journal/journal';

import {Route} from 'react-router-dom';
import Menu from "./Menu";


const SiteContainer = props => {
    return <div>
        <Header/>

        <Route exact path="/" component={Home} />
        <Route path="/map" component={MainMap} />
        <Route path="/projet" component={Projet} />
        <Route path="/equipe" component={Equipe} />
        <Route path="/journal" component={Journal} />

        <div className="container">
            <Menu/>
        </div>
    </div>
};

export default SiteContainer;