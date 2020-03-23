import React, { Component } from 'react'

export default class SearchUser extends Component {
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
                        <div className="row mx-0 px-0 pt-2 border-bottom">
                        <div className="col">
                            <input
                            className="form-control"
                            type="text"
                            placeholder="Default input"
                            />
                        </div>
                        <div className="col-2 ml-n4">
                            <button type="submit" className="btn w-100 btn-primary mb-2">
                            Search{" "}
                            </button>
                        </div>
                        </div>
                        <div className="contents-data">
                        <div className="card mb-2 mx-3 mt-2">
                            <div className="row no-gutters">
                            <div className="col-2 bg-secondary">
                                <img src="..." className="card-img" alt="..." />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                <h5 className="card-title mt-n2">4561328543256432165</h5>
                                <b className="card-text m-0 clear-both">
                                    {" "}
                                    MUHAWENIMANA Janvier{" "}
                                </b>
                                <p className="card-text m-0">
                                    <small className="text-muted">
                                    {" "}
                                    janviermuhawenimana@gmail.com{" "}
                                    </small>
                                </p>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="card mb-2 mx-3 mt-2">
                            <div className="row no-gutters">
                            <div className="col-2 bg-secondary">
                                <img src="..." className="card-img" alt="..." />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                <h5 className="card-title mt-n2">4561328543256432165</h5>
                                <b className="card-text m-0 clear-both">
                                    {" "}
                                    MUHAWENIMANA Janvier{" "}
                                </b>
                                <p className="card-text m-0">
                                    <small className="text-muted">
                                    {" "}
                                    janviermuhawenimana@gmail.com{" "}
                                    </small>
                                </p>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="card mb-2 mx-3 mt-2">
                            <div className="row no-gutters">
                            <div className="col-2 bg-secondary">
                                <img src="..." className="card-img" alt="..." />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                <h5 className="card-title mt-n2">4561328543256432165</h5>
                                <b className="card-text m-0 clear-both">
                                    {" "}
                                    MUHAWENIMANA Janvier{" "}
                                </b>
                                <p className="card-text m-0">
                                    <small className="text-muted">
                                    {" "}
                                    janviermuhawenimana@gmail.com{" "}
                                    </small>
                                </p>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                        <div className="modal-footer border-top">
                        <button
                            type="button"
                            className="btn mt-n1 mb-n1 btn-outline-danger"
                            data-dismiss="modal"
                        >
                            Close
                        </button>
                        {/* <button type="button" class="btn btn-primary">Save changes</button> */}
                        </div>
                    </form>
                    </div>
                </div>
                </div>
                                
            </div>
        )
    }
}
