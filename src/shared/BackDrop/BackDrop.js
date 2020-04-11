import React from "react";

const BackDrop = props => {
  return (
    <div
      className="backDrop animated fadeIn"
      onClick={() => props.close()}
    ></div>
  );
};

export default BackDrop;
