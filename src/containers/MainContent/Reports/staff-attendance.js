import React, { Component } from "react";
import AUX from "../../../hoc/Aux_";
import { MDBDataTable } from "mdbreact";
import { Row, Col, FormGroup, Label } from "reactstrap";
import FilterBox from "../../../components/filterBox";

class VisitorList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpenAdd: false,
    };
  }

  filterContent = () => {
    return (
      <Row>
        <Col lg="4">
          <FormGroup>
            <Label>From</Label>
            <div>
              <input
                className="form-control"
                type="datetime-local"
                defaultValue="2011-08-19T13:45:00"
                id="example-datetime-local-input"
              />
            </div>
          </FormGroup>
        </Col>

        <Col lg="4">
          <FormGroup>
            <Label>To</Label>
            <div>
              <input
                className="form-control"
                type="datetime-local"
                defaultValue="2011-08-19T13:45:00"
                id="example-datetime-local-input"
              />
            </div>
          </FormGroup>
        </Col>

        <Col lg="4">
          <FormGroup>
            <Label>Status</Label>
            <div>
              <select className="form-control">
                <option>All</option>
                <option>Present</option>
                <option>Absent</option>
              </select>
            </div>
          </FormGroup>
        </Col>
      </Row>
    );
  };

  render() {
    const data = {
      columns: [
        {
          label: "Date",
          field: "date",
          sort: "asc",
          width: 150,
        },
        {
          label: "Full Name",
          field: "name",
          sort: "asc",
          width: 150,
        },
        {
          label: "Attendance",
          field: "attendance",
          sort: "asc",
          width: 150,
        },
        {
          label: "In",
          field: "in",
          sort: "asc",
          width: 150,
        },
        {
          label: "Out",
          field: "out",
          sort: "asc",
          width: 150,
        },
      ],
      rows: [
        {
          date: "11/09/2019",
          name: "Don Boake	",
          attendance: "Present",
          in: "10:00",
          out: "05:00",
        },
        {
          date: "01/04/2020",
          name: "Sara",
          attendance: "Late",
          in: "11:58",
          out: "06:12",
        },
      ],
    };
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
                    <MDBDataTable bordered hover data={data} />
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

export default VisitorList;
