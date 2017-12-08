import React, {Component} from 'react';
import FruitItem from "./fruitItem";

class Fruits extends Component {

    render() {

        return ( <div className="container content">
                <div className="">
                    <ul id="og-grid" className="og-grid list-unstyled row">

                        <FruitItem
                            imgSrc={require('../../img/fruits/1thumb.jpg')}
                            title="Azuki bean"
                            desc="Swiss chard pumpkin bunya nuts maize plantain aubergine napa cabbage soko coriander"
                        />


                        <li className="col-md-3 col">
                            <a href="#" data-largesrc={require("../../img/fruits/1.jpg")} data-title="Azuki bean"  >
                                <img src="" alt="img01"/>
                            </a>
                        </li>
                         <li className="col-md-3">
                            <a href="#" data-largesrc={require("../../img/fruits/2.jpg")} data-title="Veggies sunt bona vobis" data-description="Komatsuna prairie turnip wattle seed artichoke mustard horseradish taro rutabaga ricebean carrot black-eyed pea turnip greens beetroot yarrow watercress kombu.">
                                <img src={require("../../img/fruits/2thumb.jpg")} alt="img02"/>
                            </a>
                        </li>
                         <li className="col-md-3">
                            <a href="#" data-largesrc={require("../../img/fruits/3.jpg")} data-title="Trop cool" data-description="Cabbage bamboo shoot broccoli rabe chickpea chard sea lettuce lettuce ricebean artichoke earthnut pea aubergine okra brussels sprout avocado tomato.">
                                <img src={require("../../img/fruits/3thumb.jpg")} alt="img03"/>
                            </a>
                        </li>
                         <li className="col-md-3">
                            <a href="#" data-largesrc={require("../../img/fruits/4.JPG")} data-title="Dandelion horseradish" data-description="Cabbage bamboo shoot broccoli rabe chickpea chard sea lettuce lettuce ricebean artichoke earthnut pea aubergine okra brussels sprout avocado tomato.">
                                <img src={require("../../img/fruits/4thumb.jpg")} alt="img03"/>
                            </a>
                        </li>
                         <li className="col-md-3">
                            <a href="#" data-largesrc={require("../../img/fruits/5.jpg")} data-title="Dandelion horseradish" data-description="Cabbage bamboo shoot broccoli rabe chickpea chard sea lettuce lettuce ricebean artichoke earthnut pea aubergine okra brussels sprout avocado tomato.">
                                <img src={require("../../img/fruits/5thumb.jpg")} alt="img03"/>
                            </a>
                        </li>
                         <li className="col-md-3">
                            <a href="#" data-largesrc={require("../../img/fruits/6.jpg")} data-title="Dandelion horseradish" data-description="Cabbage bamboo shoot broccoli rabe chickpea chard sea lettuce lettuce ricebean artichoke earthnut pea aubergine okra brussels sprout avocado tomato.">
                                <img src={require("../../img/fruits/6thumb.jpg")} alt="img03"/>
                            </a>
                        </li>
                         <li className="col-md-3">
                            <a href="#" data-largesrc={require("../../img/fruits/7.jpg")} data-title="Dandelion horseradish" data-description="Cabbage bamboo shoot broccoli rabe chickpea chard sea lettuce lettuce ricebean artichoke earthnut pea aubergine okra brussels sprout avocado tomato.">
                                <img src={require("../../img/fruits/7thumb.jpg")} alt="img03"/>
                            </a>
                        </li>
                         <li className="col-md-3">
                            <a href="#" data-largesrc={require("../../img/fruits/8.jpg")} data-title="Dandelion horseradish" data-description="Cabbage bamboo shoot broccoli rabe chickpea chard sea lettuce lettuce ricebean artichoke earthnut pea aubergine okra brussels sprout avocado tomato.">
                                <img src={require("../../img/fruits/8thumb.jpg")} alt="img03"/>
                            </a>
                        </li>
                         <li className="col-md-3">
                            <a href="#" data-largesrc={require("../../img/fruits/9.jpg")} data-title="Dandelion horseradish" data-description="Cabbage bamboo shoot broccoli rabe chickpea chard sea lettuce lettuce ricebean artichoke earthnut pea aubergine okra brussels sprout avocado tomato.">
                                <img src={require("../../img/fruits/9thumb.jpg")} alt="img03"/>
                            </a>
                        </li>
                         <li className="col-md-3">
                            <a href="#" data-largesrc={require("../../img/fruits/10.jpg")} data-title="Dandelion horseradish" data-description="Cabbage bamboo shoot broccoli rabe chickpea chard sea lettuce lettuce ricebean artichoke earthnut pea aubergine okra brussels sprout avocado tomato.">
                                <img src={require("../../img/fruits/10thumb.jpg")} alt="img03"/>
                            </a>
                        </li>
                         <li className="col-md-3">
                            <a href="#" data-largesrc={require("../../img/fruits/11.jpg")} data-title="Dandelion horseradish" data-description="Cabbage bamboo shoot broccoli rabe chickpea chard sea lettuce lettuce ricebean artichoke earthnut pea aubergine okra brussels sprout avocado tomato.">
                                <img src={require("../../img/fruits/11thumb.jpg")} alt="img03"/>
                            </a>
                        </li>
                         <li className="col-md-3">
                            <a href="#" data-largesrc={require("../../img/fruits/12.jpg")} data-title="Dandelion horseradish" data-description="Cabbage bamboo shoot broccoli rabe chickpea chard sea lettuce lettuce ricebean artichoke earthnut pea aubergine okra brussels sprout avocado tomato.">
                                <img src={require("../../img/fruits/12thumb.jpg")} alt="img03"/>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        );


    }


}
 export default Fruits;