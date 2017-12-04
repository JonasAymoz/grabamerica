

import React, { PureComponent } from 'react';

class VisitedIcon extends PureComponent {

    render(){
        return <div className="visitedIcon">
                <svg version="1.2" baseProfile="tiny" id="Layer_1"
                     x="0px" y="0px" width="20px" height="20px" viewBox="0 0 20 20" >
                <circle fill="#AFD137" cx="9.871" cy="10.219" r="9.01"/>
                <polyline fill="none" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" points="
                    4.833,10.813 8.424,14.321 15.231,7.305 "/>
                </svg>
            </div>

    }

}

export default VisitedIcon;