import React, { Component } from "react";
import AUX from "../../../hoc/Aux_";
import { MDBDataTable } from "mdbreact";

class UserStatistics extends Component {
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
          width: 100,
        },
        {
          label: "Active Users",
          field: "active",
          sort: "asc",
          width: 100,
        },
        {
          label: "Inactive Users",
          field: "inactive",
          sort: "asc",
          width: 100,
        },
        {
          label: "Total Users",
          field: "total",
          sort: "asc",
          width: 100,
        },
      ],
      rows: [
        {
          name: "Administrators",
          active: 1,
          inactive: 1,
          total: 2,
        },
        {
          name: "Teachers",
          active: 20,
          inactive: 0,
          total: 2,
        },
        {
          name: "Students",
          active: 19,
          inactive: 0,
          total: 19,
        },
        {
          name: "Parents",
          active: 4,
          inactive: 2,
          total: 6,
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
                    <h4 className="mt-0 header-title">Report</h4>

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

export default UserStatistics;
