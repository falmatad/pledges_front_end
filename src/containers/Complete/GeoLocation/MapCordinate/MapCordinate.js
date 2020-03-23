import React from 'react'

export default function MapCordinate() {
    return (
        <div className="container display-noneS task-report-stage shadow-sm mb-3">
        <div className="mx-0 mt-3 pt-0 rounded-lg ">
            <div className="row mx-0 px-0">
            <div className="col-5 bg-secondary temporary-background-image" />
            <div className="col border-left  bg-white">
                <h2 className="pl-4 text-primary h2 mt-5 mb-2">ENTER CORDINATES</h2>
                <p className="ml-4 border-bottom pb-3">
                Please enter the coordinates <br />
                you may use others programs like <b>Google Earth</b>,{" "}
                <b>Google Maps</b> to find the coordinates of the location (where the
                plan is being implemented)
                </p>
                <div className="send-sms-containner mt-4 px-4">
                <form>
                    <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Position X</label>
                    <input
                        type="number"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                    />
                    </div>
                    <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Position Y</label>
                    <input
                        type="number"
                        className="form-control"
                        id="exampleInputPassword1"
                    />
                    </div>
                    <button type="submit" className="btn btn-primary">
                    Submit
                    </button>
                </form>
                </div>
                <div className="pt-3 mb-4 text-right mr-4 border-top mt-3">
                <button className="btn btn-success btn-lg">
                    Save &amp; Continue
                </button>
                </div>
            </div>
            </div>
        </div>
        </div>
    )
}
