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
        <Col lg="3">
          <FormGroup>
            <Label>Class</Label>
            <div>
              <select className="form-control">
                <option>Select</option>
                <option>Class 1</option>
                <option>Class 2</option>
              </select>
            </div>
          </FormGroup>
        </Col>

        <Col lg="3">
          <FormGroup>
            <Label>Section Name</Label>
            <div>
              <select className="form-control">
                <option>Select</option>
                <option>Section A</option>
                <option>Section B</option>
              </select>
            </div>
          </FormGroup>
        </Col>
        <Col lg="3">
          <FormGroup>
            <Label>Subject</Label>
            <div>
              <select className="form-control">
                <option>Select</option>
                <option>Math</option>
                <option>Physics</option>
              </select>
            </div>
          </FormGroup>
        </Col>
        <Col lg="3">
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
          label: "Student Name",
          field: "name",
          sort: "asc",
          width: 150,
        },
        {
          label: "Subject",
          field: "subject",
          sort: "asc",
          width: 150,
        },
        {
          label: "Attendance",
          field: "attendance",
          sort: "asc",
          width: 150,
        },
      ],
      rows: [
        {
          date: "11/09/2019",
          name: "Don Boake	",
          subject: "Math",
          attendance: "Present",
        },
        {
          date: "01/04/2020",
          name: "Sara",
          subject: "Math",
          attendance: "Late",
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
