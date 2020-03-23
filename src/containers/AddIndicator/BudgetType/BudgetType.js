import React from 'react'

export default function BudgetType() {
    return (
        <div className="container display-nones task-report-stage">
            <div className="mx-0 mt-3 pt-2 rounded-lg shadow-sm bg-white">
            <form>
                <div className="row px-4">
                <div className="col">
                    <h2 className="h2 pt-2 pl-4 mb-2 mt-3 font-weight-normal">
                    MAX BUDGET
                    </h2>
                    <div className="px-4 py-3">
                    <p className="mt-n3 border-bottom pb-3">
                        The maximum budget is the total of all sub-indicators. this will
                        help you to track the progress of the budget.
                    </p>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Enter budget</label>
                        <input
                        type="number"
                        className="form-control form-control-lg"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        />
                        {/* <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small> */}
                    </div>
                    </div>
                </div>
                <div className="col border-left">
                    <h2 className="h2 pt-2 pl-4 mb-2 mt-3 font-weight-normal">
                    MAX BUDGET
                    </h2>
                    <div className="px-4 py-3">
                    <p className="mt-n3 border-bottom pb-3">
                        The maximum budget is the total of all sub-indicators. this will
                        help you to track the progress of the budget.
                    </p>
                    <div className="form-group">
                        <label htmlFor="exampleFormControlSelect1">
                        Example select
                        </label>
                        <select className="form-control" id="exampleFormControlSelect1">
                        <option />
                        <option>Increment</option>
                        <option>Decrement</option>
                        <option>Percentage</option>
                        </select>
                    </div>
                    </div>
                </div>
                </div>
                <div className="sub-footer p-3 mb-n2 text-right border-top mt-1 mr-4">
                <button className="btn btn-success btn-lg">Continue</button>
                </div>
            </form>
            </div>
        </div>
    )
}
