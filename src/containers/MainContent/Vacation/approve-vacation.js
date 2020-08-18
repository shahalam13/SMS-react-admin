import React, { Component } from "react";
import AUX from "../../../hoc/Aux_";
import { MDBDataTable } from "mdbreact";

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
          label: "User",
          field: "name",
          sort: "asc",
          width: 150,
        },
        {
          label: "Role",
          field: "role",
          sort: "asc",
          width: 270,
        },
        {
          label: "Date",
          field: "date",
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
          name: "mikBlumwmike@school.com",
          role: "Teacher",
          date: "27/12/2020",
          action: (
            <span>
              <button type="button" className="btn btn-primary">
                Accectp Vacation
              </button>
              &nbsp;
              <button type="button" className="btn btn-danger">
                Rejected Vacation
              </button>
              &nbsp;
            </span>
          ),
        },
        {
          name: "maculam@school.com",
          role: "Student",
          date: "28/12/2020",
          action: (
            <span>
              <button type="button" className="btn btn-primary">
                Accectp Vacation
              </button>
              &nbsp;
              <button type="button" className="btn btn-danger">
                Rejected Vacation
              </button>
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
                  <div className="card-body">
                    <h4 className="mt-0 header-title">Approve Vacation</h4>

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
