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
                      <h4 className="mt-0 header-title">Add Parent</h4>
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
                      <label className="col-sm-2 col-form-label">
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
                          type="tel"
                          placeholder="Phone No"
                          id="example-text-input"
                        />
                      </div>
                    </div>

                    <div className="form-group row">
                      <label
                        htmlFor="example-text-input"
                        className="col-sm-2 col-form-label"
                      >
                        Profession
                      </label>
                      <div className="col-sm-10">
                        <input
                          className="form-control"
                          type="text"
                          placeholder="Profession"
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
