import React, { Component } from "react";
import AUX from "../../../hoc/Aux_";

class AddTransport extends Component {
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
                      <h4 className="mt-0 header-title">Add Transport</h4>
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
                        Transport Title
                      </label>
                      <div className="col-sm-10">
                        <input
                          className="form-control"
                          type="text"
                          placeholder="Transport Title"
                        />
                      </div>
                    </div>

                    <div className="form-group row">
                      <label
                        htmlFor="Transportple-datetime-local-input"
                        className="col-sm-2 col-form-label"
                      >
                        Transport Routes
                      </label>
                      <div className="col-sm-10">
                        <textarea placeholder="Note" className="form-control" />
                      </div>
                    </div>

                    <div className="form-group row">
                      <label className="col-sm-2 col-form-label">
                        Transport vehicles
                      </label>
                      <div className="col-sm-10">
                        <select className="form-control">
                          <option>Select</option>
                          <option>JMK-098 ( John B. Ransom )</option>
                          <option>UIO-765 ( Harold S. Rix )</option>
                        </select>
                      </div>
                    </div>

                    <div className="form-group row">
                      <label
                        htmlFor="Transportple-text-input"
                        className="col-sm-2 col-form-label"
                      >
                        Fare
                      </label>
                      <div className="col-sm-10">
                        <input
                          className="form-control"
                          type="number"
                          placeholder="Manager"
                        />
                      </div>
                    </div>

                    <button
                      type="button"
                      className="btn btn-primary pull-right"
                    >
                      Add Transport
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

export default AddTransport;
