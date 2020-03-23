import React, { Component } from 'react'

export default class SetTarget extends Component {
    render() {
        return (
            <div className="container pt-4">
            <div className="row mx-0 px-2">
                <div className="col-4">
                <div className="items-containner pt-2 pl-0 mr-3">
                    <h2 className="h2 text-secondary">Items</h2>
                    <div className="items-list">
                    <div className="alert bg-white shadow-sm py-2 border border-success border border-2">
                        <h5 className="h4">Maize</h5>
                        <p className="mb-1 mt-n2 text-secondary">Lorem ipsum dolor sit.</p>
                    </div>
                    <div className="alert bg-white shadow-sm py-2 border border-secondary">
                        <h5 className="h4">Maize</h5>
                        <p className="mb-1 mt-n2 text-secondary">Lorem ipsum dolor sit.</p>
                    </div>
                    <div className="alert bg-white shadow-sm py-2 border border-secondary">
                        <h5 className="h4">Maize</h5>
                        <p className="mb-1 mt-n2 text-secondary">Lorem ipsum dolor sit.</p>
                    </div>
                    </div>
                </div>
                </div>
                <div className="col bg-white py-3 px-4 rounded-lg shadow-sm">
                <div className="bg-white">
                    <h1 className="h1 pt-2">Maize</h1>
                    <p className="mt-n2 text-secondary">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, dicta?
                    </p>
                    <div className="pt-3 w-75">
                    <label htmlFor="validationServer02">Last name</label>
                    <input
                        type="number"
                        className="form-control  form-control-lg is-invalids"
                        id="validationServer02"
                        defaultValue="Otto"
                        required
                    />
                    <div className="invalid-feedback">Looks good!</div>
                    </div>
                    <button className="btn btn-lg btn-primary mt-3">
                    Save &amp; Continue
                    </button>
                </div>
                </div>
                <div className="col-3 bg-white ml-3 px-0">
                <div className="bg-info text-white px-3 py-3">
                    <h6 className="h6 mb-0">TARGET INFO</h6>
                    <h4 className="h3 mb-0">Maise</h4>
                </div>
                <div className="px-3">
                    <section className="px-3 pt-3 border-bottom">
                    <p className="p-x0 m-0 mb-n1">Baseline</p>
                    <h2 className="h2 p-0 mx-0 pt-n2">123 ha</h2>
                    </section>
                    <section className="px-3 pt-2 border-bottom">
                    <p className="p-x0 m-0 mb-n1">Target</p>
                    <h2 className="h2 p-0 mx-0 pt-n2">123 ha</h2>
                    </section>
                    <section className="px-3 pt-2">
                    <p className="p-x0 m-0 mb-n1">Difference</p>
                    <h2 className="h2 p-0 mx-0 pt-n2 text-primary">123 ha</h2>
                    </section>
                </div>
                </div>
            </div>
            </div>
        )
    }
}
