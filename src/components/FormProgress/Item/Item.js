import React from "react";

export default function Item(props) {
  const { id, title, summary, activated } = props.data;
  let activated_stage = "";
  let progress_bar = "";
  let pointer_process = "";
  let main_progress_bar = "";

  // highlit the active state
  if (props.active >= id || activated === true) {
    activated_stage = "pointer-active";
    progress_bar = (
      <section className="progress-bar-item slideInLeft animated" />
    );
  }

  if (props.active === id) {
    pointer_process = (
      <div className="active-progress-action bounceIn animated">e</div>
    );
  }

  // define the progress bar
  if (id !== 1) {
    main_progress_bar = (
      <section className="bar-section">{progress_bar}</section>
    );
  }

  return (
    <div className="step-process">
      {main_progress_bar}
      <section
        className={"pointer-process " + activated_stage}
        onClick={() => props.onSwitch(id)}
      >
        {pointer_process}
      </section>
      <section className="caption">
        <h5>{title}</h5>
        <p>{summary} </p>
      </section>
    </div>
  );
}
