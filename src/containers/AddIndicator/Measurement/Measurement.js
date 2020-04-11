import React, { Component } from "react";

import { v4 as uuid4 } from "uuid";
import AddMeasurement from "./AddMeasurement/AddMeasurement";
import EditMeasurement from "./AddMeasurement/EditMeasurement";

import Item from "./MeasurementItems/Item";

import Confirm from "../../../components/Confirm/Confirm";
export default class Measurement extends Component {
  constructor(props) {
    super(props);

    this.state = {
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
      confirm: {
        open: false,
        data: null
      }
    };
  }

  // close add item modal
  closeModal = () => {
    this.setState({
      measurements: [...this.state.measurements],
      addMeasurement: false,
      editMeasurement: false
    });
  };

  // open add measurement item
  openModal = (type, id) => {
    console.log("curent: ", this.state.form);
    let form = null;
    if (type === "add") {
      form = {
        ...this.state.form,
        type: type,
        id: id
      };
    } else {
      // find the element
      form = this.state.measurements.find(item => item.id === id);
    }

    this.setState({
      measurements: [...this.state.measurements],
      addMeasurement: true,
      form: {
        ...form
      }
    });
  };

  openEditModal = id => {
    let form = this.state.measurements.find(item => item.id === id);

    this.setState({
      measurements: [...this.state.measurements],
      editMeasurement: true,
      form: {
        ...form
      }
    });
  };

  // return the delele confirm modal
  confirmModal = () => {
    if (this.state.confirm.open) {
      return (
        <Confirm
          title="Are you sure you want to delete this item??"
          body=""
          confirm={() => this.deleteData(this.state.confirm.data)}
          cancel={this.closeConfirm}
          data={this.state.confirm.data}
        />
      );
    }
  };

  // close delete confirm
  closeConfirm = () => {
    this.setState({
      measurements: [...this.state.measurements],
      confirm: {
        open: false,
        data: null
      }
    });
  };

  // open confirm modal
  openConfirm = id => {
    console.log("deleted id: ", id);

    this.setState({
      measurements: [...this.state.measurements],
      confirm: {
        open: true,
        data: id
      }
    });
  };

  // delete item in the list
  deleteData = id => {
    let deletedData = this.state.measurements.filter(item => item.id !== id);

    this.setState({
      measurements: [...deletedData],
      confirm: {
        open: false,
        data: null
      }
    });
  };

  // UPDATE THE DATA
  saveDataEdit = data => {
    let newItem = {
      id: data.id,
      name: data.name,
      description: data.description,
      unit: data.unit
    };

    let newList = this.state.measurements.map(item =>
      item.id === data.id ? newItem : item
    );

    console.log(newList);

    this.setState({
      measurements: [...newList],
      confirm: {
        open: false,
        data: null
      }
    });
  };

  // save date
  saveData = data => {
    if (this.state.form.type === "add") {
      // create a new item
      let newItem = {
        id: uuid4(),
        name: data.name,
        description: data.description,
        unit: data.unit
      };

      let newDatas = [...this.state.measurements, newItem];
      // console.log("code state: ", this.state.measurements);
      // console.log("code changed: ", newDatas);

      // let newData = this.state.measurements.push(newItem);
      // add it to the state
      this.setState({
        measurements: newDatas
      });
    } else {
      // add it to the state
      let newItem = {
        id: data.id,
        name: data.name,
        description: data.description,
        unit: data.unit
      };

      // let newList = this.state.measurements.map(item =>
      //   item.id === data.id ? newItem : item
      // );

      // console.log("list item: ", newList);

      //
      // this.setState(oldState => ({
      //   measurements: oldState.measurements.map(item =>
      //     item.id === data.id ? { ...newItem } : item
      //   )
      // }));
      console.log("Updating the item in here");

      this.setState(state => {
        console.log("Updating the item in here in state");

        let measurements = state.measurements.map(item =>
          item.id === data.id ? newItem : item
        );

        console.log("new measurements: ", measurements);

        return {
          measurements: measurements
        };
      });
    }
  };

  // return add measurement modal
  Modal = () => {
    if (this.state.addMeasurement === true) {
      return (
        <AddMeasurement
          close={this.closeModal}
          saveData={this.saveData}
          data={this.state.form}
        />
      );
    }
  };

  // return add measurement modal
  ModalEdit = () => {
    if (this.state.editMeasurement === true) {
      return (
        <EditMeasurement
          close={this.closeModal}
          saveData={this.saveDataEdit}
          data={this.state.form}
        />
      );
    }
  };

  render() {
    console.log("the state: ", this.state);
    let functions = { delete: this.openConfirm, update: this.openEditModal };

    return (
      <React.Fragment>
        {this.Modal()}
        {this.ModalEdit()}
        {this.confirmModal()}

        <div className="container pt-3  zoomIn faster animated">
          <div className="row mx-0 px-2">
            <div className="col bg-white">
              <div className="items-containner pt-2 pl-0 mr-3 px-3">
                {/* <h2 className="h3 text-secondary border-bottom pb-2 pt-2">
                Baseline Mesurement
              </h2> */}
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
                      onClick={() => this.openModal("add", null)}
                      className="btn btn-primary btn-outline btn-lg mt-4"
                    >
                      <i className="fa fa-plus"></i> Add Measurement
                    </button>
                  </div>
                </div>
                <hr />
                <div className="items-list">
                  {this.state.measurements.map(item => (
                    <Item key={item.id} data={item} func={functions} />
                  ))}
                </div>
                {/* <hr /> */}
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
