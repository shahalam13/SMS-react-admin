import React, { Component } from "react";
import AUX from "../../../hoc/Aux_";
import FilterBox from "../../../components/filterBox";
import moment from "moment";

import { Row, Col, FormGroup, Label } from "reactstrap";

class Vacation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dateFrom: moment().format("YYYY-MM-DDTh:mm:ss"),
      dateTo: moment().format("YYYY-MM-DDTh:mm:ss"),
      dateArray: [],
    };
  }

  getDates = (startDate, stopDate) => {
    var dateArray = [];
    var currentDate = moment(startDate);
    var newStop = moment(stopDate);
    while (currentDate <= newStop) {
      dateArray.push(moment(currentDate).format("MM-DD-YYYY"));
      currentDate = moment(currentDate).add(1, "days");
    }
    return dateArray;
  };

  handaleFromDateChange = (event) => {
    this.setState({ dateFrom: event.target.value }, () => {
      let dateArray = this.getDates(
        moment(this.state.dateFrom).format("MM-DD-YYYY"),
        moment(this.state.dateTo).format("MM-DD-YYYY")
      );
      this.setState({ dateArray });
    });
  };
  handaleToDateChange = (event) => {
    this.setState({ dateTo: event.target.value }, () => {
      let dateArray = this.getDates(
        moment(this.state.dateFrom).format("MM-DD-YYYY"),
        moment(this.state.dateTo).format("MM-DD-YYYY")
      );
      this.setState({ dateArray });
    });

    this.setState({ dateTo: event.target.value });
  };
  filterContent = () => {
    return (
      <Row>
        <Col lg="6">
          <FormGroup>
            <Label>From</Label>

            <input
              className="form-control"
              type="datetime-local"
              value={this.state.dateFrom}
              onChange={this.handaleFromDateChange}
              id="example-datetime-local-input"
            />
          </FormGroup>
        </Col>
        <Col lg="6">
          <FormGroup>
            <Label>To</Label>

            <input
              className="form-control"
              type="datetime-local"
              value={this.state.dateTo}
              onChange={this.handaleToDateChange}
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
                    <h4 className="mt-0 header-title">Confirm vacation</h4>

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
                              <th data-priority="1">Dates</th>
                              <th data-priority="1">Notes</th>
                            </tr>
                          </thead>
                          <tbody>
                            {this.state.dateArray.map((date, index) => (
                              <tr key={index}>
                                <td>{date}</td>
                                <td>
                                  <input
                                    className="form-control"
                                    type="text"
                                    placeholder="Note"
                                  />
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                        <button
                          className="btn btn-primary"
                          style={{ float: "right" }}
                        >
                          Send Request
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

export default Vacation;
