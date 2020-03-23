import React from 'react'

export default function Approve() {
    return (
        <div className="container display-nones mt-3 py-0 task-report-stage main-search-containner mb-5">
        <div className="mx-0 mt-3 pt-0 rounded-lg shadow-sm bg-white">
        <h2 className="h2 border-bottom pl-4 p-2 m-0 font-weight-normal">
            APPROVE REPORT
        </h2>
        {/* comment form */}
        <div className=" px-5 py-4 mt-n2">
            <h3 className="h3 text-secondary">
            Done by: <b className="text-body">Janvier</b>
            </h3>
            <p className="mt-3 pt-2 border-top p-3">
            once you approve this report, it will be apart of this target, and it
            will appear on the target milestone of this plan, and the budget, and
            all the numbers will be added to the main plan.
            </p>
            <button className="btn btn-success btn-lg px-5 py-3">
            APROVE REPORT
            </button>
            <button className="btn btn-danger ml-2 btn-lg px-5 py-3">
            REJECT REPORT
            </button>
        </div>
        </div>
    </div>
    )
}
