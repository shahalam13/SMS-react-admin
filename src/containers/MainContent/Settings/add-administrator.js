import React, { Component } from "react";
import AUX from "../../../hoc/Aux_";

class AddAdministrator extends Component {
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
                      <h4 className="mt-0 header-title">Add Administrator</h4>
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
                          placeholder="XYZ"
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
                      <label
                        htmlFor="example-text-input"
                        className="col-sm-2 col-form-label"
                      >
                        Password
                      </label>
                      <div className="col-sm-10">
                        <input
                          className="form-control"
                          type="text"
                          placeholder="Password"
                        />
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
                      <label className="col-sm-2 col-form-label">
                        Permissions
                      </label>
                      <div className="col-sm-10">
                        <select className="form-control">
                          <option>Select</option>
                          <option>Super Admin</option>
                          <option>HR</option>
                          <option>Receptionist</option>
                          <option>Store Keeper</option>
                          <option>Notification Sender</option>
                          <option>Administrator</option>
                          <option>Manager</option>
                          <option>Principal</option>
                          <option>Teacher</option>
                          <option>Student</option>
                          <option>Parent</option>
                          <option>Accountant</option>
                          <option>Librarian</option>
                        </select>
                      </div>
                    </div>

                    <button
                      type="button"
                      className="btn btn-primary"
                      style={{ float: "right" }}
                    >
                      Add Administrator
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

export default AddAdministrator;
