import React, { Component } from "react";
import AUX from "../../../hoc/Aux_";
import { MDBDataTable } from "mdbreact";

import AddStudent from "./add-student";

import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";

class VisitorList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpenAdd: false,
      drp_button: false,
      drp_button_2: false,
    };
  }

  render() {
    const data = {
      columns: [
        {
          label: "ID",
          field: "id",
          sort: "asc",
          width: 150,
        },
        {
          label: "Name",
          field: "name",
          sort: "asc",
          width: 150,
        },
        {
          label: "Username",
          field: "username",
          sort: "asc",
          width: 270,
        },
        {
          label: "Email address",
          field: "email",
          sort: "asc",
          width: 100,
        },
        {
          label: "Class/section",
          field: "class_section",
          sort: "asc",
          width: 100,
        },
        {
          label: "Action",
          field: "action",
          sort: "asc",
          width: 100,
        },
      ],
      rows: [
        {
          id: 1,
          name: "Elizabeth Banks",
          username: "eliza423",
          email: "eliza423@gmail.com",
          class_section: "Class 1 B - Section 2",
          action: (
            <Dropdown
              isOpen={this.state.drp_button}
              toggle={() =>
                this.setState({ drp_button: !this.state.drp_button })
              }
            >
              <DropdownToggle className="btn btn-primary" caret>
                Actions
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem>
                  <i className="mdi mdi-eye"></i> Attendance
                </DropdownItem>
                <DropdownItem>
                  <i className="mdi mdi-view-module"></i> Marksheet
                </DropdownItem>
                <DropdownItem>
                  <i className="mdi mdi-pencil"></i> Edit
                </DropdownItem>
                <DropdownItem>
                  <i className="mdi mdi-delete"></i> Remove
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          ),
        },
        {
          id: 2,
          name: "Mccallum John",
          username: "mccallum",
          email: "mccallum@gmail.com",
          class_section: "Class 2 A - Section 2",
          action: (
            <Dropdown
              isOpen={this.state.drp_button_2}
              toggle={() =>
                this.setState({ drp_button_2: !this.state.drp_button_2 })
              }
            >
              <DropdownToggle className="btn btn-primary" caret>
                Actions
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem>
                  <i className="mdi mdi-eye"></i> Attendance
                </DropdownItem>
                <DropdownItem>
                  <i className="mdi mdi-view-module"></i> Marksheet
                </DropdownItem>
                <DropdownItem>
                  <i className="mdi mdi-pencil"></i> Edit
                </DropdownItem>
                <DropdownItem>
                  <i className="mdi mdi-delete"></i> Remove
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          ),
        },
      ],
    };
    return (
      <AUX>
        <div className="page-content-wrapper">
          <div className="container-fluid">
            <div className="row">
              <div className="col-12">
                <div className="card m-b-20">
                  {!this.state.isOpenAdd ? (
                    <div className="card-body">
                      <div className="d-flex justify-content-between">
                        <h4 className="mt-0 header-title">List Student</h4>
                        <button
                          type="button"
                          className="btn btn-primary"
                          onClick={() => this.setState({ isOpenAdd: true })}
                        >
                          Add Student
                        </button>
                      </div>

                      <MDBDataTable bordered hover data={data} />
                    </div>
                  ) : null}

                  {this.state.isOpenAdd ? (
                    <div className="card-body">
                      <AddStudent
                        cancelAdd={() => this.setState({ isOpenAdd: false })}
                      />
                    </div>
                  ) : null}
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
