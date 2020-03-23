import React from 'react'

export default function NameSource() {
    return (
        <div className="container pt-0 display-noned">
            <div className="bg-white mt-3 shadow-sm rounded p-4">
            <form>
                <div className="form-group">
                <label htmlFor="exampleFormControlTextarea1">Indicator name</label>
                <textarea
                    className="form-control"
                    id="exampleFormControlTextarea1"
                    rows={3}
                    defaultValue={""}
                />
                </div>
                <div className="form-group">
                <label htmlFor="exampleFormControlInput1">Source of data</label>
                <input
                    type="text"
                    className="form-control"
                    id="exampleFormControlInput1"
                    placeholder="Source of data"
                />
                </div>
                <div className="text-right px-1">
                <button type="submit" className="btn btn-lg btn-primary">
                    Continue
                </button>
                </div>
            </form>
            </div>
        </div>
    )
}
