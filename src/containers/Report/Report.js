import React, { Component } from "react";

// shared Imports
import FormTitle from "../../components/FormTitle/FormTitle";
import FormProgress from "../../components/FormProgress/FormProgress";

// Inner Compoenents
// import Summary from './Summary/Summary'
// import Target from './Target/Target'
// import SetBudget from './SetBudget/SetBudget'
// import UploadDocs from './UploadDocs/UploadDocs'
import AddTask from "./AddTask/AddTask";

export default class Report extends Component {
  render() {
    return (
      <React.Fragment>
        <FormTitle
          Title="REPORT A TARGET MILLESTONE"
          SubTitle="Number of ha consolidated consolidated of ha consolidated consolidated under priority crops"
        />

        <FormProgress />

        {/* <Summary /> */}
        {/* <Target /> */}
        {/* <SetBudget /> */}
        <AddTask />
        {/* <UploadDocs /> */}
      </React.Fragment>
    );
  }
}
