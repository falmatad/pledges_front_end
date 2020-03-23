import React from 'react'

export default function Target() {
    return (
        <div className="container pt-3">
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
        </div>
        </div>
    )
}
