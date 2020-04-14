import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

// shared Imports
import FormTitle from "../../components/FormTitle/FormTitle";
import FormProgress from "../../components/FormProgress/FormProgress";

// inner components
import CheckSelected from "./CheckSelected/CheckSelected";
import NameSource from "./NameSource/NameSource";
import Measurement from "./Measurement/Measurement";
import BudgetType from "./BudgetType/BudgetType";
import IndicatorSummary from "./IndicatorSummary/IndicatorSummary";

class AddIndicator extends Component {
  state = {
    outputId: this.props.match.params.outputId,

    stages: [
      {
        id: 1,
        title: "Check data",
        description: "check if the selected data are correct",
        summary: "check the data",
        activated: false,
        validated: false
      },
      {
        id: 2,
        title: "Indicator & Source",
        summary: "set indicator and source",
        description: "Indicator and source of data",
        activated: false,
        validated: false
      },
      {
        id: 3,
        title: "Measurement",
        summary: "set measurement",
        description: "Define the type of measurement",
        activated: false,
        validated: false
      },
      {
        id: 4,
        title: "Budget",
        summary: "Budget and Type",
        description: "Define the maximum budget and the type of measurement",
        activated: false,
        validated: false
      }
    ],
    active: 1,
    completed: false
  };

  // save the selected acnd cehck
  selectedSuccess = () => {
    // console.log("save selected: ", data);
    this.setState({
      // update the state
      stages: this.state.stages.map(item => {
        if (item.id === 1) {
          return {
            ...item,
            activated: true,
            validated: true
          };
        } else if (item.id === 2) {
          // activate the next from
          return {
            ...item,
            activated: true
          };
        } else {
          return {
            ...item
          };
        }
      }),
      active: 2
    });
  };

  // SAVE the data for the phase 2
  nameSourceSuccess = () => {
    this.setState({
      // update the state
      stages: this.state.stages.map(item => {
        if (item.id === 2) {
          return {
            ...item,
            activated: true,
            validated: true
          };
        } else if (item.id === 3) {
          // activate the next from
          return {
            ...item,
            activated: true
          };
        } else {
          return {
            ...item
          };
        }
      }),
      active: 3
    });
  };

  // for the last phase
  measurementSuccess = () => {
    this.setState({
      // update the state
      stages: this.state.stages.map(item => {
        if (item.id === 3) {
          return {
            ...item,
            activated: true,
            validated: true
          };
        } else if (item.id === 4) {
          // activate the next from
          return {
            ...item,
            activated: true
          };
        } else {
          return {
            ...item
          };
        }
      }),
      active: 4
    });
  };

  budgetSuccess = () => {
    this.setState({
      completed: true
    });
  };

  backFromSummary = () => {
    this.setState({
      completed: false
    });
  };

  // allow to switvh the containners
  SwitchState = stage => {
    // find the stage
    if (this.state.stages.find(item => item.id === stage).activated === true) {
      this.setState({
        ...this.state,
        data: {
          ...this.state.data
        },
        stages: [...this.state.stages],
        active: stage
      });
    }
  };

  // return the containner we are working on
  activeStage = () => {
    if (this.state.active === 1) {
      return (
        <CheckSelected
          outputId={this.state.outputId}
          success={this.selectedSuccess}
        />
      );
    } else if (this.state.active === 2) {
      return (
        <NameSource
          title={this.props.indicator.indicator.indicator_title}
          source={this.props.indicator.indicator.source_of_data}
          description={this.props.indicator.indicator.indicator_description}
          success={this.nameSourceSuccess}
        />
      );
    } else if (this.state.active === 3) {
      return <Measurement success={this.measurementSuccess} />;
    } else if (this.state.active === 4) {
      return (
        <BudgetType
          data={{
            budget: this.props.indicator.indicator.budget,
            progress_type: this.props.indicator.indicator.progress_type
          }}
          success={this.budgetSuccess}
        />
      );
    } else {
      return <h1>Nothing is selected</h1>;
    }
  };

  render() {
    const { indicator } = this.props;

    return (
      <React.Fragment>
        <div>
          <FormTitle
            Title="ADD INDICATOR TO:"
            SubTitle={
              indicator.indicator.output.title === null
                ? "---"
                : indicator.indicator.output.title
            }
          />

          {this.state.completed ? (
            <IndicatorSummary
              data={this.props.indicator.indicator}
              back={this.backFromSummary}
              history={this.props.history}
            />
          ) : (
            <FormProgress
              progress={this.state.stages}
              active={this.state.active}
              onClick={this.SwitchState}
            />
          )}

          {!this.state.completed ? this.activeStage() : null}
        </div>
      </React.Fragment>
    );
  }
}

AddIndicator.propTypes = {
  indicator: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  indicator: state.indicator,
  auth: state.auth
});

export default connect(mapStateToProps)(AddIndicator);
