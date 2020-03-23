import React from 'react'

import BudgetDetails from './BudgetDetails/BudgetDetails';

export default function SetBudget() {
    return (
        <div className="container pt-4 mb-3">
            <div className="row mx-0 px-2">
            <div className="col bg-white py-3 px-4 rounded-lg shadow-sm">
                <div className="bg-white">
                <h1 className="h1 pt-2">SET BUDGET</h1>
                <p className="mt-n2 text-secondary">
                    Enter the Budget For Nengo
                </p>
                <div className="pt-3 w-75">
                    <label htmlFor="validationServer02">Enter cash</label>
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
            
            <BudgetDetails />


            </div>
        </div>
    )
}
