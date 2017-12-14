import React, {Component} from 'react';


class FruitItem extends Component {
    constructor () {
        super();
        this.state = {
            displayInfo :false
        }
    }


    displayInfo = () => {
        this.setState( {
            displayInfo : !this.state.displayInfo
        });
    }

    render() {
        return  (
            <li className="col-md-2 col-sm-6 col-xs-1 col">
                <div className="og-expander">
                    <div className="og-expander-inner"><span className="og-close"></span>
                        <div className="og-fullimg">
                            <div className="og-loading"></div>
                            <img src={this.props.imgSrc} onClick={() => this.displayInfo()}/>
                        </div>
                        <div className={(this.state.displayInfo? "visible " : " ") + " og-details"}>
                            <h3>{this.props.title}</h3>
                            <p>{this.props.desc}</p>
                        </div>
                    </div>
                </div>
            </li>
        );
    }

}

export default FruitItem;