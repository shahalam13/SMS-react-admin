import React, { Component } from "react";
import AUX from "../../../hoc/Aux_";
import { MDBDataTable } from "mdbreact";

import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

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
          label: "ID",
          field: "id",
          sort: "asc",
          width: 150,
        },
        {
          label: "To",
          field: "to",
          sort: "asc",
          width: 270,
        },
        {
          label: "Type",
          field: "type",
          sort: "asc",
          width: 100,
        },
        {
          label: "Details",
          field: "details",
          sort: "asc",
          width: 300,
        },
        {
          label: "Sender",
          field: "sender",
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
          id: "1",
          to: "Students",
          type: "Email",
          details: "Hello ",
          sender: "Jhon",
          action: (
            <span>
              <i
                style={{ fontSize: 20 + "px", cursor: "pointer" }}
                className="mdi mdi-delete"
              ></i>{" "}
              &nbsp;
            </span>
          ),
        },
        {
          id: "2",
          to: "Parents",
          type: "SMS",
          details:
            "ParentsDear Sir, Our school organizes party for parents next monday, hope to see you there ",
          sender: "Mac",
          action: (
            <span>
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
                <div className="card m-b-20" style={{ padding: 30 + "px" }}>
                  <Tabs>
                    <TabList>
                      <Tab>Send Mail/SMS</Tab>
                      <Tab>History</Tab>
                    </TabList>

                    <TabPanel>
                      <div className="card-body">
                        <div className="form-group row">
                          <label className="col-sm-2 col-form-label">
                            Type of users
                          </label>
                          <div className="col-sm-10">
                            <div className="form-check">
                              <input
                                className="form-check-input"
                                type="radio"
                                name="exampleRadios"
                                id="Administrators"
                                value="option2"
                              />
                              <label
                                className="form-check-label"
                                htmlFor="Administrators"
                              >
                                Administrators
                              </label>
                            </div>

                            <div className="form-check">
                              <input
                                className="form-check-input"
                                type="radio"
                                name="exampleRadios"
                                id="Teachers"
                                value="option2"
                              />
                              <label
                                className="form-check-label"
                                htmlFor="Teachers"
                              >
                                Teachers
                              </label>
                            </div>
                            <div className="form-check">
                              <input
                                className="form-check-input"
                                type="radio"
                                name="exampleRadios"
                                id="Parents"
                                value="option2"
                              />
                              <label
                                className="form-check-label"
                                htmlFor="Parents"
                              >
                                Parents
                              </label>
                            </div>

                            <div className="form-check">
                              <input
                                className="form-check-input"
                                type="radio"
                                name="exampleRadios"
                                id="Students"
                                value="option2"
                              />
                              <label
                                className="form-check-label"
                                htmlFor="Students"
                              >
                                Students
                              </label>
                            </div>
                          </div>
                        </div>

                        <div className="form-group row">
                          <label className="col-sm-2 col-form-label">
                            Send as
                          </label>
                          <div className="col-sm-10">
                            <div className="form-check">
                              <input
                                className="form-check-input"
                                type="radio"
                                name="exampleRadios"
                                id="SMS"
                                value="option2"
                              />
                              <label className="form-check-label" htmlFor="SMS">
                                SMS
                              </label>
                            </div>

                            <div className="form-check">
                              <input
                                className="form-check-input"
                                type="radio"
                                name="exampleRadios"
                                id="Teachers"
                                value="option2"
                              />
                              <label
                                className="form-check-label"
                                htmlFor="Teachers"
                              >
                                Mail
                              </label>
                            </div>
                          </div>
                        </div>

                        <div className="form-group row">
                          <label
                            htmlFor="example-datetime-local-input"
                            className="col-sm-2 col-form-label"
                          >
                            From
                          </label>
                          <div className="col-sm-10">
                            <input
                              className="form-control"
                              type="text"
                              placeholder="Duration"
                              id="example-text-input"
                            />
                          </div>
                        </div>

                        <div className="form-group row">
                          <label
                            htmlFor="example-datetime-local-input"
                            className="col-sm-2 col-form-label"
                          >
                            Message
                          </label>
                          <div className="col-sm-10">
                            <textarea
                              placeholder="Your message"
                              className="form-control"
                            />
                          </div>
                        </div>

                        <button type="button" className="btn btn-primary">
                          Send
                        </button>
                      </div>
                    </TabPanel>
                    <TabPanel>
                      <div className="card-body">
                        <MDBDataTable bordered hover data={data} />
                      </div>
                    </TabPanel>
                  </Tabs>
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
