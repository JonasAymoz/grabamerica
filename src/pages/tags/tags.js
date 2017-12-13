import React from 'react';
import Slider from 'react-slick';
import tag2 from '../../img/tags/2-tags.JPG';
import tag3 from '../../img/tags/3-tags.JPG';
import tag4 from '../../img/tags/4-tags.JPG';
import tag5 from '../../img/tags/5-tags.JPG';
import tag6 from '../../img/tags/6-tags.JPG';
import tag7 from '../../img/tags/7-tags.JPG';
import tag8 from '../../img/tags/8-tags.JPG';
import tag9 from '../../img/tags/9-tags.JPG';
import tag10 from '../../img/tags/10-tags.JPG';
import tag11 from '../../img/tags/11-tags.JPG';
import tag12 from '../../img/tags/12-tags.JPG';
import tag13 from '../../img/tags/13-tags.JPG';
import tag14 from '../../img/tags/14-tags.JPG';
import tag15 from '../../img/tags/15-tags.JPG';
import tag16 from '../../img/tags/16-tags.JPG';
import tag17 from '../../img/tags/17-tags.JPG';
import tag18 from '../../img/tags/18-tags.JPG';
import tag19 from '../../img/tags/19-tags.JPG';
import tag20 from '../../img/tags/20-tags.JPG';
import tag21 from '../../img/tags/21-tags.JPG';
import tag22 from '../../img/tags/22-tags.JPG';
import tag23 from '../../img/tags/23-tags.JPG';
import tag24 from '../../img/tags/24-tags.JPG';
import tag25 from '../../img/tags/25-tags.JPG';
import tag26 from '../../img/tags/26-tags.JPG';
import tag27 from '../../img/tags/27-tags.JPG';
import tag28 from '../../img/tags/28-tags.JPG';
import tag29 from '../../img/tags/29-tags.JPG';
import tag30 from '../../img/tags/30-tags.JPG';
import tag31 from '../../img/tags/31-tags.JPG';
import tag32 from '../../img/tags/32-tags.JPG';
import tag33 from '../../img/tags/33-tags.JPG';
import tag34 from '../../img/tags/34-tags.JPG';
import tag35 from '../../img/tags/35-tags.JPG';
import tag36 from '../../img/tags/36-tags.JPG';
import tag37 from '../../img/tags/37-tags.JPG';
import tag38 from '../../img/tags/38-tags.JPG';
import tag39 from '../../img/tags/39-tags.JPG';
import tag40 from '../../img/tags/40-tags.JPG';
import tag41 from '../../img/tags/41-tags.JPG';
import tag42 from '../../img/tags/42-tags.JPG';
import tag43 from '../../img/tags/43-tags.jpg';


class Tags extends React.Component {



    render() {

        var settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            lazyLoad : true,
        };

        return (

            <div className="sliderContainer">
            <div className="blackBg"></div>
                <div className="titleSlider">
                    <h2>Musee A ciel Ouvert</h2>
                    <span className="btn btn-primary"> <a  href="http://webdoc.grabamerica.fr/#valparaisoMenu" alt="gotoMenu"> Revenir à Valparaiso </a></span>
                </div>
            <Slider {...settings}>
                <div><img src={tag17} alt="img"/></div>
                <div><img src={tag2} alt="img"/></div>
                <div><img src={tag3} alt="img"/></div>
                <div><img src={tag4} alt="img"/></div>
                <div><img src={tag5} alt="img"/></div>
                <div><img src={tag6} alt="img"/></div>
                <div><img src={tag7} alt="img"/></div>
                <div><img src={tag8} alt="img"/></div>
                <div><img src={tag9} alt="img"/></div>
                <div><img src={tag10} alt="img"/></div>
                <div><img src={tag11} alt="img"/></div>
                <div><img src={tag12} alt="img"/></div>
                <div><img src={tag13} alt="img"/></div>
                <div><img src={tag14} alt="img"/></div>
                <div><img src={tag15} alt="img"/></div>
                <div><img src={tag16} alt="img"/></div>
                <div><img src={tag18} alt="img"/></div>
                <div><img src={tag19} alt="img"/></div>
                <div><img src={tag20} alt="img"/></div>
                <div><img src={tag21} alt="img"/></div>
                <div><img src={tag22} alt="img"/></div>
                <div><img src={tag23} alt="img"/></div>
                <div><img src={tag24} alt="img"/></div>
                <div><img src={tag25} alt="img"/></div>
                <div><img src={tag26} alt="img"/></div>
                <div><img src={tag27} alt="img"/></div>
                <div><img src={tag28} alt="img"/></div>
                <div><img src={tag29} alt="img"/></div>
                <div><img src={tag30} alt="img"/></div>
                <div><img src={tag31} alt="img"/></div>
                <div><img src={tag32} alt="img"/></div>
                <div><img src={tag33} alt="img"/></div>
                <div><img src={tag34} alt="img"/></div>
                <div><img src={tag35} alt="img"/></div>
                <div><img src={tag36} alt="img"/></div>
                <div><img src={tag37} alt="img"/></div>
                <div><img src={tag38} alt="img"/></div>
                <div><img src={tag39} alt="img"/></div>
                <div><img src={tag40} alt="img"/></div>
                <div><img src={tag41} alt="img"/></div>
                <div><img src={tag42} alt="img"/></div>
                <div><img src={tag43} alt="img"/></div>
            </Slider>
            </div>
        );

    }
}

export default Tags;