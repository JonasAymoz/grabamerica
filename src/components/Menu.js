import React, { Component } from 'react';
import MenuItem from "./MenuItem";

import logoMenu from '../img/grabaFavicon.png';

class Menu extends Component {


    constructor(){
        super();
        this.state = {
            menuOpen : true
        }
    }

    toggleMenu = () => {
        this.setState({
            'menuOpen' : !this.state.menuOpen
        });

    }


    render() {
        return (
            <nav className="navbar fixed-bottom ">
                <ul className={"row no-gutters " + (this.state.menuOpen? "" : "menuHidden ")} id="navHide">
                    <li className="col-md-2 hidden-sm-down svgMenuItem">
                        <figure>
                            <svg id="snapTest"  viewBox="0 0 377.14 259.445" preserveAspectRatio="none">
                                <path id="path1" fill="#5e318a" d="M0,259.445H377.14l0.688-189.844L328.32,39.722l-124.5,35.75l-110.75-10.5l-29.75,60.5l-63.997,36.975
  L0,259.445z" />
                                <path id="path2" fill="#d8493b" d="M0,259.445H377.14l0.688-189.844l-50.498-17.748L203.806,79.017L97.475,72.474l-26.991,56.179
  l-71.161,33.794L0,259.445z"  />
                            </svg>
                        </figure>

                    </li>
                    <MenuItem
                        title="Carte"
                        subtitle="La carte du voyage "
                        color1="#5e318a"
                        color2="#d8493b"
                        path1="M0,259.445h377.14V81.931l-122,18.514l-150.767-29.44L81.14,32.445L0,69.641V259.445z"
                        path2="M0,259.445h377.14V81.931l-119-54.486l-94,46l-99,18L0,69.641V259.445z"
                        link="/map"
                    />

                    <MenuItem
                        title="Projet"
                        subtitle="A propos de Grabamerica"
                        color1="#F15B24"
                        color2="#b8c530"
                        path1="M0,259.445h377.207V83.353L326.07,66.222l-67.051,15.958L245.82,23.722l-104.5,19.75l-76.5,40.75
  l-64.886-0.869L0,259.445z"
                        path2="M0,259.445h377.207V83.353l-51.492,13.508l-66.695-14.68l-15.672-52.876l-93.781,24.163l-81.86,39.326
  l-67.772-9.439L0,259.445z"
                        link="/projet"
                    />


                    <MenuItem
                        title="L'equipe !"
                        subtitle="Qui nous sommes"
                        color1="#F15B24"
                        color2="#5e318a"
                        path1="M0,259.445H377.14V83.781l-26.737-10.559l-64-49l-88.667,9.333L142.403,8.889l-81,34.667L0,83.723V259.445z"
                        path2="M0,259.445H377.14V83.781l-49.887-8.719l-52.285-35.794l-84.527,0.813l-49.704-19.524L70.774,57.978
  L0,83.723V259.445z"
                        link="/equipe"
                    />


                    <MenuItem
                        title="Le journal"
                        subtitle="Le carnet de bord"
                        color1="#b8c530"
                        color2="#f59f21"
                        path1="M0,259.445h377.186V83.375l-45.448-13.819L255.07,8.222l-58.333,69.333l-96-22.667L65.07,99.222
  L-0.045,83.375L0,259.445z"
                        path2="M0,259.445h377.186V83.375l-48.724-3.619l-59.795-56.534l-64.146,70.67l-96.76-25.007l-42.675,44.303
  l-65.13-29.813L0,259.445z"
                        link="/journal"
                    />

                    <li className="col-md-2 hidden-sm-down svgMenuItem">
                        <figure>
                            <svg id="snapTest"  viewBox="0 0 377.14 259.445" preserveAspectRatio="none">
                                <path id="path1" fill="white" d="M0,259.445h376.74v-54.076l-69.337-44.147l-46.667-69l-55.333,23l-82.667-44.667H62.403l-62.616,12.95
  L0,259.445z" />
                                <path id="path2" fill="#f59f21" d="M0,259.445h376.74v-54.076l-72.594-40.74l-41.555-60.295l-58.39,16.296l-84.74-40.741H67.037l-67.25,3.616
  L0,259.445z" />
                            </svg>
                        </figure>
                    </li>
                </ul>
                <div className="button menuToggle" data-toggle="collapse" data-target="#navHide" aria-expanded="false" onClick={() => this.toggleMenu()}>
                    <img alt="logo" src={logoMenu}/> Menu
                </div>
            </nav>
        );
    }
}

export default Menu;