import React from 'react'

export default function Budget() {
    return (
        <div className="container display-nones mt-3 py-0 task-report-stage">
        <div className="mx-0 mt-3 pt-0 rounded-lg shadow-sm bg-white">
        <h2 className="h2 border-bottom pl-4 p-2 m-0 font-weight-normal">
            BUDGET
        </h2>
        <div className="row mx-0 mt-0">
            <div className="col-4 bg-secondary">
            <br />
            <br />
            <br />
            <h2 className="h2">Pie Chart</h2>
            <br />
            <br />
            <br />
            <br />
            </div>
            <div className="col pt-3 pl-5">
            <h3 className="h3 pb-2 border-bottom text-secondary">Budget</h3>
            <h5 className="h6 mb-0">Used Budget</h5>
            <h1 className="h1 mt-n1 border-bottom pb-2">23,232,422.2 Rfw</h1>
            <h6 className=" pb-1 mb-0 text-secondary">
                Current budget was:
                {/* <b class="text-body">12,232,232 frw</b> */}
                <b className="text-body badge bg-primary">
                <h6 className="m-0 text-white">12,232,232 frw</h6>
                </b>
            </h6>
            <h6 className=" pb-1 text-secondary">
                {" "}
                budget was:
                <b className="text-body badge bg-primary">
                <h6 className="m-0 text-white">12,232,232 frw</h6>
                </b>
            </h6>
            </div>
        </div>
        <div className=" mx-0 border-top p-3 text-right">
            <button className="btn btn-warning">View evalluation</button>
        </div>
        </div>
    </div>
    )
}
