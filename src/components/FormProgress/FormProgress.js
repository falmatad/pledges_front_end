import React from "react";
import Item from "./Item/Item";

export default function FormProgress(props) {
  const { progress, active } = props;

  let head = progress.find(item => item.id === active);

  return (
    <div className="container">
      <div className="progress-status shadow-sm bg-success text-white mx-0 mt-n5 py-3 rounded px-5">
        <h2 className="h3 mb-0 ml-n3">{head.title}</h2>
        <p className="mt-n1 ml-n3" style={{ color: "#d4d2d2" }}>
          {head.description}
        </p>
        <div className="progress-indicator mx-4  px-2 progress-steps-4 mt-n2">
          {props.progress.map(item => (
            <Item
              key={item.id}
              data={item}
              active={active}
              onSwitch={props.onClick}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
