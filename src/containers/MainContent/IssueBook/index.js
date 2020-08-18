import React, { Component } from "react";
import AUX from "../../../hoc/Aux_";
import { MDBDataTable } from "mdbreact";

import AddIssueBook from "./add.js";

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
          label: "Issue ID",
          field: "issue_id",
          sort: "asc",
          width: 150,
        },
        {
          label: "User",
          field: "user",
          sort: "asc",
          width: 270,
        },
        {
          label: "Book title",
          field: "book_title",
          sort: "asc",
          width: 100,
        },
        {
          label: "Serial No",
          field: "serial_no",
          sort: "asc",
          width: 150,
        },
        {
          label: "Issue Date",
          field: "issue_date",
          sort: "asc",
          width: 150,
        },
        {
          label: "Return Date",
          field: "return_date",
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
          issue_id: "AN890",
          user: "Brittany Babotts",
          book_title: "Your Leadership EDGE",
          serial_no: "96510934",
          issue_date: "29/09/2018 7:10 AM",
          return_date: "28/12/2018 7:10 AM",
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
          issue_id: "hj1121",
          user: "Alice Bean",
          book_title: "Your Leadership EDGE",
          serial_no: "96510939",
          issue_date: "29/09/2018 7:10 AM",
          return_date: "28/12/2018 7:10 AM",
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
                        <h4 className="mt-0 header-title">Issue Book</h4>
                        <button
                          type="button"
                          className="btn btn-primary"
                          onClick={() => this.setState({ isOpenAdd: true })}
                        >
                          Create Book Issue
                        </button>
                      </div>

                      <MDBDataTable bordered hover data={data} />
                    </div>
                  ) : null}

                  {this.state.isOpenAdd ? (
                    <div className="card-body">
                      <AddIssueBook
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
