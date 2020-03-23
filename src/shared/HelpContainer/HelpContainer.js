import React, { Component } from 'react'

export default class HelpContainer extends Component {
    render() {
        return (
            <div id="helpDivContainer" className="help-div-containner display-none">
            <div className="help-header">
                <h1>Help</h1>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
            </div>
            <p>Move</p>
            <p>this</p>
            <p>DIV</p>
            </div>
        )
    }
}
