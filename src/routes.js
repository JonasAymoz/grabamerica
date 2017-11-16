// src/routes.js
import React from 'react';
import { Router, Route } from 'react-router';

import App from './App';
import Home from './pages/home/Home';
import MainMap from './pages/mainMap/MainMap';

const Routes = (props) => (
    <Router {...props}>
        <Route path="/" component={App} />
        <Route path="/home" component={Home} />
        <Route path="/map" component={MainMap} />
    </Router>
);

export default Routes;