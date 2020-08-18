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
            <Label>Transportation</Label>
            <div>
              <select className="form-control">
                <option>Select</option>
                <option>City Center</option>
                <option>Down Town</option>
              </select>
            </div>
          </FormGroup>
        </Col>

        <Col lg="6">
          <FormGroup>
            <Label>Transport vehicles</Label>
            <div>
              <select className="form-control">
                <option>Select</option>
                <option>UTO-765 ( Juliyot S. Rix )</option>
                <option>JSK-094 ( Mack B. Rock )</option>
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
          label: "User",
          field: "user",
          sort: "asc",
          width: 150,
        },
        {
          label: "Username",
          field: "username",
          sort: "asc",
          width: 150,
        },
        {
          label: "Email Address",
          field: "eamil",
          sort: "asc",
          width: 150,
        },
        {
          label: "Role",
          field: "role",
          sort: "asc",
          width: 150,
        },
      ],
      rows: [
        {
          user: "Don Boake	",
          username: "don",
          eamil: "don@school.com",
          role: "teacher",
        },
        {
          user: "Sara",
          username: "sara",
          eamil: "sara@school.com",
          role: "student",
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
