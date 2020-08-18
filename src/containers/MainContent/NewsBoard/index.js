import React, { Component } from "react";
import AUX from "../../../hoc/Aux_";
import { MDBDataTable } from "mdbreact";

import AddNews from "./add.js";

class NewsBoard extends Component {
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
          label: "News title",
          field: "title",
          sort: "asc",
          width: 150,
        },
        {
          label: "News content",
          field: "content",
          sort: "asc",
          width: 300,
        },
        {
          label: "For",
          field: "for",
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
          title: "Exam schedule",
          content:
            "Exercitation dolor incididunt eiusmod ipsum in. Nulla ut occaecat aliquip esse esse tempor tempor irure nostrud nostrud ad. Sunt quis esse ea in culpa Lorem est consequat.",
          for: "Students",
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
          title: "Parents meeting",
          content:
            "Exercitation dolor incididunt eiusmod ipsum in. Nulla ut occaecat aliquip esse esse tempor tempor irure nostrud nostrud ad. Sunt quis esse ea in culpa Lorem est consequat.",
          for: "Parents",
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
                        <h4 className="mt-0 header-title">List news</h4>
                        <button
                          type="button"
                          className="btn btn-primary"
                          onClick={() => this.setState({ isOpenAdd: true })}
                        >
                          Add News
                        </button>
                      </div>

                      <MDBDataTable bordered hover data={data} />
                    </div>
                  ) : null}

                  {this.state.isOpenAdd ? (
                    <div className="card-body">
                      <AddNews
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

export default NewsBoard;
