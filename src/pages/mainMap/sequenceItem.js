import React, { PureComponent } from 'react';
import { instanceOf } from 'prop-types';
import VisitedIcon from './visitedIcon';
import thumbImg from '../../img/thumb.jpg';

class SequenceItem extends PureComponent {

    constructor() {
        super();
    }

    render () {
        return  (
            <div >
                <a href={this.props.sequence.url}>
                    <li className="media" >
                        {this.props.visitedSequences.includes(this.props.sequence.id)? <VisitedIcon/> : ""}
                        <img className="d-flex mr-3" src={thumbImg} alt="Sequence Thumb"/>
                        <div className="media-body">
                            <h4 className="mt-0 mb-1"> {this.props.sequence.nom}</h4>
                            {this.props.sequence.desc}
                        </div>
                    </li>
                </a>
            </div>
        );
    }
}

export default SequenceItem;