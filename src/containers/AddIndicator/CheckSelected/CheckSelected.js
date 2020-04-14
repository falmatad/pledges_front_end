import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import axios from "axios";
import { API_URL, CONFIG } from "../../../utils/api";
import setAuthToken from "../../../utils/setAuthToken";
import FailedToLoadData from "./FailedToLoadData";
import Loading from "../../../components/Loading/Loading";
import { createNewIndicator } from "../../../actions/indicator";

class CheckSelected extends Component {
  state = {
    outputId: null,
    loading: true,
    data: {
      pillar: { id: null, title: "" },
      sector: { id: null, title: "" },
      outcome: { id: null, title: "" },
      output: { id: null, title: "" }
    },
    district_id: null,
    failedModal: false
  };

  componentDidMount = async () => {
    try {
      setAuthToken();
      let res = await axios.get(
        `${API_URL}/output/links/${this.props.outputId}`,
        CONFIG
      );

      this.setState({
        loading: false,
        data: {
          pillar: { id: res.data.pillar_id, title: res.data.pillar_title },
          sector: { id: res.data.sector_id, title: res.data.sector_title },
          outcome: { id: res.data.outcome_id, title: res.data.outcome_title },
          output: { id: res.data.output_id, title: res.data.output_title },
          district_id: res.data.district_id
        }
      });
    } catch (error) {
      this.setState({
        failedModal: true,
        loading: false
      });
    }
  };

  SubmitTheData = e => {
    e.preventDefault();

    if (
      (this.state.data.pillar.id !== null) &
      (this.state.data.sector.id !== null) &
      (this.state.data.outcome.id !== null) &
      (this.state.data.output.id !== null)
    ) {
      this.props.createNewIndicator(this.state.data);
      this.props.success();
    }
  };

  render() {
    return (
      <React.Fragment>
        {this.state.loading ? (
          <Loading />
        ) : (
          <React.Fragment>
            {/* check if the request has not failed */}
            {this.state.failedModal ? (
              <FailedToLoadData />
            ) : (
              <form onSubmit={this.SubmitTheData}>
                <div className="container pt-0 display-nones zoomIn faster animated mb-4">
                  <div className="bg-white mt-3 shadow-sm rounded p-4">
                    <h6 className="text-center mx-4 text-secondary border-bottom mt-n2 pb-3">
                      Check if the selected items are correct and chick to
                      change if neccesarry
                    </h6>
                    <div className="mx-4 pt-4">
                      <div className="row mx-2 mb-3">
                        <div className="col">
                          <div className="form-group">
                            <label htmlFor="exampleFormControlInput1">
                              Pillar
                            </label>
                            <input
                              type="text"
                              className="form-control cursor-pointer"
                              name="pillar"
                              value={this.state.data.pillar.title}
                              title={this.state.data.pillar.title}
                              readOnly
                            />
                          </div>
                        </div>

                        <div className="col">
                          <div className="form-group">
                            <label htmlFor="exampleFormControlInput1">
                              Sector
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              name="sector"
                              value={this.state.data.sector.title}
                              title={this.state.data.sector.title}
                              readOnly
                            />
                          </div>
                        </div>
                      </div>
                      <div className="row mx-2">
                        <div className="col">
                          <div className="form-group">
                            <label htmlFor="exampleFormControlInput1">
                              Outcome
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              name="outcome"
                              value={this.state.data.outcome.title}
                              title={this.state.data.outcome.title}
                              readOnly
                            />
                          </div>
                        </div>
                        <div className="col">
                          <div className="form-group">
                            <label htmlFor="exampleFormControlInput1">
                              Output
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              name="output"
                              value={this.state.data.output.title}
                              title={this.state.data.output.title}
                              readOnly
                            />
                          </div>
                        </div>
                      </div>
                      <div className="text-right px-1 mx-3 mt-1 pb-1">
                        <button
                          type="submit"
                          className="btn btn-primary"
                          disabled={
                            this.state.data.pillar.id === null ||
                            this.state.data.sector.id === null ||
                            this.state.data.outcome.id === null ||
                            this.state.data.output.id === null
                              ? true
                              : false
                          }
                        >
                          Continue
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            )}
          </React.Fragment>
        )}
      </React.Fragment>
    );
  }
}

CheckSelected.propTypes = {
  createNewIndicator: PropTypes.func.isRequired,
  success: PropTypes.func.isRequired,
  outputId: PropTypes.string.isRequired
};

export default connect(null, { createNewIndicator })(CheckSelected);
