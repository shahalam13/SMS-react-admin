import React, { Component } from "react";
import AUX from "../../../hoc/Aux_";

class AddHostel extends Component {
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
                      <h4 className="mt-0 header-title">Add Hostel Category</h4>
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
                        Hostel Title
                      </label>
                      <div className="col-sm-10">
                        <input
                          className="form-control"
                          type="text"
                          placeholder="Hostel Title"
                        />
                      </div>
                    </div>

                    <div className="form-group row">
                      <label className="col-sm-2 col-form-label">Hostel</label>
                      <div className="col-sm-10">
                        <select className="form-control">
                          <option>Select</option>
                          <option>Building 13</option>
                          <option>Building 12</option>
                        </select>
                      </div>
                    </div>

                    <div className="form-group row">
                      <label
                        htmlFor="Hostelple-text-input"
                        className="col-sm-2 col-form-label"
                      >
                        Fees
                      </label>
                      <div className="col-sm-10">
                        <input
                          className="form-control"
                          type="number"
                          placeholder="Manager"
                        />
                      </div>
                    </div>

                    <div className="form-group row">
                      <label
                        htmlFor="Hostelple-datetime-local-input"
                        className="col-sm-2 col-form-label"
                      >
                        Notes
                      </label>
                      <div className="col-sm-10">
                        <textarea placeholder="Note" className="form-control" />
                      </div>
                    </div>

                    <button
                      type="button"
                      className="btn btn-primary pull-right"
                    >
                      Add Hostel Category
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

export default AddHostel;
