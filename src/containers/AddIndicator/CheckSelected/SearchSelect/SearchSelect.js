import React, { Component } from "react";
import BackDrop from "../../../../shared/BackDrop/BackDrop";

export default class SearchSelect extends Component {
  state = {
    data: [],
    input: "",
    loading: false
  };

  changeInput = () => {
    //   this.setState
  };

  submit = e => {
    console.log("Seach by id: ", this.props.id);

    e.preventDefault();
    this.setState({
      ...this.state,
      data: [],
      loading: true
    });

    setTimeout(() => {
      this.setState({
        ...this.state,
        data: [
          {
            id: 1,
            title: "Agriculture"
          },
          {
            id: 2,
            title: "Techology"
          },
          {
            id: 3,
            title: "Health"
          },
          {
            id: 4,
            title: "Population"
          },
          {
            id: 5,
            title: "Protection"
          },
          {
            id: 6,
            title: "Preventive"
          }
        ],
        loading: false
      });
    }, 1000);
  };

  render() {
    let results = "";
    if (this.state.data.length <= 0) {
      results = (
        <tr colSpan="2">
          <td></td>
          <td>No data found</td>
        </tr>
      );
    } else {
      results = this.state.data.map((item, i) => (
        <tr
          onClick={() =>
            this.props.update(item.id, item.title, this.props.type)
          }
          key={item.id}
        >
          <td>{i + 1}</td>
          <td>{item.title}</td>
        </tr>
      ));
    }

    let Loading = "";
    if (this.state.loading) {
      Loading = (
        <div className="alert alert-success mx-4 zoomIn animated">
          Loading...
        </div>
      );
    }
    return (
      <React.Fragment>
        <BackDrop close={this.props.close} />
        <div
          className="modal-dialog zoomIn animated modal-lg add-task-modal fixed-modal"
          role="document"
        >
          <div className="modal-content">
            <div className="modal-header bg-primary">
              <h5 className="modal-title text-white">Modal title</h5>
              <button
                onClick={() => this.props.close()}
                type="button"
                className="close text-white"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body px-4 mb-n3">
              <form onSubmit={this.submit}>
                <div className="row pb-3">
                  <input
                    type="search"
                    className="col form-control"
                    name="search"
                    value={this.state.input}
                    onChange={this.changeInput}
                    placeholder="Search"
                  />
                  <button className="btn btn-success col=3 ml-n1">
                    Search
                  </button>
                </div>
              </form>
              {/* <hr /> */}
            </div>
            <div style={{ maxHeight: "70vh", overflowX: "auto" }}>
              {Loading}
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th style={{ width: "10px" }}>#</th>
                    <th>Name</th>
                  </tr>
                </thead>
                <tbody>{results}</tbody>
              </table>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
