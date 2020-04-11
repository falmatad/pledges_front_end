import React from "react";

export default function Item(props) {
  return (
    <div className="alert bg-white shadow-sm py-2 mb-2 border border-success border border-2">
      <button
        className="btn btn-danger btn-sm ml-2"
        style={{ float: "right" }}
        onClick={() => props.func.delete(props.data.id)}
      >
        Delete
      </button>
      <button
        className="btn btn-info btn-sm"
        style={{ float: "right" }}
        onClick={() => props.func.update(props.data.id)}
      >
        Update
      </button>

      <h5 className="h4 pb-1">
        {props.data.name}{" "}
        <span className="badge badge-warning">{props.data.unit}</span>
      </h5>
      <p className="mb-1 mt-n2 text-secondary">{props.data.description}</p>
    </div>
  );
}
