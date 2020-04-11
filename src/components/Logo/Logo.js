import React from "react";
import appLogo from "./Logo.png";

const Logo = ({ width, height, title, alt, className }) => {
  return (
    <img
      src={appLogo}
      width={width}
      height={height}
      title={title}
      alt={alt}
      className={className}
    />
  );
};

Logo.defaultProps = {
  className: "",
  width: 100,
  height: 100,
  title: "Pleages Management system",
  alt: "Pleges Logo"
};

export default Logo;
