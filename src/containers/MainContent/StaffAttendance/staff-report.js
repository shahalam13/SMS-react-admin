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
            <Label>Select Month</Label>

            <div>
              <select className="form-control">
                <option>Select</option>
                <option>January</option>
                <option>February</option>
                <option>March</option>
                <option>April</option>
                <option>May</option>
                <option>June</option>
                <option>July</option>
                <option>August</option>
                <option>September</option>
                <option>October</option>
                <option>November</option>
                <option>December</option>
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
          label: "Attendance",
          field: "attendance",
          sort: "asc",
          width: 150,
        },
      ],
      rows: [
        {
          date: "02/03/2020",
          attendance: "Present",
        },
        {
          date: "01/03/2020",
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
