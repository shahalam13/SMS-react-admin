import React, { Component } from "react";
import AUX from "../../../hoc/Aux_";
import { MDBDataTable } from "mdbreact";

import AddVisitor from "./add.js";

class VisitorList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpenAdd: false,
    };
  }

  render() {
    const data = {
      columns: [
        {
          label: "Pass ID",
          field: "pass_id",
          sort: "asc",
          width: 150,
        },
        {
          label: "Visitor",
          field: "visitor",
          sort: "asc",
          width: 270,
        },
        {
          label: "ID/Passport #",
          field: "passport",
          sort: "asc",
          width: 100,
        },
        {
          label: "User Type",
          field: "user_type",
          sort: "asc",
          width: 150,
        },
        {
          label: "Check In",
          field: "check_in",
          sort: "asc",
          width: 100,
        },
        {
          label: "Check Out",
          field: "check_out",
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
          pass_id: "A987011",
          visitor: "Mark Dan",
          passport: "A7261712",
          user_type: "Parent",
          check_in: "20/12/2018 2:0 PM",
          check_out: "20/12/2018 2:10 PM",
          action: (
            <span>
              <i
                style={{ fontSize: 20 + "px", cursor: "pointer" }}
                className="mdi mdi-pencil-box-outline"
              ></i>{" "}
              &nbsp;
              <i
                style={{ fontSize: 20 + "px", cursor: "pointer" }}
                className="mdi mdi-delete"
              ></i>{" "}
              &nbsp;
            </span>
          ),
        },
        {
          pass_id: "A123456",
          visitor: "Mark John",
          passport: "A651728",
          user_type: "Student",
          check_in: "20/12/2018 3:0 PM",
          check_out: "20/12/2018 4:10 PM",
          action: (
            <span>
              <i
                style={{ fontSize: 20 + "px", cursor: "pointer" }}
                className="mdi mdi-pencil-box-outline"
              ></i>{" "}
              &nbsp;
              <i
                style={{ fontSize: 20 + "px", cursor: "pointer" }}
                className="mdi mdi-delete"
              ></i>{" "}
              &nbsp;
            </span>
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
                        <h4 className="mt-0 header-title">Visitors</h4>
                        <button
                          type="button"
                          className="btn btn-primary"
                          onClick={() => this.setState({ isOpenAdd: true })}
                        >
                          Add Visitor
                        </button>
                      </div>

                      <MDBDataTable bordered hover data={data} />
                    </div>
                  ) : null}

                  {this.state.isOpenAdd ? (
                    <div className="card-body">
                      <AddVisitor
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
