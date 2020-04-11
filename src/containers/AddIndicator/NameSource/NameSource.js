import React, { Component } from "react";

export default class NameSource extends Component {
  state = {
    data: {
      indicator_name: "",
      source_of_data: ""
    },
    error: "",
    classNames: {
      nameClass: "form-control",
      sourceClass: "form-control"
    }
  };

  componentDidMount = () => {
    if (this.props.indicator_name !== "" || this.props.source_of_data !== "") {
      this.setState({
        ...this.state,
        data: {
          indicator_name: this.props.indicator_name,
          source_of_data: this.props.source_of_data
        },
        error: "",
        classNames: {
          ...this.state.classNames
        }
      });
    }
  };

  FromChange = e => {
    this.setState({
      ...this.state,
      data: {
        ...this.state.data,
        [e.target.name]: e.target.value
      },
      classNames: {
        nameClass: "form-control",
        sourceClass: "form-control"
      },
      error: ""
    });
  };

  submitForm = e => {
    e.preventDefault();
    // validate the name
    if (this.state.data.indicator_name.length < 6) {
      this.setState({
        ...this.state,
        error: "The Source of data must be atleast 6 characters",
        classNames: {
          ...this.state.classNames,
          nameClass: "form-control is-invalid"
        }
      });
      return true;
    }

    // validate the source of data
    if (this.state.data.source_of_data.length < 2) {
      this.setState({
        ...this.state,
        error: "The Source of data must be atleast 3 characters",
        classNames: {
          ...this.state.classNames,
          sourceClass: "form-control is-invalid"
        }
      });
      return true;
    }

    // submit data to the parrent
    this.props.success({
      indicator_name: this.state.data.indicator_name,
      source_of_data: this.state.data.source_of_data
    });
  };

  render() {
    let buttonClass = "";
    let errors = null;

    // button style
    if (
      this.state.data.indicator_name !== "" &&
      this.state.data.source_of_data !== ""
    ) {
      buttonClass = "btn btn-lg btn-primary";
    } else {
      buttonClass = "btn btn-lg btn-light";
    }

    // working with errors
    if (this.state.error !== "") {
      errors = (
        <div className="alert alert-sm alert-danger">{this.state.error}</div>
      );
    }

    return (
      <div className="container pt-0 zoomIn faster animated">
        <div className="bg-white mt-3 shadow-sm rounded p-4">
          {errors}
          <form onSubmit={this.submitForm}>
            <div className="form-group">
              <label htmlFor="theTitle">Indicator name</label>
              <textarea
                className={this.state.classNames.nameClass}
                id="theTitle"
                rows={3}
                name="indicator_name"
                value={this.state.data.indicator_name}
                onChange={this.FromChange}
              ></textarea>
            </div>
            <div className="form-group">
              <label htmlFor="sourceOfData">Source of data</label>
              <input
                type="text"
                className={this.state.classNames.sourceClass}
                name="source_of_data"
                value={this.state.data.source_of_data}
                onChange={this.FromChange}
              />
            </div>
            <div className="text-right px-1">
              <button type="submit" className={buttonClass}>
                Continue
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
