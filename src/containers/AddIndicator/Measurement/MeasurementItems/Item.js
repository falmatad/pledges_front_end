import React from 'react'

export default function Item() {
    return (
        <div className="alert bg-white shadow-sm py-2 mb-2 border border-success border border-2">
        <button
            className="btn btn-danger btn-sm"
            style={{ float: "right" }}
        >
            Delete
        </button>
        <h5 className="h5">Maize</h5>
        <p className="mb-1 mt-n2 text-secondary">
            Lorem ipsum dolor sit.
        </p>
        </div>
    )
}
