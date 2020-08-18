import React, { Component } from "react";
import AUX from "../../../hoc/Aux_";
import { MDBDataTable } from "mdbreact";

import AddParent from "./add.js";

class ParentList extends Component {
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
          label: "Exam name",
          field: "name",
          sort: "asc",
          width: 150,
        },
        {
          label: "Description",
          field: "description",
          sort: "asc",
          width: 150,
        },
        {
          label: "Date",
          field: "date",
          sort: "asc",
          width: 270,
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
          name: "First Term",
          description: "First Term Exams",
          date: "08/12/2016 -> 12/09/2017",
          action: (
            <span>
              <i
                style={{ fontSize: 20 + "px", cursor: "pointer" }}
                className="mdi mdi-eye"
              ></i>{" "}
              &nbsp;
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
          id: 2,
          name: "Second Term",
          description: "Second Term Exams",
          date: "20/08/2016 -> 12/09/2017",
          action: (
            <span>
              <i
                style={{ fontSize: 20 + "px", cursor: "pointer" }}
                className="mdi mdi-eye"
              ></i>{" "}
              &nbsp;
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
                        <h4 className="mt-0 header-title">Exams</h4>
                        <button
                          type="button"
                          className="btn btn-primary"
                          onClick={() => this.setState({ isOpenAdd: true })}
                        >
                          Add Parent
                        </button>
                      </div>

                      <MDBDataTable bordered hover data={data} />
                    </div>
                  ) : null}

                  {this.state.isOpenAdd ? (
                    <div className="card-body">
                      <AddParent
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

export default ParentList;
