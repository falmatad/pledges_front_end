import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addIndicatorTileDescriptionSource } from "../../../actions/indicator";
class NameSource extends Component {
  state = {
    data: {
      title: "",
      source: ["District"],
      description: ""
    },
    error: {
      target: "",
      msg: ""
    },
    sourceForm: false,
    sourceText: ""
  };

  componentDidMount = () => {
    if (
      this.props.title !== "" ||
      this.props.source.length > 0 ||
      this.props.description !== ""
    ) {
      this.setState({
        data: {
          title: this.props.title,
          source: this.props.source,
          description: this.props.description
        }
      });
    }
  };

  FromChange = e => {
    this.setState({
      data: {
        ...this.state.data,
        [e.target.name]: e.target.value
      },
      error: {
        target: "",
        msg: ""
      }
    });
  };

  submitForm = e => {
    e.preventDefault();
    // validate the name
    if (this.state.data.title.length < 4) {
      this.setState({
        error: {
          target: "title",
          msg: "The Title of data must be atleast 4 characters"
        }
      });
      return true;
    }

    // validate description
    if (this.state.data.description.length < 6) {
      this.setState({
        error: {
          target: "description",
          msg: "The Description of data must be atleast 6 characters"
        }
      });
      return true;
    }

    if (this.state.data.source.length <= 0) {
      this.setState({
        error: {
          target: "source",
          msg: "The Source of data must not be empty"
        },
        sourceForm: true
      });
      return true;
    }

    this.props.addIndicatorTileDescriptionSource(this.state.data);
    this.props.success();
  };

  render() {
    return (
      <div className="container pt-0 zoomIn faster animated">
        <div className="bg-white mt-3 shadow-sm rounded p-4">
          {this.state.error.msg !== "" ? (
            <div className="alert alert-sm alert-danger">
              {this.state.error.msg}
            </div>
          ) : null}
          <form onSubmit={this.submitForm}>
            <div className="form-group">
              <label htmlFor="sourceOfData">Indicator name</label>
              <input
                type="text"
                className={
                  this.state.error.target === "title"
                    ? "form-control is-invalid"
                    : "form-control"
                }
                name="title"
                value={this.state.data.title}
                onChange={this.FromChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="theDescription">Indicator Description</label>
              <textarea
                className={
                  this.state.error.target === "description"
                    ? "form-control is-invalid"
                    : "form-control"
                }
                id="theDescription"
                rows={3}
                name="description"
                value={this.state.data.description}
                onChange={this.FromChange}
              ></textarea>
            </div>

            <div className="bg-light border p-3">
              <div htmlFor="sourceOfData mt-n2">Source of data</div>
              {this.state.sourceForm ? (
                <div className="row mx-0 bg-white pt-3 shadow rounded fadeIn animated">
                  <div className="form-group col">
                    <input
                      type="text"
                      className={
                        this.state.error.target === "source"
                          ? "form-control is-invalid"
                          : "form-control"
                      }
                      placeholder="Enter the new source of data"
                      name="sourceText"
                      value={this.state.sourceText}
                      onChange={e =>
                        this.setState({
                          sourceText: e.target.value,
                          error: { msg: "", target: "" }
                        })
                      }
                    />
                  </div>
                  <div className="col-3 ml-n3">
                    <button
                      className={
                        this.state.sourceText === ""
                          ? "btn btn-primary"
                          : "btn btn-primary bounceIn animated"
                      }
                      disabled={this.state.sourceText === "" ? true : false}
                      onClick={() =>
                        this.setState({
                          sourceForm: false,
                          data: {
                            ...this.state.data,
                            source: [
                              ...this.state.data.source,
                              this.state.sourceText
                            ]
                          },
                          sourceText: ""
                        })
                      }
                    >
                      Add Source
                    </button>{" "}
                    <button
                      className="btn btn-secondary"
                      onClick={() => this.setState({ sourceForm: false })}
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              ) : (
                <div className="row mx-0 bg-white pt-3 shadow rounded flipInX animated">
                  <div className="form-group col">
                    <div
                      className="px-3 py-1 m-1 bg-white border rounded"
                      id="main-div-containner-div-contents"
                      onClick={e => {
                        if (
                          e.target.id === "main-div-containner-div-contents"
                        ) {
                          this.setState({ sourceForm: true });
                        } else {
                          this.setState({
                            sourceForm: false,
                            data: {
                              ...this.state.data,
                              source: this.state.data.source.filter(
                                item => item !== e.target.id
                              )
                            }
                          });
                        }
                      }}
                    >
                      {this.state.data.source.map((item, i) => (
                        <div
                          key={i}
                          className="badge border px-3 bg-primary text-white"
                          id={item}
                          style={{ fontSize: "19px", cursor: "pointer" }}
                          title="click to remove"
                          onClick={() =>
                            this.setState({
                              sourceForm: false
                            })
                          }
                        >
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className="text-right px-1 pt-4">
              <button type="submit" className="btn btn-success btn-lg">
                Continue
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

NameSource.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  source: PropTypes.array,
  addIndicatorTileDescriptionSource: PropTypes.func.isRequired,
  success: PropTypes.func.isRequired
};

export default connect(null, { addIndicatorTileDescriptionSource })(NameSource);
