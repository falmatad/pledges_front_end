import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import AddMeasurement from "./AddMeasurement/AddMeasurement";
import EditMeasurement from "./AddMeasurement/EditMeasurement";
import Item from "./MeasurementItems/Item";
import { setConfirm } from "../../../actions/confirm";
import { deleteIndicatorMeasurement } from "../../../actions/indicator";

class Measurement extends Component {
  state = {
    form: {
      type: "",
      id: "",
      name: "",
      description: "",
      unit: ""
    },
    measurements: [],
    measurement: "",
    addMeasurement: false,
    editMeasurement: false,
    selectedId: null,
    confirm: {
      open: false,
      data: null
    }
  };

  // close add item modal
  closeModal = () => {
    this.setState({
      measurements: [...this.state.measurements],
      addMeasurement: false,
      editMeasurement: false,
      selectedId: null
    });
  };

  openEditModal = id => {
    this.setState({
      editMeasurement: true,
      selectedId: id
    });
  };

  // delete item in the list
  deleteItem = id => {
    this.props.setConfirm({
      title: "Delete",
      body: "Are you sure you want to update this item?",
      type: "default",
      theme: "danger",
      function: this.props.deleteIndicatorMeasurement,
      parameter: id
    });
  };

  // return add measurement modal
  Modal = () => {
    if (this.state.addMeasurement === true) {
      return <AddMeasurement close={this.closeModal} />;
    }
  };

  // return add measurement modal
  ModalEdit = () => {
    if (this.state.editMeasurement === true) {
      return (
        <EditMeasurement
          close={this.closeModal}
          selectedId={this.state.selectedId}
        />
      );
    }
  };

  render() {
    return (
      <React.Fragment>
        {this.Modal()}
        {this.ModalEdit()}

        <div className="container pt-3  zoomIn faster animated">
          <div className="row mx-0 px-2">
            <div className="col bg-white">
              <div className="items-containner pt-2 pl-0 mr-3 px-3 pb-3">
                <div className="row mx-0">
                  <div className="col">
                    <h1 className="h2 pt-2">Measurements</h1>
                    <p className="mt-n2 text-secondary">
                      baseline measurement are the type of measurement, that
                      will depend on the baseline, target and reporting
                    </p>
                  </div>
                  <div className="col-3 text-right">
                    <button
                      onClick={() => this.setState({ addMeasurement: true })}
                      className="btn btn-outline-info btn-outline btn-lg mt-4"
                    >
                      <i className="fa fa-plus"></i> Add Measurement
                    </button>
                  </div>
                </div>
                <hr />
                <div className="items-list">
                  {this.props.indicator.indicator.measurements.map(item => (
                    <Item
                      key={item.id}
                      data={item}
                      update={this.openEditModal}
                      delete={this.deleteItem}
                      selectedId={this.state.selectedId}
                    />
                  ))}
                </div>

                {this.props.indicator.indicator.measurements.length > 0 ? (
                  <div className="text-right pt-3">
                    <button
                      className="btn btn-primary bounceIn animated btn-lg"
                      onClick={this.props.success}
                    >
                      Save & Continue
                    </button>
                  </div>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

Measurement.propTypes = {
  indicator: PropTypes.object.isRequired,
  deleteIndicatorMeasurement: PropTypes.func.isRequired,
  success: PropTypes.func.isRequired,
  confirm: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  indicator: state.indicator,
  confirm: state.confirm
});

export default connect(mapStateToProps, {
  setConfirm,
  deleteIndicatorMeasurement
})(Measurement);
