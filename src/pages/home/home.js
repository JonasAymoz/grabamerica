import React, { Component } from 'react';
import logo from '../../img/grabaFavicon.png';
import videoHome from '../../img/intro.mp4';
import {Link} from 'react-router-dom';


class Home extends Component {
    render() {
        return (
            <div className="home d-flex">
                <div className="mainTitle">
                    <h1>Grabamerica</h1>
                    <img src={logo} alt="logo"/>
                    <p>Vamonos boludo !</p>

                    <Link to="/depart">
                        <div className="btn btn-primary"> go !</div>
                    </Link>
                </div>
                <video autoPlay poster="images/cover.jpg" id="bgvid" loop muted>
                    <source src={videoHome} type="video/mp4"/>
                </video>
            </div>
        );
    }
}

export default Home;