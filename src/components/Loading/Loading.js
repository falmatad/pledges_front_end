import React from "react";

export default function Loading() {
  return (
    <div className="text-center text-primary pt-5 mt-5 mx-0">
      <div
        className="pulse animated infinite"
        style={{ width: "300px", margin: "auto", textAlign: "center" }}
      >
        <span
          className="spinner-border spinner-border-lg"
          role="status"
          aria-hidden="true"
        ></span>
      </div>
    </div>
  );
}
