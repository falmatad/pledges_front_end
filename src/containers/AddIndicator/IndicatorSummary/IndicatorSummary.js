import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { FRW } from "../../../utils/money";
import { saveIndicatorToDB } from "../../../actions/indicator";

const IndicatorSummary = props => {
  const { data } = props;
  // console.log(data);

  return (
    <div className="bg-white my-n5 p-5 mx-4 shadow border rounded content-form-summary">
      <button className="btn btn-warning btn-sm" onClick={props.back}>
        Back to editing
      </button>
      <h1 className="display-4 pb-2 border-bottom mb-4">INDICATOR SUMMARY</h1>

      <section className="text-section-content">
        <p className="text-label">Indicator Title</p>
        <h3>{data.indicator_name}</h3>
      </section>

      <section className="text-section-content">
        <p className="text-label">Indicator Description:</p>
        <p>
          <b>{data.indicator_description}</b>
        </p>
      </section>

      <div className="sub-items">
        <section className="text-section-content">
          <p className="text-label">Pillar</p>
          <h5>{data.pillar.title}</h5>
        </section>
        <section className="text-section-content">
          <p className="text-label">Sector</p>
          <h5>{data.sector.title}</h5>
        </section>
        <section className="text-section-content">
          <p className="text-label">Outcome</p>
          <h5>{data.outcome.title}</h5>
        </section>
        <section className="text-section-content">
          <p className="text-label">Output</p>
          <h5>{data.output.title}</h5>
        </section>
      </div>

      <section className="text-section-content">
        <p className="text-label">Source of data</p>
        <h4>
          {data.source_of_data.map((item, i) => {
            return (
              <b key={i}>
                {item} {data.source_of_data.length - 1 === i ? " " : ", "}
              </b>
            );
          })}
        </h4>
      </section>

      <section className="text-section-content">
        <p className="text-label">Measurement Types</p>
        <div className="sub-items pr-3">
          <table className="table table-striped bg-white shadow-sm">
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Unit</th>
                <th>Details</th>
              </tr>
            </thead>
            <tbody>
              {data.measurements.map((item, i) => {
                return (
                  <tr key={item.id}>
                    <td>{i + 1}</td>
                    <td>{item.name}</td>
                    <td>
                      <b className="badge bg-primary text-white">{item.unit}</b>
                    </td>
                    <td>{item.description}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </section>

      <section className="text-section-content">
        <p className="text-label">Progress type</p>
        <h4>
          <b>{data.progress_type}</b>
        </h4>
      </section>

      <section className="text-section-content">
        <p className="text-label">Boudget</p>
        <h4>
          <b>{FRW(data.budget)}</b>
        </h4>
      </section>
      <hr />
      <button
        className="btn btn-success btn-lg"
        onClick={() => props.saveIndicatorToDB(props.indicator, props.history)}
      >
        Save Indicator
      </button>
    </div>
  );
};

IndicatorSummary.propTypes = {
  data: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
  back: PropTypes.func.isRequired,
  indicator: PropTypes.object.isRequired
};

const mapSTateToProps = state => ({
  indicator: state.indicator.indicator
});

export default connect(mapSTateToProps, { saveIndicatorToDB })(
  IndicatorSummary
);
