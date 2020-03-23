import React from 'react'

import ListItems from './ListItems/ListItems'

export default function SearchCell() {
    return (
        <div className="container pt-0 display-noned shadow-sm">
            <div className="bg-white mt-3 rounded p-4">
            <h1 className="h2 font-weight-light mb-0 pb-1 mt-n2">SEARCH CELL</h1>
            <form>
                <p className="pb-2 border-bottomX">
                    This is the cell where the Plan is being implemented
                </p>
                <div className="row mx-0 mt-n2">
                <div className="col  ml-n3 mr-n2">
                    <input
                    type="search"
                    className="form-control mx-0 px-0"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    />
                </div>
                <div className="col-1 ml-n4">
                    <button className="btn btn-primary">Search</button>
                </div>
                </div>
                <div className="search-data-research pt-3 border-top mt-3">
                <ListItems />
                </div>
            </form>
            <div className="text-right mt-4 px-1 sborder-top">
                <button type="submit" className="btn btn-lg btn-success">
                Continue
                </button>
            </div>
            </div>
        </div>
    )
}
