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
          label: "Full Name",
          field: "full_name",
          sort: "asc",
          width: 150,
        },
        {
          label: "Phne No",
          field: "phone_no",
          sort: "asc",
          width: 270,
        },
        {
          label: "Call Type",
          field: "call_type",
          sort: "asc",
          width: 100,
        },
        {
          label: "Time",
          field: "time",
          sort: "asc",
          width: 150,
        },
        {
          label: "Duration",
          field: "duration",
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
          full_name: "Mark Jhon",
          phone_no: "+8801911654433",
          call_type: "Outgoing",
          time: "12/12/2018 1:15 PM",
          duration: "10 M",
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
          full_name: "Jhon Doe",
          phone_no: "+889121337888",
          call_type: "Outgoing",
          time: "12/12/2018 1:15 PM",
          duration: "05 M",
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
                        <h4 className="mt-0 header-title">Phone Calls</h4>
                        <button
                          type="button"
                          className="btn btn-primary"
                          onClick={() => this.setState({ isOpenAdd: true })}
                        >
                          Add phne call
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
