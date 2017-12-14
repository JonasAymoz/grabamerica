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
                        <FruitItem
                            imgSrc={require('../../img/fruits/2thumb.jpg')}
                            title="Azuki bean"
                            desc="Swiss chard pumpkin bunya nuts maize plantain aubergine napa cabbage soko coriander"
                        />
                        <FruitItem
                            imgSrc={require('../../img/fruits/3thumb.jpg')}
                            title="Platano"
                            desc="Banane longue avec une peau épaisse que l’on cuisine lorsque qu’elle est peu mure (afin qu’elle soit peu sucrée et riche en amidon) : frite, rôti ou bouillie "
                        />
                        <FruitItem
                            imgSrc={require('../../img/fruits/4thumb.jpg')}
                            title="Tomate de arbol "
                            desc="fruit peu connu qui se cultive entre 1500 a 2600 mètres d’altitude et entre 15 y 22°C – saveur aigre douce"
                        />
                        <FruitItem
                            imgSrc={require('../../img/fruits/5thumb.jpg')}
                            title="Azuki bean"
                            desc="Swiss chard pumpkin bunya nuts maize plantain aubergine napa cabbage soko coriander"
                        />
                        <FruitItem
                            imgSrc={require('../../img/fruits/6thumb.jpg')}
                            title="Azuki bean"
                            desc="Swiss chard pumpkin bunya nuts maize plantain aubergine napa cabbage soko coriander"
                        />
                        <FruitItem
                            imgSrc={require('../../img/fruits/7thumb.jpg')}
                            title="Mango"
                            desc="mangue – principales varietés cultivées en Equateur = Tommy Atkins, Haden, Kent y Keitt."
                        />
                        <FruitItem
                            imgSrc={require('../../img/fruits/8thumb.jpg')}
                            title="Kiwi"
                            desc="Swiss chard pumpkin bunya nuts maize plantain aubergine napa cabbage soko coriander"
                        />
                        <FruitItem
                            imgSrc={require('../../img/fruits/9thumb.jpg')}
                            title="Azuki bean"
                            desc="Swiss chard pumpkin bunya nuts maize plantain aubergine napa cabbage soko coriander"
                        />
                        <FruitItem
                            imgSrc={require('../../img/fruits/10thumb.jpg')}
                            title="Papaya"
                            desc="Les tailles varient beaucoup entre les variétés : entre 400 g à 2 kilos. Appréciés car sucrés et rafraichissants"
                        />
                        <FruitItem
                            imgSrc={require('../../img/fruits/11thumb.jpg')}
                            title="Babaco"
                            desc="Saveur similaire à un mélange d’ananas, de fraise et d’orange"
                        />
                        <FruitItem
                            imgSrc={require('../../img/fruits/12thumb.jpg')}
                            title="Piña"
                            desc="ananas - 5750 hectares d’ananas – le deuxième fruit le plus exporté "
                        />


                        <FruitItem
                            imgSrc={require('../../img/fruits/Araçá.jpg')}
                            title="Araçá"
                            desc="Un fruit !"
                        />

                        <FruitItem
                            imgSrc={require('../../img/fruits/Banano - Guineo.jpg')}
                            title="Banano/Guineo"
                            desc="Banane équatorienne, fruit tendre et sucré que l’on mange cru"
                        />
                        <FruitItem
                            imgSrc={require('../../img/fruits/Coco.jpg')}
                            title="Coco"
                            desc="En équateur, très utilisé dans des plats d’origine afro "
                        />
                        <FruitItem
                            imgSrc={require('../../img/fruits/Guanábana.jpg')}
                            title="Guanábana"
                            desc="Un fruit !"
                        />



                        <FruitItem
                            imgSrc={require('../../img/fruits/melon.jpg')}
                            title="Melon "
                            desc=""
                        />
                        <FruitItem
                            imgSrc={require('../../img/fruits/Naranja.jpg')}
                            title="Naranja"
                            desc="Il en existe trois types (naval, blanca, sanguina) qui se divisent eux même en 21 variété"
                        />
                        <FruitItem
                            imgSrc={require('../../img/fruits/Naranjilla.jpg')}
                            title="Naranjilla"
                            desc="la variété qui se cultive en Equateur ne contient pas d’épines sur la peau, il se dit que c’est une variété indigène."
                        />
                        <FruitItem
                            imgSrc={require('../../img/fruits/Noni.jpg')}
                            title="Noni"
                            desc="Pulpe dense de couleur chocolat. Mauvais goût et odeur mais beaucoup utilisé en jus avec d’autres fruits pour ses fonctions thérapeutiques"
                        />
                        <FruitItem
                            imgSrc={require('../../img/fruits/Pepino dulce.jpg')}
                            title="Pepino dulce"
                            desc=""
                        />
                        <FruitItem
                            imgSrc={require('../../img/fruits/plátano maqueno.jpg')}
                            title="Plátano maqueno"
                            desc="Variété de plátano de forme légèrement arrondie avec une peau rose-rouge et une pulpe collante sucrée"
                        />
                        <FruitItem
                            imgSrc={require('../../img/fruits/Sandia.jpg')}
                            title="Sandia"
                            desc="pastèque - fruit composé à 93% d’eau ! 4 variétés de pastèque sont cultivées en Equateur sur les 50 existantes"
                        />
                        <FruitItem
                            imgSrc={require('../../img/fruits/Taxo = Tumbo.jpg')}
                            title="Taxo"
                            desc="Variété de plátano de forme légèrement arrondie avec une peau rose-rouge et une pulpe collante sucrée"
                        />
                        <FruitItem
                            imgSrc={require('../../img/fruits/Toronjo.jpg')}
                            title="Toronjo"
                            desc="Pamplemousse – 400 hectares de pamplemoussiers sur la côte équatorienne pour 3 variétés "
                        />


                    </ul>
                </div>
            </div>
        );


    }


}
 export default Fruits;