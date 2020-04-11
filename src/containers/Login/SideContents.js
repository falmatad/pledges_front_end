import React, { Fragment } from "react";
import PropTypes from "prop-types";

const SideContents = ({ type }) => {
  let contents = null;
  console.log("[LOG THE TYPE]: ", type);

  if (type === "login") {
    contents = (
      <Fragment>
        <div className="px-5  pt-5 text-white fadeIn animated">
          <h1 className="display-3 zoomIn animated pt-5">Welcome</h1>
          <p className="fadeIn delay-1s animated pt-2">
            {" "}
            Ypo are welcome to the Lorem ipsum, dolor sit amet consectetur
            adipisicing elit. Quos quam, expedita at id, ipsa quae eius quidem.
            Aliquid aut quisquam eos vitae?
          </p>
          <p className="fadeIn delay-2s animated">
            {" "}
            Ypo are welcome to the Lorem ipsum, dolor sit amet consectetur
            adipisicing elit. Quos quam, expedita at id, ipsa quae eius quidem.
            Aliquid aut quisquam eos vitae?
          </p>
        </div>
      </Fragment>
    );
  } else {
    contents = (
      <Fragment>
        <div className="px-5  pt-5 text-white fadeIn animated">
          <h1 className="display-3 zoomIn animated pt-5">Recover</h1>
          <p className="fadeIn delay-1s animated">
            {" "}
            Ypo are welcome to the Lorem ipsum, dolor sit amet consectetur
            adipisicing elit. Quos quam, expedita at id, ipsa quae eius
            molestiae, architecto praesentium neque ex tempora dolorem nulla
            quidem. Aliquid aut quisquam eos vitae?
          </p>
        </div>
      </Fragment>
    );
  }
  return (
    <React.Fragment>
      <div className="login-side-contents col-7 sm-hide col-m-6 h-100">
        {contents}
      </div>
    </React.Fragment>
  );
};

SideContents.propTypes = {
  type: PropTypes.string
};

export default SideContents;
