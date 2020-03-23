import React from 'react'
import MeasurementItems from './MeasurementItems/MeasurementItems'

export default function Measurement() {
    return (
            <div className="container pt-3 display-noned">
                <div className="row mx-0 px-2">
                <div className="col bg-white py-3 px-4 rounded-lg shadow-sm">
                    <div className="bg-white">
                    <h1 className="h2 pt-2">Measurements</h1>
                    <p className="mt-n2 text-secondary border-bottom pb-2">
                        baseline measurement are the type of measurement, that will depend
                        on the baseline, target and reporting
                    </p>
                    <form>
                        <div className="form-group">
                        <label htmlFor="exampleFormControlInput1">Name</label>
                        <input
                            type="text"
                            className="form-control"
                            id="exampleFormControlInput1"
                            placeholder="Name"
                        />
                        </div>
                        <div className="form-group">
                        <label htmlFor="exampleFormControlTextarea1">Description</label>
                        <textarea
                            className="form-control"
                            id="exampleFormControlTextarea1"
                            rows={3}
                            defaultValue={""}
                        />
                        </div>
                        <div className="form-group">
                        <label htmlFor="exampleFormControlInput1">Unit</label>
                        <input
                            type="text"
                            className="form-control"
                            id="exampleFormControlInput1"
                            placeholder="Name"
                        />
                        </div>
                    </form>
                    <button className="btn btn-lg btn-primary mt-3">Continue</button>
                    </div>
                </div>
                <div className="col bg-white">
                    <div className="items-containner pt-2 pl-0 mr-3 px-3">
                    <h2 className="h3 text-secondary border-bottom pb-2 pt-2">
                        Baseline Mesurement
                    </h2>
                    <MeasurementItems />
                    </div>
                </div>
                </div>
            </div>
    )
}
