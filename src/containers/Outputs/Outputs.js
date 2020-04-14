import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { loadMyOutputs } from "../../actions/output";
import PropTypes from "prop-types";
import Loading from "../../components/Loading/Loading";

class Outputs extends Component {
  state = {
    loading: true
  };
  componentDidMount = () => {
    this.setState({ loading: false });
  };

  render() {
    if (
      this.state.loading === false &&
      this.props.auth.loading === false &&
      this.props.output.myOutputs.loading
    ) {
      this.props.loadMyOutputs(20);
    }

    let Outputs = null;
    if (this.props.output.myOutputs.loading) {
      return (
        <div className=" pt-5">
          <Loading />
          <h6 className="text-center text-primary pt-3">Loading plans...</h6>
        </div>
      );
    } else {
      Outputs = this.props.output.myOutputs.outputs;
    }

    // }
    return (
      <div>
        <h1>Plans</h1>
        <hr />
        <div className="plan-containners px-4">
          {!this.props.output.myOutputs.loading
            ? Outputs.map((output, i) => (
                <div
                  key={output.output_id}
                  className={
                    i < 9
                      ? `alert bg-white shadow shadow-sm zoomIn animated faster delay-${i}ms`
                      : "alert bg-white shadow shadow-sm zoomIn animated faster delay-1s"
                  }
                >
                  <span className="badge text-secondary">
                    {output.outcome_title}
                  </span>{" "}
                  <h3>{output.output_title}</h3>
                  <Link to={`/add-indicator/${output.output_id}`}>
                    <button className="btn btn-primary">Add indicator</button>
                  </Link>
                </div>
              ))
            : null}
        </div>
      </div>
    );
  }
}

//

const mapStateToProps = state => ({
  auth: state.auth,
  output: state.output
});

Outputs.propTypes = {
  auth: PropTypes.object.isRequired,
  output: PropTypes.object.isRequired,
  loadMyOutputs: PropTypes.func.isRequired
};

export default connect(mapStateToProps, { loadMyOutputs })(Outputs);
