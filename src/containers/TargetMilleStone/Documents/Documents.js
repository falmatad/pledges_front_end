import React from 'react'

export default function Documents() {
    return (
        <div className="container display-nones mt-3 py-0 task-report-stage">
        <div className="mx-0 mt-3 pt-0 rounded-lg shadow-sm bg-white">
        <h2 className="h2 border-bottom pl-4 p-2 m-0 font-weight-normal">
            DOCUMENTS
        </h2>
        <div className="mt-3 px-4">
            <ul className="nav nav-tabs">
            <li className="nav-item">
                <b className="nav-link active" href="#">
                Active
                </b>
            </li>
            <li className="nav-item">
                <b className="nav-link font-weight-normal" href="#">
                Link
                </b>
            </li>
            <li className="nav-item">
                <b className="nav-link font-weight-normal" href="#">
                Link
                </b>
            </li>
            </ul>
        </div>
        {/* GALERY THUMBS */}
        <div className="images-thimbs p-4">
            <table className="table table-striped border-top-0">
            <thead>
                <tr>
                <th style={{ width: 60 }} scope="col">
                    #
                </th>
                <th scope="col">File name</th>
                <th style={{ width: 140 }} scope="col">
                    Type
                </th>
                <th style={{ width: 140 }} scope="col">
                    &nbsp;
                </th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <th scope="row">1</th>
                <td>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde,
                    repudiandae.
                </td>
                <td>
                    <span className="badge badge-danger">pdf</span>
                </td>
                <td>
                    <button className="btn btn-primary btn-sm">
                    View document
                    </button>
                </td>
                </tr>
                <tr>
                <th scope="row">2</th>
                <td>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Cupiditate, voluptate deserunt!
                </td>
                <td>
                    <span className="badge badge-info">images</span>
                </td>
                <td>
                    <button className="btn btn-primary btn-sm">
                    View document
                    </button>
                </td>
                </tr>
                <tr>
                <th scope="row">3</th>
                <td>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</td>
                <td>
                    <span className="badge badge-secondary">New</span>
                </td>
                <td>
                    <button className="btn btn-primary btn-sm">
                    View document
                    </button>
                </td>
                </tr>
            </tbody>
            </table>
        </div>
        <div className=" mx-0 border-top p-3 text-right">
            <button className="btn btn-warning">View evalluation</button>
        </div>
        </div>
    </div>
    )
}
