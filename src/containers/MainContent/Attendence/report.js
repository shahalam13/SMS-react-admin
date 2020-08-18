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
        <Col lg="6">
          <FormGroup>
            <Label>Select Name</Label>
            <div>
              <select className="form-control">
                <option>Select</option>
                <option>Jhon</option>
                <option>William</option>
              </select>
            </div>
          </FormGroup>
        </Col>

        <Col lg="6">
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
    const data = {
      columns: [
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
          subject: "Math",
          attendance: "Present",
        },
        {
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
