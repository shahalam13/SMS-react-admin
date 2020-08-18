import React, { Component } from "react";
import AUX from "../../../hoc/Aux_";
import { MDBDataTable } from "mdbreact";

import AddTransport from "./add.js";

class Transports extends Component {
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
          label: "Transport Title",
          field: "title",
          sort: "asc",
          width: 150,
        },
        {
          label: "Transport Routes",
          field: "route",
          sort: "asc",
          width: 150,
        },
        {
          label: "Transport vehicles",
          field: "vehicles",
          sort: "asc",
          width: 150,
        },
        {
          label: "Fare",
          field: "fare",
          sort: "asc",
          width: 150,
        },
        {
          label: "Action",
          field: "action",
          sort: "asc",
          width: 150,
        },
      ],
      rows: [
        {
          title: "City Center",
          route: "Alabama to Louisiana",
          vehicles: (
            <span>
              <p>JMK-098 ( John B. Ransom )</p>
              <p>UIO-765 ( Harold S. Rix )</p>
            </span>
          ),
          fare: "360.0",

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
          title: "Down Town",
          route: "Kansas to Mississippi",
          vehicles: (
            <span>
              <p>JSK-094 ( Mack B. Rock )</p>
              <p>UTO-765 ( Juliyot S. Rix )</p>
            </span>
          ),
          fare: "500.0",

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
                        <h4 className="mt-0 header-title">
                          List Transportation
                        </h4>
                        <button
                          type="button"
                          className="btn btn-primary"
                          onClick={() => this.setState({ isOpenAdd: true })}
                        >
                          Add Transportation
                        </button>
                      </div>

                      <MDBDataTable bordered hover data={data} />
                    </div>
                  ) : null}

                  {this.state.isOpenAdd ? (
                    <div className="card-body">
                      <AddTransport
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

export default Transports;
