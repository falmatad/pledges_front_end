import React, { Component } from "react";
// shared Imports
import FormTitle from "../../components/FormTitle/FormTitle";
import FormProgress from "../../components/FormProgress/FormProgress";

// inner components
import CheckSelected from "./CheckSelected/CheckSelected";
import NameSource from "./NameSource/NameSource";
import Measurement from "./Measurement/Measurement";
import BudgetType from "./BudgetType/BudgetType";

export default class AddIndicator extends Component {
  state = {
    data: {
      pillar: { id: null, title: "" },
      sector: { id: null, title: "" },
      outcome: { id: null, title: "" },
      output: { id: null, title: "" },
      indicator_name: "",
      source_of_data: [],
      measurements: [],
      budget: [],
      progress_type: ""
    },

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
    active: 1
  };

  // save the selected acnd cehck
  SaveSelected = data => {
    // console.log("save selected: ", data);
    this.setState({
      ...this.state,
      data: {
        ...this.state.data,
        ...data,
        measurement: [...this.state.data.measurement],
        max_budget: [...this.state.data.max_budget]
      },

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
  SaveNameSource = data => {
    // save to the state

    this.setState({
      ...this.state,
      data: {
        ...this.state.data,
        ...data,
        measurement: [...this.state.data.measurement],
        max_budget: [...this.state.data.max_budget]
      },

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
        <CheckSelected data={this.state.data} success={this.SaveSelected} />
      );
    } else if (this.state.active === 2) {
      return (
        <NameSource
          indicator_name={this.state.data.indicator_name}
          source_of_data={this.state.data.source_of_data}
          success={this.SaveNameSource}
        />
      );
    } else if (this.state.active === 3) {
      return <Measurement />;
    } else if (this.state.active === 4) {
      return <BudgetType />;
    } else {
      return <h1>Nothing is selected</h1>;
    }
  };

  render() {
    // console.log("dd: ", this.SwitchState);

    return (
      <React.Fragment>
        <div>
          <FormTitle
            Title="Number of ha consolidated under priority crops"
            SubTitle="Number of ha consolidated consolidated of ha consolidated consolidated under priority crops"
          />

          <FormProgress
            progress={this.state.stages}
            active={this.state.active}
            onClick={this.SwitchState}
          />

          {this.activeStage()}
        </div>
      </React.Fragment>
    );
  }
}
