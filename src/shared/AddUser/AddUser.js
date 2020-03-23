import React, { Component } from 'react'

export default class AddUser extends Component {
    render() {
        return (
            <div>
                <div className="modal add-task-modal" role="dialog">
                <div className="modal-dialog modal-lg" role="document">
                    <div className="modal-content">
                    <div className="modal-header bg-primary">
                        <h5 className="modal-title text-white">Modal title</h5>
                        <button
                        type="button"
                        className="close text-white"
                        data-dismiss="modal"
                        aria-label="Close"
                        >
                        <span aria-hidden="true">×</span>
                        </button>
                    </div>
                    <form className="form-inlined">
                        <div className="contents-data">
                        <p className="px-4 pt-2 pb-2 w-75">
                            the user you are recording will receive an email that will give
                            him/she the access to the system. the rest of the contents will be
                            completed by himself <br />
                            <i className="text-danger">
                            (so make sure the email is written correctly){" "}
                            </i>
                        </p>
                        <div className="px-4">
                            <div className="px-4">
                            <div className="form-group">
                                <label htmlFor="exampleInputEmail1">Id</label>
                                <input
                                type="number"
                                className="form-control"
                                id="exampleInputEmail1"
                                aria-describedby="emailHelp"
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputEmail1">Email</label>
                                <input
                                type="number"
                                className="form-control"
                                id="exampleInputEmail1"
                                aria-describedby="emailHelp"
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputEmail1">Phone number</label>
                                <input
                                type="number"
                                className="form-control"
                                id="exampleInputEmail1"
                                aria-describedby="emailHelp"
                                />
                            </div>
                            </div>
                        </div>
                        </div>
                    </form>
                    <div className="modal-footer border-top">
                        <button
                        type="button"
                        className="btn mt-n1 mb-n1 btn-outline-danger"
                        data-dismiss="modal"
                        >
                        Close
                        </button>
                        <button type="button" className="btn btn-primary">
                        Save changes
                        </button>
                    </div>
                    </div>
                </div>
                </div>
                
            </div>
        )
    }
}
