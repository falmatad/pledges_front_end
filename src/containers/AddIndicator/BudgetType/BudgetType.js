import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addIndicatorBudget } from "../../../actions/indicator";

class BudgetType extends Component {
  state = {
    budget: 0,
    progress_type: "",
    error: {
      target: "",
      msg: ""
    }
  };

  componentDidMount = () => {
    let stateData = {};
    if (this.props.data.budget !== "") {
      stateData.budget = this.props.data.budget;
    }

    if (this.props.data.progress_type !== "") {
      stateData.progress_type = this.props.data.progress_type;
    }

    if (this.props.data.budget !== "" || this.props.progress_type !== "") {
      this.setState({
        ...stateData
      });
    }
  };

  onChangeInput = e => {
    this.setState({
      [e.target.name]: e.target.value,
      error: {
        target: "",
        msg: ""
      }
    });
  };

  onSubmit = e => {
    e.preventDefault();

    // budget validation
    if (this.state.budget === "") {
      this.setState({
        error: {
          msg: "The budget must not be empty",
          target: "budget"
        }
      });
      return true;
    }

    // budget validation
    if (this.state.progress_type === "") {
      this.setState({
        error: {
          msg: "You must select a type",
          target: "progress_type"
        }
      });
      return true;
    }

    // submit data
    this.props.addIndicatorBudget({
      budget: this.state.budget,
      progress_type: this.state.progress_type,
      user_id: this.props.user_id
    });
    this.props.success();
  };

  render() {
    return (
      <div className="container display-nones task-report-stage">
        <div className="mx-0 mt-3 pt-2 rounded-lg shadow-sm bg-white">
          <form onSubmit={this.onSubmit}>
            <div className="row px-4">
              <div className="col">
                <h2 className="h2 pt-2 pl-4 mb-2 mt-3 font-weight-normal">
                  MAX BUDGET
                </h2>
                <div className="px-4 py-3">
                  <p className="mt-n3 border-bottom pb-3">
                    The maximum budget is the total of all sub-indicators. this
                    will help you to track the progress of the budget.
                  </p>
                  <div className="form-group">
                    <label htmlFor="budgetId">Enter budget</label>
                    <input
                      type="number"
                      className={
                        this.state.error.target === "budget"
                          ? "form-control form-control-lg is-invalid"
                          : "form-control form-control-lg"
                      }
                      id="budgetId"
                      value={this.state.budget}
                      name="budget"
                      onChange={this.onChangeInput}
                    />
                  </div>
                </div>
              </div>
              <div className="col border-left">
                <h2 className="h2 pt-2 pl-4 mb-2 mt-3 font-weight-normal">
                  INDICATOR TYPE
                </h2>
                <div className="px-4 py-3">
                  <p className="mt-n3 border-bottom pb-3">
                    this will present how the report on each plan will be
                    reported.
                  </p>
                  <div className="form-group">
                    <label htmlFor="progress_typeIn">Example select</label>
                    <select
                      className={
                        this.state.error.target === "progress_typeIn"
                          ? "form-control is-invalid"
                          : "form-control"
                      }
                      id="progress_typeIn"
                      name="progress_type"
                      value={this.state.progress_type}
                      onChange={this.onChangeInput}
                    >
                      <option />
                      <option>Increment</option>
                      <option>Decrement</option>
                      <option>Percentage</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
            <div className="sub-footer p-3 mb-n2 text-right border-top mt-1 mr-4">
              <button className="btn btn-success btn-lg" type="submit">
                Continue
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

BudgetType.propTypes = {
  success: PropTypes.func.isRequired,
  data: PropTypes.object.isRequired,
  addIndicatorBudget: PropTypes.func.isRequired,
  user_id: PropTypes.string.isRequired
};

const mapStateToProps = state => ({
  user_id: state.auth.user.user_id
});

export default connect(mapStateToProps, { addIndicatorBudget })(BudgetType);
