import React from 'react'

const CheckSelected = () => {
    return (
            <div className="container pt-0 display-nones">
                <div className="bg-white mt-3 shadow-sm rounded p-4">
                <h2 className="h2 text-center mt-1">Check selected or Modify</h2>
                <h6 className="text-center mx-4 text-secondary border-bottom mt-n2 pb-3">
                    Check if the selected items are correct and chick to change if
                    neccesarry
                </h6>
                <form>
                    <div className="mx-4 pt-4">
                    <div className="row mx-2 mb-3">
                        <div className="col">
                        <div className="form-group">
                            <label htmlFor="exampleFormControlInput1">Pillar</label>
                            <input
                            type="text"
                            className="form-control"
                            id="exampleFormControlInput1"
                            placeholder
                            />
                        </div>
                        </div>
                        <div className="col">
                        <div className="form-group">
                            <label htmlFor="exampleFormControlInput1">Sector</label>
                            <input
                            type="text"
                            className="form-control"
                            id="exampleFormControlInput1"
                            placeholder
                            />
                        </div>
                        </div>
                    </div>
                    <div className="row mx-2">
                        <div className="col">
                        <div className="form-group">
                            <label htmlFor="exampleFormControlInput1">Outcome</label>
                            <input
                            type="text"
                            className="form-control"
                            id="exampleFormControlInput1"
                            placeholder
                            />
                        </div>
                        </div>
                        <div className="col">
                        <div className="form-group">
                            <label htmlFor="exampleFormControlInput1">Output</label>
                            <input
                            type="text"
                            className="form-control"
                            id="exampleFormControlInput1"
                            placeholder
                            />
                        </div>
                        </div>
                    </div>
                    <div className="text-right px-1 mx-3 mt-3">
                        <button type="submit" className="btn btn-lg btn-primary">
                        Continue
                        </button>
                    </div>
                    </div>
                </form>
                </div>
            </div>
    )
}

export default CheckSelected;