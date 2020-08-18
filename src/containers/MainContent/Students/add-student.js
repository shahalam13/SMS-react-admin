import React, { Component } from "react";
import AUX from "../../../hoc/Aux_";

class AddStudent extends Component {
  render() {
    return (
      <AUX>
        <div className="page-content-wrapper">
          <div className="container-fluid">
            <div className="row" style={{ marginTop: -40 + "px" }}>
              <div className="col-12">
                <div className="card">
                  <div className="card-body">
                    <div className="d-flex justify-content-between">
                      <h4 className="mt-0 header-title">Add Student</h4>
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
                      <label className="col-sm-2 col-form-label">
                        Full name
                      </label>
                      <div className="col-sm-4">
                        <input
                          className="form-control"
                          type="text"
                          placeholder="Full Name"
                          id="example-text-input"
                        />
                      </div>

                      <label className="col-sm-2 col-form-label">
                        Birthday
                      </label>
                      <div className="col-sm-4">
                        <input
                          className="form-control"
                          type="datetime-local"
                          defaultValue="2011-08-19T13:45:00"
                          id="example-datetime-local-input"
                        />
                      </div>
                    </div>

                    <div className="form-group row">
                      <label className="col-sm-2 col-form-label">Gender</label>
                      <div className="col-sm-4">
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

                      <label className="col-sm-2 col-form-label">Address</label>
                      <div className="col-sm-4">
                        <input
                          className="form-control"
                          type="text"
                          placeholder="Address"
                        />
                      </div>
                    </div>

                    <div className="form-group row">
                      <label className="col-sm-2 col-form-label">
                        Phone No
                      </label>
                      <div className="col-sm-4">
                        <input
                          className="form-control"
                          type="tel"
                          placeholder="Phone No"
                        />
                      </div>

                      <label className="col-sm-2 col-form-label">Photo</label>
                      <div className="col-sm-4">
                        <input type="file" />
                      </div>
                    </div>
                  </div>

                  <hr />
                  <div className="card-body">
                    <div>
                      <h4 className="mt-0 header-title">
                        Admission information
                      </h4>
                    </div>
                    <br />

                    <div className="form-group row">
                      <label className="col-sm-2 col-form-label">
                        Admission No.
                      </label>
                      <div className="col-sm-4">
                        <input
                          className="form-control"
                          type="tel"
                          placeholder="Admission Number"
                        />
                      </div>

                      <label className="col-sm-2 col-form-label">Date</label>
                      <div className="col-sm-4">
                        <input
                          className="form-control"
                          type="datetime-local"
                          defaultValue="2011-08-19T13:45:00"
                          id="example-datetime-local-input"
                        />
                      </div>
                    </div>

                    <div className="form-group row">
                      <label className="col-sm-2 col-form-label">Roll Id</label>
                      <div className="col-sm-4">
                        <input
                          className="form-control"
                          type="text"
                          placeholder="Roll Id"
                        />
                      </div>

                      <label className="col-sm-2 col-form-label">Email</label>
                      <div className="col-sm-4">
                        <input
                          className="form-control"
                          type="email"
                          placeholder="Email Address"
                        />
                      </div>
                    </div>

                    <div className="form-group row">
                      <label className="col-sm-2 col-form-label">
                        Username
                      </label>
                      <div className="col-sm-4">
                        <input
                          className="form-control"
                          type="text"
                          placeholder="Username"
                        />
                      </div>

                      <label className="col-sm-2 col-form-label">
                        Password
                      </label>
                      <div className="col-sm-4">
                        <input
                          className="form-control"
                          type="password"
                          placeholder="Password"
                        />
                      </div>
                    </div>

                    <div className="form-group row">
                      <label className="col-sm-2 col-form-label">Class</label>
                      <div className="col-sm-4">
                        <select className="form-control">
                          <option>Select</option>
                          <option>Class 1</option>
                          <option>Class 2</option>
                          <option>Class 3</option>
                        </select>
                      </div>

                      <label className="col-sm-2 col-form-label">
                        Section name
                      </label>
                      <div className="col-sm-4">
                        <select className="form-control">
                          <option>Select</option>
                          <option>Section A</option>
                          <option>Section B</option>
                          <option>Section C</option>
                        </select>
                      </div>
                    </div>

                    {/* <div className="form-group row">
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
                    </div> */}
                  </div>

                  <hr />
                  <div className="card-body">
                    <div>
                      <h4 className="mt-0 header-title">Parent</h4>
                    </div>
                    <br />

                    <div className="form-group row">
                      <label className="col-sm-2 col-form-label">
                        Father's Name
                      </label>
                      <div className="col-sm-4">
                        <input
                          className="form-control"
                          type="text"
                          placeholder="Father's Name"
                        />
                      </div>

                      <label className="col-sm-2 col-form-label">
                        Mother's Name
                      </label>
                      <div className="col-sm-4">
                        <input
                          className="form-control"
                          type="text"
                          placeholder="Mother's Name"
                        />
                      </div>
                    </div>

                    <div className="form-group row">
                      <label className="col-sm-2 col-form-label">
                        Father's Mobile
                      </label>
                      <div className="col-sm-4">
                        <input
                          className="form-control"
                          type="text"
                          placeholder="Mobile No"
                        />
                      </div>

                      <label className="col-sm-2 col-form-label">
                        Mother's Mobile
                      </label>
                      <div className="col-sm-4">
                        <input
                          className="form-control"
                          type="text"
                          placeholder="Mobile No"
                        />
                      </div>
                    </div>

                    <div className="form-group row">
                      <label className="col-sm-2 col-form-label">
                        Additional Note
                      </label>
                      <div className="col-sm-4">
                        <input className="form-control" type="text" />
                      </div>

                      <label className="col-sm-2 col-form-label">
                        Additional Note
                      </label>
                      <div className="col-sm-4">
                        <input className="form-control" type="text" />
                      </div>
                    </div>

                    <button
                      type="button"
                      className="btn btn-primary"
                      style={{ float: "right" }}
                    >
                      Add Student
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

export default AddStudent;
