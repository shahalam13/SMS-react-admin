import React, { Component } from "react";
import AUX from "../../../hoc/Aux_";

class Form_eliments extends Component {
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
                      <h4 className="mt-0 header-title">Add Employee</h4>
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
                        Full name
                      </label>
                      <div className="col-sm-10">
                        <input
                          className="form-control"
                          type="text"
                          placeholder="Full Name"
                          id="example-text-input"
                        />
                      </div>
                    </div>

                    <div className="form-group row">
                      <label
                        htmlFor="example-text-input"
                        className="col-sm-2 col-form-label"
                      >
                        Username
                      </label>
                      <div className="col-sm-10">
                        <input
                          className="form-control"
                          type="text"
                          placeholder="Username"
                          id="example-text-input"
                        />
                      </div>
                    </div>

                    <div className="form-group row">
                      <label
                        htmlFor="example-text-input"
                        className="col-sm-2 col-form-label"
                      >
                        Email
                      </label>
                      <div className="col-sm-10">
                        <input
                          className="form-control"
                          type="text"
                          placeholder="Enter your email"
                          id="example-text-input"
                        />
                      </div>
                    </div>

                    <div className="form-group row">
                      <label className="col-sm-2 col-form-label">
                        Password
                      </label>
                      <div className="col-sm-10">
                        <input
                          className="form-control"
                          type="password"
                          placeholder="Enter 6 digit password"
                        />
                      </div>
                    </div>

                    <div className="form-group row">
                      <label
                        htmlFor="example-text-input"
                        className="col-sm-2 col-form-label"
                      >
                        Biometric ID
                      </label>
                      <div className="col-sm-10">
                        <input
                          className="form-control"
                          type="text"
                          placeholder="Biometric ID"
                          id="example-text-input"
                        />
                      </div>
                    </div>

                    <div className="form-group row">
                      <label className="col-sm-2 col-form-label">Gender</label>
                      <div className="col-sm-10">
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="exampleRadios"
                            id="male"
                            value="option2"
                          />
                          <label className="form-check-label" htmlFor="male">
                            Male
                          </label>
                        </div>

                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="exampleRadios"
                            id="female"
                            value="option2"
                          />
                          <label className="form-check-label" htmlFor="female">
                            Female
                          </label>
                        </div>
                      </div>
                    </div>

                    <div className="form-group row">
                      <label
                        htmlFor="example-datetime-local-input"
                        className="col-sm-2 col-form-label"
                      >
                        Birthday
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
                        htmlFor="example-text-input"
                        className="col-sm-2 col-form-label"
                      >
                        Phone No
                      </label>
                      <div className="col-sm-10">
                        <input
                          className="form-control"
                          type="text"
                          placeholder="Phone No"
                          id="example-text-input"
                        />
                      </div>
                    </div>

                    <div className="form-group row">
                      <label className="col-sm-2 col-form-label">
                        Departments
                      </label>
                      <div className="col-sm-10">
                        <select className="form-control">
                          <option>Select</option>
                          <option>Finance</option>
                          <option>HR</option>
                          <option>Teaching</option>
                        </select>
                      </div>
                    </div>

                    <div className="form-group row">
                      <label className="col-sm-2 col-form-label">
                        Designations
                      </label>
                      <div className="col-sm-10">
                        <select className="form-control">
                          <option disabled>Select</option>
                          <option>Manager</option>
                          <option>Assistant</option>
                          <option>Principal</option>
                          <option>Employee</option>
                        </select>
                      </div>
                    </div>

                    <div className="form-group row">
                      <label
                        htmlFor="example-text-input"
                        className="col-sm-2 col-form-label"
                      >
                        Photo
                      </label>
                      <div className="col-sm-10">
                        <input type="file" />
                      </div>
                    </div>

                    <div className="form-group row">
                      <label
                        htmlFor="example-datetime-local-input"
                        className="col-sm-2 col-form-label"
                      >
                        Address
                      </label>
                      <div className="col-sm-10">
                        <textarea
                          placeholder="Address"
                          className="form-control"
                        />
                      </div>
                    </div>

                    <button type="button" className="btn btn-primary">
                      Add Teacher
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

export default Form_eliments;
