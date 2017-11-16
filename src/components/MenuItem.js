import React, {Component} from 'react';
import Anime from 'react-anime';
import {Link} from 'react-router-dom';

class MenuItem extends Component {

    constructor() {
        super();
        this.state = {
            path1 : 'M0,259.445h377.14V81.931l-122,18.514l-150.767-29.44L81.14,32.445L0,69.641V259.445z',
            path2 : 'M0,259.445h377.14V81.931l-119-54.486l-94,46l-99,18L0,69.641V259.445z',
            color1 : '#5e318a',
            color2 : "#d8493b",
            isMouseInside: false,
        }
    };


    mouseEnter = () => {
        this.setState({ isMouseInside: true});
    }
    mouseLeave = () => {
        this.setState({ isMouseInside: false});
    }

    getSvg = (originPath, destPath, color) => {
        return (this.state.isMouseInside ? <Anime easing="easeOutElastic"
                                     duration={700}
                                     autoplay={true}
                                     direction="normal"
                                    elasticity="100"
                                     d={destPath}>
                <path id="path1" fill={color} d={originPath} />
            </Anime>
        :
            <path id="path1" fill={color} d={originPath} />)

    }


    render(){

        return (
        <li className="col-md-2 col-3 svgMenuItem" onMouseEnter={this.mouseEnter} onMouseLeave={this.mouseLeave}>
            <Link to={this.props.link}>
                <figure>
                    <svg ref="theSVG" id="snapTest"  viewBox="0 0 377.14 259.445" preserveAspectRatio="none">
                        {this.getSvg(this.props.path1, this.props.path2, this.props.color1)}
                        {this.getSvg(this.props.path2, this.props.path1, this.props.color2)}
                    </svg>
                    <figcaption>
                        <h2>{this.props.title}</h2>
                        <p>{this.props.subtitle}</p>
                    </figcaption>
                </figure>
            </Link>
        </li>

        );
    }
}

export default MenuItem;