import React, { Component } from 'react'

export default class Evaluate extends Component {
    render() {
        return (
            <div className="modal add-task-modal">
            <div className="modal-dialog modal-lg">
                <div className="modal-content">
                <div className="modal-header bg-primary">
                    <h5 className="modal-title text-white">EVALUATE</h5>
                    <button
                    type="button"
                    className="close text-white"
                    data-dismiss="modal"
                    aria-label="Close"
                    >
                    <span aria-hidden="true">×</span>
                    </button>
                </div>
                <div className="modal-body px-4 mb-n3">
                    {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam nam consequatur molestias ipsa, recusandae natus cupiditate ducimus deleniti at officia!</p> */}
                    <form>
                    <b>What do you think of this summary:</b>
                    <div className="row mx-0 pt-1">
                        <div className="col mx-0 px-1">
                        <button
                            type="button"
                            className="btn btn-success btn-lg btn-block"
                        >
                            Agree
                        </button>
                        </div>
                        <div className="col mx-0 px-1">
                        <button
                            type="button"
                            className="btn btn-warning btn-lg btn-block"
                        >
                            Not sure
                        </button>
                        </div>
                        <div className="col mx-0 px-1">
                        <button type="button" className="btn btn-danger btn-lg btn-block">
                            Disagree
                        </button>
                        </div>
                    </div>
                    <hr />
                    <div className="form-group">
                        <label htmlFor="exampleFormControlTextarea1">
                        Example textarea
                        </label>
                        <textarea
                        className="form-control border-success"
                        style={{ border: "3px solid" }}
                        id="exampleFormControlTextarea1"
                        rows={3}
                        defaultValue={""}
                        />
                    </div>
                    </form>
                </div>
                <div className="modal-footer border-0">
                    <button
                    type="button"
                    className="btn btn-secondary"
                    data-dismiss="modal"
                    >
                    Close
                    </button>
                    <button type="button" className="btn btn-primary">
                    Save Evaluation
                    </button>
                </div>
                </div>
            </div>
            </div>
        )
    }
}
