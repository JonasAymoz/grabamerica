import React, { Component } from 'react';
import {Link} from 'react-router-dom';


class Menu extends Component {


    render() {
        return (
            <header className="App-header">
                <Link to="/">
                    <h1 className="App-title">Grabamerica</h1>
                </Link>
            </header>
        );
    }
}

export default Menu;