import React, { Component } from "react";
import AUX from "../../../hoc/Aux_";
import { MDBDataTable } from "mdbreact";

class BiometricUsers extends Component {
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
          label: "Full Name",
          field: "full_name",
          sort: "asc",
          width: 100,
        },
        {
          label: "Role",
          field: "role",
          sort: "asc",
          width: 100,
        },
        {
          label: "Biometric ID",
          field: "bio_id",
          sort: "asc",
          width: 100,
        },
      ],
      rows: [
        {
          name: "user123",
          full_name: "William Damian",
          role: "Teacher",
          bio_id: "12",
        },
        {
          name: "user321",
          full_name: "Alexander Joseph",
          role: "Student",
          bio_id: "43",
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

export default BiometricUsers;
