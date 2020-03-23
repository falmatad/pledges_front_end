import React from 'react'

export default function BudgetDetails() {
    return (
        <div className="col bg-white rounded ml-3 px-0 shadow-sm">
        <div className="bg-info text-white rounded-top px-3 py-3">
        <h4 className="h3 mb-0">BUDGET DETAILS</h4>
        </div>
        <div className="px-3">
        <div className="progress-budget-insert mt-4 mb-2 shadow-sm">
            <div
            className="current-budget-bar bg-warning rounded-left"
            style={{ width: "20%" }}
            />
            <div
            className="current-budget-inserted bg-danger"
            style={{ width: "30%" }}
            />
            <div
            className="current-budget-remaining bg-success rounded-right"
            style={{ width: "50%" }}
            />
            <section className="clear-both" />
        </div>
        <section
            className="px-1 pt-3 pb-n2 border-bottom clear-both"
            style={{ color: "#ca7a03" }}
        >
            <p className="p-x0 m-0 mb-n1">Current used Budget</p>
            <h2
            className="h4 p-0 mx-0 pt-n2 font-weight-bold"
            style={{ color: "#ca7a03" }}
            >
            13,234,123.00 Rfw
            </h2>
        </section>
        <section className="px-1 pt-1 border-bottom clear-both">
            <p className="p-x0 m-0 mb-n1 text-danger">Entered Budget</p>
            <h2 className="h4 p-0 mx-0 pt-n2 font-weight-bold text-danger">
            13,234,123.00 Rfw
            </h2>
        </section>
        <section className="px-1 pt-1 pb-3 border-bottom clear-both">
            <p className="p-x0 m-0 mb-n1 text-success">Remaining budget</p>
            <h2 className="h4 p-0 mx-0 pt-n2 font-weight-bold text-success">
            13,234,123.00 Rfw
            </h2>
        </section>
        </div>
    </div>

    )
}
