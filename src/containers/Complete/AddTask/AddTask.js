import React from 'react'
import Modal from './Modal/Modal'

export default function AddTask() {
    return (
        <React.Fragment>

        <div className="container task-report-stage">
        <div
            className="mx-0 mt-3 pt-2 rounded-lg shadow-sm bg-white"
            title="The tasks are the additional to the sub-pledgles. once it is done it checked and apear in the report"
        >
            <h2 className="h2 ml-4 mb-1 font-weight-normal">TASKS</h2>
            <div className="row mx-0 px-2 border-top border-bottom">
            <div className="col py-1 px-4 border-right">
                <h4 className="h5 text-primary mt-3 font-weight-bold">
                COUNTRY (LEVEL) TASK
                </h4>
                <table className="table table-striped mt-2">
                <thead>
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">First</th>
                    <th scope="col">Last</th>
                    <th scope="col">Handle</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    </tr>
                    <tr>
                    <th scope="row">2</th>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                    </tr>
                    <tr>
                    <th scope="row">3</th>
                    <td>Larry</td>
                    <td>the Bird</td>
                    <td>@twitter</td>
                    </tr>
                </tbody>
                </table>
            </div>
            <div className="col py-1 px-4 border-right">
                <h4 className="h5 text-primary mt-3 font-weight-bold">
                COUNTRY (LEVEL) TASK
                </h4>
                <table className="table table-striped mt-2">
                <thead>
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">First</th>
                    <th scope="col">Last</th>
                    <th scope="col">Handle</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    </tr>
                    <tr>
                    <th scope="row">2</th>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                    </tr>
                    <tr>
                    <th scope="row">3</th>
                    <td>Larry</td>
                    <td>the Bird</td>
                    <td>@twitter</td>
                    </tr>
                </tbody>
                </table>
            </div>
            </div>
            <div className="sub-footer p-3 mb-4 text-right mr-4">
            <button className="btn btn-outline-primary btn-lg">Add Task</button>
            <button className="btn btn-success btn-lg">Save &amp; Continue</button>
            </div>
        </div>
        </div>

        <Modal />

        </React.Fragment>
    )
}
