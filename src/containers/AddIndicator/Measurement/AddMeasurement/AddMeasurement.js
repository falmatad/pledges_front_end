import React, { Component } from "react";
import BackDrop from "../../../../shared/BackDrop/BackDrop";

export default class AddMeasurement extends Component {
  state = {
    data: {
      type: "",
      id: "",
      name: "",
      description: "",
      unit: ""
    },
    errors: "",
    classNames: {
      name: "form-control",
      description: "form-control",
      unit: "form-control"
    }
  };

  // load edit data
  componentDidMount = () => {
    this.setState({
      ...this.state,
      data: {
        ...this.state.data,
        ...this.props.data
      }
    });
  };

  formChange = e => {
    this.setState({
      ...this.state,
      data: {
        ...this.state.data,
        [e.target.name]: e.target.value
      },
      classNames: {
        name: "form-control",
        description: "form-control",
        unit: "form-control"
      },
      errors: ""
    });
  };

  formSubmit = e => {
    e.preventDefault();
    const { name, unit } = this.state.data;

    // Validtioln
    if (name === "" || name.length < 1) {
      this.setState({
        ...this.state,
        errors: "Name must not be empty",
        classNames: {
          ...this.state.classNames,
          name: "form-control is-invalid"
        }
      });
      return true;
    }

    if (unit === "" || unit.length < 1) {
      this.setState({
        ...this.state,
        errors: "Unit must not be empty",
        classNames: {
          ...this.state.classNames,
          unit: "form-control is-invalid"
        }
      });
      return true;
    }

    // submit the data
    this.props.saveData(this.state.data);
    this.props.close();
  };

  render() {
    // display alert
    let errors = null;
    if (this.state.errors !== "") {
      errors = <div className="alert alert-danger">{this.state.errors}</div>;
    }

    // modify the title
    let title = "";
    if (this.props.data.type === "add") {
      title = "Add Measurement";
    } else {
      title = "Edit Measurement";
    }

    return (
      <React.Fragment>
        <BackDrop close={() => {}} />

        <div className="modal-dialog modal-lg add-task-modal zoomIn animated faster fixed-modal">
          <form onSubmit={this.formSubmit}>
            <div className="modal-content">
              <div className="modal-header bg-primary">
                <h5 className="modal-title text-white">{title}</h5>
                <button
                  type="button"
                  className="close text-white"
                  data-dismiss="modal"
                  aria-label="Close"
                  onClick={this.props.close}
                >
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body px-4 mb-n3">
                <div className="bg-white">
                  {errors}

                  <div className="form-group">
                    <label htmlFor="exampleFormControlInput1">Name</label>
                    <input
                      type="text"
                      className={this.state.classNames.name}
                      value={this.state.data.name}
                      onChange={this.formChange}
                      placeholder="Name"
                      name="name"
                    />
                  </div>
                  <div className="form-group">
                    <label>Description</label>
                    <textarea
                      rows={3}
                      className={this.state.classNames.description}
                      value={this.state.data.description}
                      onChange={this.formChange}
                      name="description"
                    />
                  </div>
                  <div className="form-group">
                    <label>Unit</label>
                    <input
                      type="text"
                      className={this.state.classNames.unit}
                      value={this.state.data.unit}
                      onChange={this.formChange}
                      placeholder="Unit"
                      name="unit"
                    />
                  </div>
                </div>
              </div>
              <div className="modal-footer border-0">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={this.props.close}
                >
                  Close
                </button>
                <button type="submit" className="btn btn-primary">
                  Save changes
                </button>
              </div>
            </div>
          </form>
        </div>
      </React.Fragment>
    );
  }
}
