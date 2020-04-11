import React, { Component } from "react";

// shared Imports
import FormTitle from "../../components/FormTitle/FormTitle";
import FormProgress from "../../components/FormProgress/FormProgress";

// Inner Components
import SearchCell from "./SearchCell/SearchCell";
import SetBudget from "./SetBudget/SetBudget";
import Team from "./Team/Team";

// Modals
// import AddUser from '../../shared/AddUser/AddUser';
// import SearchUser from '../../shared/SearchUser/SearchUser';

export default class AddPlan extends Component {
  state = {
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
    active: 3
  };
  render() {
    return (
      <React.Fragment>
        <FormTitle
          Title="Number of ha consolidated under priority crops"
          SubTitle="Number of ha consolidated consolidated of ha consolidated consolidated under priority crops"
        />

        {/* <FormProgress /> */}
        <FormProgress
          progress={this.state.stages}
          active={this.state.active}
          onClick={this.SwitchState}
        />

        {/* STAGE 1 */}
        <SearchCell />

        {/* SATEGE 2 */}
        <SetBudget />

        {/* STAGE 3 */}
        <Team />

        {/* <SearchUser/> */}
        {/* <AddUser/> */}
      </React.Fragment>
    );
  }
}
