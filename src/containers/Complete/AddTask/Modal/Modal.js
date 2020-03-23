import React from 'react'

export default function Modal() {
    return (
        <div className="modal-dialog modal-lg add-task-modal fixed-modal" role="document">
            <div className="modal-content">
            <div className="modal-header bg-primary">
                <h5 className="modal-title text-white">Modal title</h5>
                <button
                type="button"
                className="close text-white"
                data-dismiss="modal"
                aria-label="Close"
                >
                <span aria-hidden="true">×</span>
                </button>
            </div>
            <div className="modal-body px-4 mb-n3">
                <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam nam
                consequatur molestias ipsa, recusandae natus cupiditate ducimus
                deleniti at officia!
                </p>
                <hr />
                <form>
                <div className="form-group">
                    <label htmlFor="exampleFormControlInput1">Email address</label>
                    <input
                    type="email"
                    className="form-control"
                    id="exampleFormControlInput1"
                    placeholder="name@example.com"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleFormControlTextarea1">
                    Example textarea
                    </label>
                    <textarea
                    className="form-control"
                    id="exampleFormControlTextarea1"
                    rows={3}
                    defaultValue={""}
                    />
                </div>
                </form>
            </div>
            <div className="modal-footer border-0">
                <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
                >
                Close
                </button>
                <button type="button" className="btn btn-primary">
                Save changes
                </button>
            </div>
            </div>
        </div>
    )
}
