import React from 'react'

export default function UploadDocs() {
    return (
        <div className="container task-report-stage">
        <div
            className="mx-0 mt-3 pt-2 rounded-lg shadow-sm bg-white"
            title="The tasks are the additional to the sub-pledgles. once it is done it checked and apear in the report"
        >
            <h2 className="h2 ml-4 mb-1 font-weight-normal">ADD DOCUMENTS</h2>
            <div className="row mx-0 px-2 border-top border-bottom">
            <div className="col">
                <form className="mt-3">
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1" className="font-weight-bold">
                    Drag your file here
                    </label>
                    <input
                    type="file"
                    className="form-control file-uploader-input-custom"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    />
                    {/* <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small> */}
                </div>
                <div className="row">
                    <div className="col">
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">File Name</label>
                        <input
                        type="password"
                        placeholder="File Title"
                        className="form-control"
                        id="exampleInputPassword1"
                        />
                    </div>
                    </div>
                    <div className="col-4">
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">&nbsp;</label>
                        <input
                        type="submit"
                        className="form-control btn btn-primary"
                        defaultValue="Upload File"
                        />
                    </div>
                    </div>
                </div>
                </form>
            </div>
            <div className="col border-left">
                <h3 className="h4 mt-2 mb-3 text-secondary">Files uploaded</h3>
                <div className="files-containner-stage mb-4">
                <div className="card file-item shadow-sm" style={{ maxWidth: 540 }}>
                    <div className="row no-gutters file-item">
                    <div className="col-md-3 file-icon-container bg-secondary text-white text-center">
                        <i className="fa fa-file " />
                    </div>
                    <div className="col-md-8 ml-n2">
                        <div className="card-body">
                        <h6 className="card-title mt-n2">Card title</h6>
                        <p className="card-text mt-n1 mb-n2 mx-0 px-0">
                            <button className="btn btn-sm btn-danger">Remove</button>
                        </p>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="card file-item shadow-sm" style={{ maxWidth: 540 }}>
                    <div className="row no-gutters file-item">
                    <div className="col-md-3 file-icon-container bg-secondary text-white text-center">
                        <i className="fa fa-file " />
                    </div>
                    <div className="col-md-8 ml-n2">
                        <div className="card-body">
                        <h6 className="card-title mt-n2">Card title</h6>
                        <p className="card-text mt-n1 mb-n2 mx-0 px-0">
                            <button className="btn btn-sm btn-danger">Remove</button>
                        </p>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="card file-item shadow-sm" style={{ maxWidth: 540 }}>
                    <div className="row no-gutters file-item">
                    <div className="col-md-3 file-icon-container bg-secondary text-white text-center">
                        <i className="fa fa-file " />
                    </div>
                    <div className="col-md-8 ml-n2">
                        <div className="card-body">
                        <h6 className="card-title mt-n2">Card title</h6>
                        <p className="card-text mt-n1 mb-n2 mx-0 px-0">
                            <button className="btn btn-sm btn-danger">Remove</button>
                        </p>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="card file-item shadow-sm" style={{ maxWidth: 540 }}>
                    <div className="row no-gutters file-item">
                    <div className="col-md-3 file-icon-container bg-secondary text-white text-center">
                        <i className="fa fa-file " />
                    </div>
                    <div className="col-md-8 ml-n2">
                        <div className="card-body">
                        <h6 className="card-title mt-n2">Card title</h6>
                        <p className="card-text mt-n1 mb-n2 mx-0 px-0">
                            <button className="btn btn-sm btn-danger">Remove</button>
                        </p>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
            <div className="sub-footer p-3 mb-4 text-right mr-4">
            <button className="btn btn-success btn-lg">Save &amp; Continue</button>
            </div>
        </div>
        </div>
    )
}
