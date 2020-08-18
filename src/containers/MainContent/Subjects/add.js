import React, { Component } from "react";
import AUX from "../../../hoc/Aux_";

class AddSubject extends Component {
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
                      <h4 className="mt-0 header-title">Add Subject</h4>
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
                        htmlFor="Subjectple-text-input"
                        className="col-sm-2 col-form-label"
                      >
                        Subject Name
                      </label>
                      <div className="col-sm-10">
                        <input
                          className="form-control"
                          type="text"
                          placeholder="Subject Name"
                          id="Subjectple-text-input"
                        />
                      </div>
                    </div>

                    <div className="form-group row">
                      <label className="col-sm-2 col-form-label">Teacher</label>
                      <div className="col-sm-10">
                        <select className="form-control">
                          <option>Select</option>
                          <option>Don Boake</option>
                          <option>Sheila Cameron</option>
                          <option>Huguette Corriveau</option>
                          <option>Patsy Brix-Nielsen</option>
                        </select>
                      </div>
                    </div>

                    <div className="form-group row">
                      <label
                        htmlFor="Subjectple-text-input"
                        className="col-sm-2 col-form-label"
                      >
                        Pass grade
                      </label>
                      <div className="col-sm-10">
                        <input
                          className="form-control"
                          type="text"
                          placeholder="Pass grade"
                        />
                      </div>
                    </div>

                    <div className="form-group row">
                      <label
                        htmlFor="Subjectple-text-input"
                        className="col-sm-2 col-form-label"
                      >
                        Final grade
                      </label>
                      <div className="col-sm-10">
                        <input
                          className="form-control"
                          type="text"
                          placeholder="Final grade"
                        />
                      </div>
                    </div>

                    <div className="form-group row">
                      <label
                        htmlFor="Subjectple-datetime-local-input"
                        className="col-sm-2 col-form-label"
                      >
                        Note
                      </label>
                      <div className="col-sm-10">
                        <textarea placeholder="Note" className="form-control" />
                      </div>
                    </div>

                    <button
                      type="button"
                      className="btn btn-primary pull-right"
                    >
                      Add Subject
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

export default AddSubject;
