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
          label: "Reference Number",
          field: "ref_no",
          sort: "asc",
          width: 150,
        },
        {
          label: "Type",
          field: "type",
          sort: "asc",
          width: 270,
        },
        {
          label: "From",
          field: "from",
          sort: "asc",
          width: 100,
        },
        {
          label: "To",
          field: "to",
          sort: "asc",
          width: 150,
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
          ref_no: "P891821",
          type: "Recieve",
          from: "Public school administratotion",
          to: "School Manager",
          duration: "29/12/2018 7:10 AM",
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
          ref_no: "P890912",
          type: "Dispatch",
          from: "School Manager",
          to: "Food Stores",
          duration: "24/12/2018 2:0 PM",
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
                        <h4 className="mt-0 header-title">Postal</h4>
                        <button
                          type="button"
                          className="btn btn-primary"
                          onClick={() => this.setState({ isOpenAdd: true })}
                        >
                          Add postal
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
