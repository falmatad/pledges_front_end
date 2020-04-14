import React from "react";

const BackDrop = props => {
  return (
    <div
      className="backDrop animated fadeIn"
      style={{ background: props.bg }}
      onClick={() => props.close()}
    ></div>
  );
};

BackDrop.defaultProps = {
  bg: "#00000061"
};

export default BackDrop;
