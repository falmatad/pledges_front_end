import React from 'react'

export default function Comments() {
    return (
        <div className="container display-nones mt-3 py-0 task-report-stage">
            <div className="mx-0 mt-3 pt-0 rounded-lg shadow-sm bg-white">
            <h2 className="h2 border-bottom pl-4 p-2 m-0 font-weight-normal">
                COMMENTS
            </h2>
            <div
                className="commants-containner px-5 py-4"
                style={{ backgroundColor: "#eee" }}
            >
                <div className="comment-item mb-2">
                <div className="row mx-0">
                    <div className="col-1 text-right">
                    <i className="fa fa-user-circle" style={{ fontSize: "4rem" }} />
                    </div>
                    <div className="col">
                    <h4 className="h5">
                        <b className="font-weight-bolder"> Muhawenimana janvier </b>
                        <span className="badge bg-primary text-white">Admin</span>
                        <i className=" font-weight-normal">12/12/2020</i>
                    </h4>
                    <p className="bg-white border p-2 rounded shadow-sm mt-n1">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                        Reprehenderit mollitia exercitationem eveniet, modi rerum quo
                        optio saepe, totam voluptates perferendis neque reiciendis
                        molestiae omnis possimus illum. Eum assumenda quaerat cum!
                    </p>
                    </div>
                </div>
                </div>
                <div className="comment-item mb-2">
                <div className="row mx-0">
                    <div className="col-1 text-right">
                    <i className="fa fa-user-circle" style={{ fontSize: "4rem" }} />
                    </div>
                    <div className="col">
                    <h4 className="h5">
                        <b className="font-weight-bolder"> Muhawenimana janvier </b>
                        <span className="badge bg-primary text-white">Admin</span>
                        <i className=" font-weight-normal">12/12/2020</i>
                    </h4>
                    <p className="bg-white border p-2 rounded shadow-sm mt-n1">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                        Reprehenderit mollitia exercitationem eveniet, modi rerum quo
                        optio saepe, totam voluptates perferendis neque reiciendis
                        molestiae omnis possimus illum. Eum assumenda quaerat cum!
                    </p>
                    </div>
                </div>
                </div>
                <div className="comment-item mb-2">
                <div className="row mx-0">
                    <div className="col-1 text-right">
                    <i className="fa fa-user-circle" style={{ fontSize: "4rem" }} />
                    </div>
                    <div className="col">
                    <h4 className="h5">
                        <b className="font-weight-bolder"> Muhawenimana janvier </b>
                        <span className="badge bg-primary text-white">Admin</span>
                        <i className=" font-weight-normal">12/12/2020</i>
                    </h4>
                    <p className="bg-white border p-2 rounded shadow-sm mt-n1">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                        Reprehenderit mollitia exercitationem eveniet, modi rerum quo
                        optio saepe, totam voluptates perferendis neque reiciendis
                        molestiae omnis possimus illum. Eum assumenda quaerat cum!
                    </p>
                    </div>
                </div>
                </div>
                <div className="comment-item">
                <div className="row mx-0">
                    <div className="col-1 text-right">
                    <i className="fa fa-user-circle" style={{ fontSize: "4rem" }} />
                    </div>
                    <div className="col">
                    <h4 className="h5">
                        <b className="font-weight-bolder"> Muhawenimana janvier </b>
                        <span className="badge bg-primary text-white">Admin</span>
                        <i className=" font-weight-normal">12/12/2020</i>
                    </h4>
                    <p className="bg-white border p-2 rounded shadow-sm mt-n1">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                        Reprehenderit mollitia exercitationem eveniet, modi rerum quo
                        optio saepe, totam voluptates perferendis neque reiciendis
                        molestiae omnis possimus illum. Eum assumenda quaerat cum!
                    </p>
                    </div>
                </div>
                </div>
            </div>
            {/* comment form */}
            <div className=" px-5 py-4">
                <div className="comment-item">
                <div className="row mx-0">
                    <div className="col-1 text-right">
                    <i className="fa fa-user-circle" style={{ fontSize: "4rem" }} />
                    </div>
                    <div className="col">
                    <h4 className="h5">
                        <b className="font-weight-bolder"> Muhawenimana janvier </b>
                        <span className="badge bg-primary text-white">Admin</span>
                    </h4>
                    <textarea
                        className="form-control border-primary"
                        id="exampleFormControlTextarea1"
                        rows={3}
                        defaultValue={""}
                    />
                    <div className="text-right pt-3">
                        <button type="submit" className="btn btn-lg btn-primary">
                        Comment
                        </button>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            <div className=" mx-0 border-top p-3 text-right">
                <button className="btn btn-warning">View evalluation</button>
            </div>
            </div>
        </div>
    )
}
