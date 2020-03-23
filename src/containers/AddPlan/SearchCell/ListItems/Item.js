import React from 'react'

export default function Item() {
    return (
        <div
        className="list-group-item list-group-item-action"
        >
        <div className="d-flex w-100 justify-content-between">
            <h5 className="mb-1">Nengo</h5>
            <small className="badge bg-success text-white">Done</small>
        </div>
        <p className="mb-1">
            District > Sector > Cell
        </p>
        </div>
    )
}
