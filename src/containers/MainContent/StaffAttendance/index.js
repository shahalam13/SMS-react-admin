import React, { Component } from "react";
import AUX from "../../../hoc/Aux_";
import FilterBox from "../../../components/filterBox";

import { Row, Col, FormGroup, Label } from "reactstrap";

class Tables_responsive extends Component {
  filterContent = () => {
    return (
      <Row>
        <Col lg="4">
          <FormGroup>
            <Label>Select Date</Label>

            <input
              className="form-control"
              type="datetime-local"
              defaultValue="2011-08-19T13:45:00"
              id="example-datetime-local-input"
            />
          </FormGroup>
        </Col>
      </Row>
    );
  };
  render() {
    return (
      <AUX>
        <div className="page-content-wrapper">
          <div className="container-fluid">
            <div className="row">
              <FilterBox filterContent={this.filterContent} />
            </div>
            <br />
            <div className="row">
              <div className="col-12">
                <div className="card m-b-20">
                  <div className="card-body">
                    <h4 className="mt-0 header-title">Control attendance</h4>
                    <p className="text-muted m-b-30 font-14">
                      Staff Attendance - Date : 12/08/2020
                    </p>

                    <div className="table-rep-plugin">
                      <div
                        className="table-responsive mb-0"
                        data-pattern="priority-columns"
                      >
                        <table
                          id="tech-companies-1"
                          className="table  table-striped"
                        >
                          <thead>
                            <tr>
                              <th>#</th>
                              <th data-priority="1">Student Name</th>
                              <th data-priority="3">Attendance</th>
                              <th data-priority="1">Notes</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <th># </th>
                              <th>Oliver </th>
                              <td>
                                <div className="form-check form-check-inline">
                                  <input
                                    className="form-check-input"
                                    type="radio"
                                    name="inlineRadioOptions"
                                    id="Present"
                                    value="option1"
                                  />
                                  <label
                                    className="form-check-label"
                                    htmlFor="Present"
                                  >
                                    Present
                                  </label>
                                </div>
                                <div className="form-check form-check-inline">
                                  <input
                                    className="form-check-input"
                                    type="radio"
                                    name="inlineRadioOptions"
                                    id="Absent"
                                    value="option2"
                                  />
                                  <label
                                    className="form-check-label"
                                    htmlFor="Absent"
                                  >
                                    Absent
                                  </label>
                                </div>
                                <div className="form-check form-check-inline">
                                  <input
                                    className="form-check-input"
                                    type="radio"
                                    name="inlineRadioOptions"
                                    id="Late"
                                    value="option2"
                                  />
                                  <label
                                    className="form-check-label"
                                    htmlFor="Late"
                                  >
                                    Late
                                  </label>
                                </div>
                                <div className="form-check form-check-inline">
                                  <input
                                    className="form-check-input"
                                    type="radio"
                                    name="inlineRadioOptions"
                                    id="Excuse"
                                    value="option2"
                                  />
                                  <label
                                    className="form-check-label"
                                    htmlFor="Excuse"
                                  >
                                    Late With Excuse
                                  </label>
                                </div>
                              </td>
                              <td>
                                <input
                                  className="form-control"
                                  type="text"
                                  placeholder="Note"
                                />
                              </td>
                            </tr>
                            <tr>
                              <th>#</th>
                              <th>James</th>
                              <td>
                                <div className="form-check form-check-inline">
                                  <input
                                    className="form-check-input"
                                    type="radio"
                                    name="inlineRadioOptions"
                                    id="Present"
                                    value="option1"
                                  />
                                  <label
                                    className="form-check-label"
                                    htmlFor="Present"
                                  >
                                    Present
                                  </label>
                                </div>
                                <div className="form-check form-check-inline">
                                  <input
                                    className="form-check-input"
                                    type="radio"
                                    name="inlineRadioOptions"
                                    id="Absent"
                                    value="option2"
                                  />
                                  <label
                                    className="form-check-label"
                                    htmlFor="Absent"
                                  >
                                    Absent
                                  </label>
                                </div>
                                <div className="form-check form-check-inline">
                                  <input
                                    className="form-check-input"
                                    type="radio"
                                    name="inlineRadioOptions"
                                    id="Late"
                                    value="option2"
                                  />
                                  <label
                                    className="form-check-label"
                                    htmlFor="Late"
                                  >
                                    Late
                                  </label>
                                </div>
                                <div className="form-check form-check-inline">
                                  <input
                                    className="form-check-input"
                                    type="radio"
                                    name="inlineRadioOptions"
                                    id="Excuse"
                                    value="option2"
                                  />
                                  <label
                                    className="form-check-label"
                                    htmlFor="Excuse"
                                  >
                                    Late With Excuse
                                  </label>
                                </div>
                              </td>
                              <td>
                                <input
                                  className="form-control"
                                  type="text"
                                  placeholder="Note"
                                />
                              </td>
                            </tr>
                          </tbody>
                        </table>
                        <button
                          className="btn btn-primary"
                          style={{ float: "right" }}
                        >
                          Save Attendance
                        </button>
                      </div>
                    </div>
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

export default Tables_responsive;
