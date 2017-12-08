import React, {Component} from 'react';


class FruitItem extends Component {


    render() {
        return  (
            <li className="col-md-3 col">
                <a href="#" data-title="Azuki bean"  >
                    <img src={this.props.imgSrc} alt="img01"/>
                </a>
                <div className="og-expander" style={{transition: 'height 350ms ease', height: '764px'}}>
                    <div className="og-expander-inner"><span className="og-close"></span>
                        <div className="og-fullimg">
                            <div className="og-loading"></div>
                            <img src={this.props.imgSrc}/>
                        </div>
                        <div className="og-details">
                            <h3>Dandelion horseradish</h3>
                            <p>Cabbage bamboo shoot broccoli rabe
                            chickpea chard sea lettuce lettuce ricebean artichoke earthnut pea aubergine okra brussels
                            sprout avocado tomato.</p>
                            <a href="#">Visit website</a>
                        </div>
                    </div>
                </div>
            </li>
        );
    }

}

export default FruitItem;