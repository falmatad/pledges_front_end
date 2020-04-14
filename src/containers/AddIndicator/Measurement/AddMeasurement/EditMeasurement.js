import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { editIndicatorMeasurement } from "../../../../actions/indicator";
import BackDrop from "../../../../shared/BackDrop/BackDrop";
import Loading from "../../../../components/Loading/Loading";

class EditMeasurement extends Component {
  state = {
    id: this.props.selectedId,
    name: "",
    description: "",
    unit: "",
    error: {
      target: "",
      msg: ""
    },
    loading: true
  };

  componentDidMount = () => {
    const { name, description, unit } = this.props.measurements.find(
      item => item.id === this.state.id
    );

    this.setState({
      id: this.props.selectedId,
      name: name,
      description: description,
      unit: unit,
      loading: false
    });
  };
  formChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
      error: {
        target: "",
        msg: ""
      }
    });
  };

  formSubmit = e => {
    e.preventDefault();

    // Name validation
    if (this.state.name.length < 1) {
      this.setState({
        error: {
          target: "name",
          msg: "Name must not be empty"
        }
      });
      return true;
    }

    // Name validation
    if (this.state.description.length < 4) {
      this.setState({
        error: {
          target: "description",
          msg: "Description must be atleast 4 characters"
        }
      });
      return true;
    }

    if (this.state.unit === "") {
      this.setState({
        error: {
          target: "unit",
          msg: "The unit must not be empty"
        }
      });
      return true;
    }

    // Check if the element already exist in the list

    // submit the data
    this.props.editIndicatorMeasurement({
      id: this.state.id,
      name: this.state.name,
      description: this.state.description,
      unit: this.state.unit
    });
    this.props.close();
  };

  render() {
    return (
      <React.Fragment>
        {this.state.loading ? (
          <Loading />
        ) : (
          <React.Fragment>
            <BackDrop close={() => {}} />

            <div className="modal-dialog modal-lg add-task-modal zoomIn animated faster fixed-modal">
              <form onSubmit={this.formSubmit}>
                <div className="modal-content">
                  <div className="modal-header bg-primary">
                    <h5 className="modal-title text-white">Edit Measurement</h5>
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
                      {this.state.error.msg !== "" ? (
                        <div className="alert alert-danger bounceIn animated">
                          {this.state.error.msg}
                        </div>
                      ) : null}

                      <div className="form-group">
                        <label htmlFor="exampleFormControlInput1">Name</label>
                        <input
                          type="text"
                          className={
                            this.state.error.target === "name"
                              ? "form-control is-invalid"
                              : "form-control"
                          }
                          value={this.state.name}
                          onChange={this.formChange}
                          placeholder="Name"
                          name="name"
                        />
                      </div>
                      <div className="form-group">
                        <label>Description</label>
                        <textarea
                          rows={3}
                          className={
                            this.state.error.target === "description"
                              ? "form-control is-invalid"
                              : "form-control"
                          }
                          value={this.state.description}
                          onChange={this.formChange}
                          name="description"
                        />
                      </div>
                      <div className="form-group">
                        <label>Unit</label>
                        <input
                          type="text"
                          className={
                            this.state.error.target === "unit"
                              ? "form-control is-invalid"
                              : "form-control"
                          }
                          value={this.state.unit}
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
        )}
      </React.Fragment>
    );
  }
}

EditMeasurement.propTypes = {
  editIndicatorMeasurement: PropTypes.func.isRequired,
  selectedId: PropTypes.string.isRequired,
  measurements: PropTypes.array.isRequired,
  close: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  measurements: state.indicator.indicator.measurements
});

export default connect(mapStateToProps, { editIndicatorMeasurement })(
  EditMeasurement
);
