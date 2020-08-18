import React, { Component } from "react";
import AUX from "../../../hoc/Aux_";

class AddParent extends Component {
  render() {
    return (
      <AUX>
        <div className="page-content-wrapper">
          <div className="container-fluid">
            <div className="row" style={{ marginTop: -40 + "px" }}>
              <div className="col-12">
                <div className="card m-b-20">
                  <div className="card-body">
                    <div className="d-flex justify-content-between">
                      <h4 className="mt-0 header-title">Add Exam</h4>
                      <button
                        type="button"
                        className="btn btn-danger"
                        onClick={this.props.cancelAdd}
                      >
                        Cancel Add
                      </button>
                    </div>

                    <br />

                    <div className="form-group row">
                      <label
                        htmlFor="example-text-input"
                        className="col-sm-2 col-form-label"
                      >
                        Exam Name
                      </label>
                      <div className="col-sm-10">
                        <input
                          className="form-control"
                          type="text"
                          placeholder="Exam Name"
                          id="example-text-input"
                        />
                      </div>
                    </div>

                    <div className="form-group row">
                      <label className="col-sm-2 col-form-label">Class</label>
                      <div className="col-sm-10">
                        <select className="form-control">
                          <option>Select</option>
                          <option>Class 1</option>
                          <option>Class 2</option>
                          <option>Class 3</option>
                        </select>
                      </div>
                    </div>
                    <div className="form-group row">
                      <label className="col-sm-2 col-form-label">Subject</label>
                      <div className="col-sm-10">
                        <select className="form-control">
                          <option>Select</option>
                          <option>Math</option>
                          <option>English</option>
                        </select>
                      </div>
                    </div>

                    <div className="form-group row">
                      <label className="col-sm-2 col-form-label">
                        Start Date
                      </label>
                      <div className="col-sm-10">
                        <input
                          className="form-control"
                          type="datetime-local"
                          defaultValue="2011-08-19T13:45:00"
                          id="example-datetime-local-input"
                        />
                      </div>
                    </div>

                    <div className="form-group row">
                      <label className="col-sm-2 col-form-label">
                        End Date
                      </label>
                      <div className="col-sm-10">
                        <input
                          className="form-control"
                          type="datetime-local"
                          defaultValue="2011-08-19T13:45:00"
                          id="example-datetime-local-input"
                        />
                      </div>
                    </div>

                    <div className="form-group row">
                      <label
                        htmlFor="example-datetime-local-input"
                        className="col-sm-2 col-form-label"
                      >
                        Note
                      </label>
                      <div className="col-sm-10">
                        <textarea placeholder="Note" className="form-control" />
                      </div>
                    </div>

                    <button
                      style={{ float: "right" }}
                      type="button"
                      className="btn btn-primary"
                    >
                      Add Parent
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </AUX>
    );
  }
}

export default AddParent;
