import React, { Component } from "react";
import SearchSelect from "./SearchSelect/SearchSelect";
export default class CheckSelected extends Component {
  state = {
    data: {
      pillar: { id: null, title: "" },
      sector: { id: null, title: "" },
      outcome: { id: null, title: "" },
      output: { id: null, title: "" }
    },
    modal: {
      show: false,
      type: "",
      id: null
    }
  };

  componentDidMount = () => {
    const { pillar, sector, outcome, output } = this.props.data;
    this.setState({
      ...this.state,
      data: {
        pillar,
        sector,
        outcome,
        output
      },
      modal: {
        ...this.state.nodal
      }
    });
  };

  changeType = (type, id) => {
    if (type === "sector" && this.state.data.pillar.id === null) {
      return true;
    }
    if (type === "outcome" && this.state.data.sector.id === null) {
      return true;
    }
    if (type === "output" && this.state.data.outcome.id === null) {
      return true;
    }

    this.setState({
      ...this.state,
      data: {
        ...this.state.data
      },
      modal: {
        show: true,
        type: type,
        id: id
      }
    });
  };

  // close modal
  closeModal = () => {
    this.setState({
      ...this.state,
      data: {
        ...this.state.data
      },
      modal: {
        show: false,
        type: "",
        id: null
      }
    });
  };

  UpdateData = (id, title, type) => {
    let validate = {};
    if (type === "pillar") {
      validate = {
        sector: { id: null, title: "" },
        outcome: { id: null, title: "" },
        output: { id: null, title: "" }
      };
    } else if (type === "sector") {
      validate = {
        outcome: { id: null, title: "" },
        output: { id: null, title: "" }
      };
    } else if (type === "outcome") {
      validate = {
        output: { id: null, title: "" }
      };
    }
    this.setState({
      ...this.state,
      data: {
        ...this.state.data,
        ...validate,
        [type]: {
          id: id,
          title: title
        }
      },
      modal: {
        show: false,
        type: ""
      }
    });
  };

  // modal
  Modal = () => {
    if (this.state.modal.show) {
      return (
        <SearchSelect
          close={this.closeModal}
          type={this.state.modal.type}
          id={this.state.modal.id}
          update={this.UpdateData}
        />
      );
    }
  };

  SubmitTheData = () => {
    if (
      (this.state.data.pillar.id !== null) &
      (this.state.data.sector.id !== null) &
      (this.state.data.outcome.id !== null) &
      (this.state.data.output.id !== null)
    ) {
      this.props.success(this.state.data);
    }
  };

  render() {
    let buttonSubmitClass = "btn btn-lg ";
    if (
      this.state.data.pillar.id === null ||
      this.state.data.sector.id === null ||
      this.state.data.outcome.id === null ||
      this.state.data.output.id === null
    ) {
      buttonSubmitClass += "btn-light";
    } else {
      buttonSubmitClass += "btn-primary";
    }

    return (
      <React.Fragment>
        {this.Modal()}

        <div className="container pt-0 display-nones zoomIn faster animated mb-4">
          <div className="bg-white mt-3 shadow-sm rounded p-4">
            <h6 className="text-center mx-4 text-secondary border-bottom mt-n2 pb-3">
              Check if the selected items are correct and chick to change if
              neccesarry
            </h6>
            {/* <form> */}
            <div className="mx-4 pt-4">
              <div className="row mx-2 mb-3">
                <div className="col">
                  <div className="form-group">
                    <label htmlFor="exampleFormControlInput1">Pillar</label>
                    <input
                      type="text"
                      className="form-control cursor-pointer"
                      name="pillar"
                      value={this.state.data.pillar.title}
                      onClick={() => this.changeType("pillar", null)}
                      readOnly
                    />
                  </div>
                </div>

                <div className="col">
                  <div className="form-group">
                    <label htmlFor="exampleFormControlInput1">Sector</label>
                    <input
                      type="text"
                      className="form-control"
                      name="sector"
                      value={this.state.data.sector.title}
                      onClick={() =>
                        this.changeType("sector", this.state.data.pillar.id)
                      }
                      readOnly
                    />
                  </div>
                </div>
              </div>
              <div className="row mx-2">
                <div className="col">
                  <div className="form-group">
                    <label htmlFor="exampleFormControlInput1">Outcome</label>
                    <input
                      type="text"
                      className="form-control"
                      name="outcome"
                      value={this.state.data.outcome.title}
                      onClick={() =>
                        this.changeType("outcome", this.state.data.sector.id)
                      }
                      readOnly
                    />
                  </div>
                </div>
                <div className="col">
                  <div className="form-group">
                    <label htmlFor="exampleFormControlInput1">Output</label>
                    <input
                      type="text"
                      className="form-control"
                      name="output"
                      value={this.state.data.output.title}
                      onClick={() =>
                        this.changeType("output", this.state.data.outcome.id)
                      }
                      readOnly
                    />
                  </div>
                </div>
              </div>
              <div className="text-right px-1 mx-3 mt-3">
                <button
                  type="button"
                  onClick={() => this.SubmitTheData()}
                  className={buttonSubmitClass}
                >
                  Continue
                </button>
              </div>
            </div>
            {/* </form> */}
          </div>
        </div>
      </React.Fragment>
    );
  }
}
