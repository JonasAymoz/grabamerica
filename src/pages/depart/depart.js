import React, { Component } from 'react';
import cameraPic from '../../img/camera.png';
import visaCuba from '../../img/visaCuba.png';


class Depart extends Component {

    constructor() {
        super();
        this.state = {
            camera : false,
            visa : false,
            msg : ""
        }
    }

    handleFormSubmit = formSubmitEvent => {
        formSubmitEvent.preventDefault();
        if (this.state.camera && this.state.visa){
            window.location.assign('http://webdoc.grabamerica.fr');
        }
    }

    onCheckboxClicked = label => {
        var newValue = !this.state[label];
        this.setState({
            [label] : newValue
        })
    }

    render (){
        return (
            <div className="depart d-flex flex-row col map-bg">
                <div className="col col1">

                    <h1>Avant de partir, n'oubliez pas </h1>
                    <form onSubmit={this.handleFormSubmit}>
                        <fieldset className="Control-group checkup">
                            <legend>Il vous faudra </legend>

                            <label className="control control--checkbox">Un appareil photo
                                <input type="checkbox" onChange={() => this.onCheckboxClicked("camera")}/>
                                <div className="control__indicator"></div>
                            </label>
                            <label className="control control--checkbox">Un visa valide
                                <input type="checkbox" onChange={() => this.onCheckboxClicked("visa")}/>
                                <div className="control__indicator"></div>
                            </label>

                        </fieldset>

                        <button className={"btn btn-primary btn-lg btn-graba " + ((this.state.visa && this.state.camera)? "" : " disabled")} type="submit">Aller, on y va !</button>
                    </form>
                </div>
                <div className="col">
                    {this.state.camera}
                    <img className={(this.state.camera?"display" : "") + " camera"} src={cameraPic} alt={"camera"}></img>
                    <img className={(this.state.visa?"display" : "") + " visa"} src={visaCuba} alt={"visa"}></img>
                </div>
            </div>
        );
    }
}

export default Depart ;