import React from 'react'
import List from './List';

export default function Team() {
    return (
        <div className="container  task-report-stage">
        <div className="mx-0 mt-3 pt-0 rounded-lg shadow-sm bg-white">
        <div className="row m-0 bg-primary rounded-top">
            <div className="col-2">
            <h1 className="h1 text-white font-weight-bolder pt-2 pl-2">TEAM</h1>
            </div>
            <div className="col">
            <div className="row">
                <div className="col bg-info">
                <h6 className="pt-2 text-white text-center">ALL MEMBERS</h6>
                <h2 className="text-center text-white mt-n2 font-weight-bold">
                    6
                </h2>
                </div>
                <div className="col">
                <h6 className="pt-2 text-white text-center">REPORTERS</h6>
                <h2 className="text-center text-white mt-n2 font-weight-bold">
                    6
                </h2>
                </div>
                <div className="col bg-info">
                <h6 className="pt-2 text-white text-center">EVALUATOR</h6>
                <h2 className="text-center text-white mt-n2 font-weight-bold">
                    6
                </h2>
                </div>
            </div>
            </div>
            <div className="col text-right">
            <button className="btn btn-warning mt-3">Add member</button>
            </div>
        </div>

            <List count="4" title="UPDATORS" />
        <hr />
            <List count="2" title="EVALUATORS" />

        <hr />
        <div className="sub-footer p-3 mt-n3 mb-4 text-right mr-4">
            <button className="btn btn-success btn-lg">Continue</button>
        </div>
        </div>
    </div>
    )
}
