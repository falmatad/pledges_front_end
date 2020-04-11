import React, { Component } from "react";
import { connect } from "react-redux";
import { loadPlans } from "../../actions/plan";
import PropTypes from "prop-types";
import Loading from "../../components/Loading/Loading";

class Plans extends Component {
  componentDidMount = () => {
    if (this.props.plans.myPlans.loading) {
      this.props.loadPlans();
    }
  };

  render() {
    let Plans = null;
    if (this.props.plans.myPlans.loading) {
      return (
        <div className=" pt-5">
          <Loading />
          <h6 className="text-center text-primary pt-3">Loading plans...</h6>
        </div>
      );
    } else {
      Plans = this.props.plans.myPlans.plans;
    }

    // if (this.props.plans.myPlans.loading && ) {
    //   console.log("the pplans: ", this.props.plans.myPlans.plans);
    console.log("THE GOOD PLANS: ", Plans);

    // }
    return (
      <div>
        <h1>Plans</h1>
        <hr />
        <div className="plan-containners px-4">
          {!this.props.plans.myPlans.loading
            ? Plans.map(plan => (
                <div
                  key={plan.plan_id}
                  className="alert bg-white shadow shadow-sm"
                >
                  <span className="badge bg-warning text-white">
                    {plan.accademic_title}
                  </span>{" "}
                  <span className="badge bg-secondary text-white">
                    {plan.cell_name}
                  </span>
                  <h3>{plan.indicator_title}</h3>
                  <p className="text-secondary border-bottom pb-2 mb-2">
                    You are the{" "}
                    <span className="badge info">{plan.privilege_title}</span>
                  </p>
                  <button className="btn btn-primary">
                    Complete Information
                  </button>{" "}
                  <button className="btn btn-warning">Create draft</button>
                </div>
              ))
            : null}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
  plans: state.plans
});

Plans.propTypes = {
  auth: PropTypes.object.isRequired,
  plans: PropTypes.object.isRequired,
  loadPlans: PropTypes.func.isRequired
};

export default connect(mapStateToProps, { loadPlans })(Plans);
