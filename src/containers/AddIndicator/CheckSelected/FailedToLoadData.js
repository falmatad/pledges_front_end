import React from "react";
import { Link } from "react-router-dom";
import BackDrop from "../../../shared/BackDrop/BackDrop";

const FailedToLoadData = () => {
  return (
    <React.Fragment>
      <BackDrop bg="#5f070061" close={() => {}} />

      <div className="error-custom-modal zoomIn animated text-centerd rounded">
        <div className="row mx-0">
          <div className="bg-secondary col-4" style={{ height: "411px" }}>
            a
          </div>
          <div className="col p-4">
            <h2 className="display-4 pt-3 pb-2 pt-3">CANT LOAD DATA</h2>
            <h3>
              this can be caused by the invalid id <br /> or the network issue
            </h3>
            <h5 className="text-secondary pt-3 pb-2">
              Go back to the <b>Outputs</b> <br /> and select the output again
            </h5>

            <Link
              to="/outputs"
              className="btn btn-primary btn-lg pulse animated infinite mt-3"
            >
              Go to Outputs
            </Link>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
export default FailedToLoadData;
