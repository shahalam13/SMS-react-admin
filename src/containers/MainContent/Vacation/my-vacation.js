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
          label: "Date",
          field: "date",
          sort: "asc",
          width: 150,
        },
        {
          label: "Status",
          field: "status",
          sort: "asc",
          width: 270,
        },
      ],
      rows: [
        {
          date: "02/12/2020",
          status: <span style={{ color: "green" }}>Accepted Vacation</span>,
        },
        {
          date: "03/12/2020",
          status: <span style={{ color: "red" }}>Rejected Vacation</span>,
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
                    <h4 className="mt-0 header-title">My Vacations</h4>

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
