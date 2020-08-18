import React, { Component } from "react";
import AUX from "../../../hoc/Aux_";
import DonutChart from "../../../containers/Chartstypes/Apex/DonutChart";

class dashboard1 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      simple: 80,
      simple68: 68,
      simple37: 37,
      simple72: 72,
    };
  }

  render() {
    return (
      <AUX>
        <div className="page-content-wrapper">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-6 col-xl-3">
                <div className="mini-stat clearfix bg-white">
                  <span className="mini-stat-icon bg-purple mr-0 float-right">
                    <i className="mdi mdi-sort-variant"></i>
                  </span>
                  <div className="mini-stat-info">
                    <span className="counter text-purple">10</span>
                    Classes
                  </div>
                  <div className="clearfix"></div>
                  <p className=" mb-0 m-t-20 text-muted">Hours: 90</p>
                </div>
              </div>
              <div className="col-md-6 col-xl-3">
                <div className="mini-stat clearfix bg-white">
                  <span className="mini-stat-icon bg-blue-grey mr-0 float-right">
                    <i className="mdi mdi-account-multiple"></i>
                  </span>
                  <div className="mini-stat-info">
                    <span className="counter text-blue-grey">50</span>
                    Teachers
                  </div>
                  <div className="clearfix"></div>
                  <p className="text-muted mb-0 m-t-20">
                    Total Subject: 20{" "}
                    {/* <span className="pull-right">
                      <i className="fa fa-caret-up m-r-5"></i>10.25%
                    </span> */}
                  </p>
                </div>
              </div>
              <div className="col-md-6 col-xl-3">
                <div className="mini-stat clearfix bg-white">
                  <span className="mini-stat-icon bg-brown mr-0 float-right">
                    <i className="mdi mdi-human-male-female"></i>
                  </span>
                  <div className="mini-stat-info">
                    <span className="counter text-brown">200</span>
                    Total Students
                  </div>
                  <div className="clearfix"></div>
                  <p className="text-muted mb-0 m-t-20">
                    Todays Attendance: 130
                    {/* <span className="pull-right">
                      <i className="fa fa-caret-up m-r-5"></i>10.25%
                    </span> */}
                  </p>
                </div>
              </div>
              <div className="col-md-6 col-xl-3">
                <div className="mini-stat clearfix bg-white">
                  <span className="mini-stat-icon bg-teal mr-0 float-right">
                    <i className="mdi mdi-home-variant"></i>
                  </span>
                  <div className="mini-stat-info">
                    <span className="counter text-teal">38</span>
                    Total Class Room
                  </div>
                  <div className="clearfix"></div>
                  <p className="text-muted mb-0 m-t-20">
                    Booked: 31
                    {/* <span className="pull-right">
                      <i className="fa fa-caret-up m-r-5"></i>10.25%
                    </span> */}
                  </p>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-xl-4">
                <div className="card m-b-20">
                  <div className="card-body">
                    <div className="profile-widget text-center">
                      <img
                        src="assets/images/users/avatar-2.jpg"
                        className="thumb-lg rounded-circle img-thumbnail"
                        alt="img"
                      />
                      <h5>Jonathan Doe</h5>
                      <p>
                        <i className="fa fa-user"></i> Admin
                      </p>

                      <p className="text-muted">
                        Lorem ipsum dolor sit ametetur adipisicing elit, sed do
                        eiusmod tempor incididunt adipisicing elit.
                      </p>
                      <ul className="list-inline row m-t-20 clearfix">
                        <li className="col-md-4">
                          <a href="#" className="btn btn-sm btn-purple m-t-20">
                            Settings
                          </a>
                        </li>
                        <li className="col-md-4">
                          <a href="#" className="btn btn-sm btn-purple m-t-20">
                            Messages
                          </a>
                        </li>
                        <li className="col-md-4">
                          <a href="#" className="btn btn-sm btn-purple m-t-20">
                            Logout
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-xl-8">
                <div className="card m-b-20">
                  <div className="card-body">
                    <h4 className="mt-0 m-b-30 header-title">
                      Today's Class Schedule
                    </h4>

                    <div className="table-responsive">
                      <table className="table table-vertical mb-0">
                        <tbody>
                          <tr>
                            <td>Time</td>
                            <td>Subject</td>
                            <td>Teacher</td>
                            <td>Class</td>
                            <td>Section</td>
                            <td>Room No</td>
                          </tr>

                          <tr>
                            <td>08:00 AM - 09:00 AM</td>
                            <td>Math</td>
                            <td>Jonathan</td>
                            <td>09th</td>
                            <td>A</td>
                            <td>02</td>
                          </tr>

                          <tr>
                            <td>09:00 AM - 10:00 AM</td>
                            <td>Bangla</td>
                            <td>Jhon</td>
                            <td>08th</td>
                            <td>A</td>
                            <td>21</td>
                          </tr>

                          <tr>
                            <td>10:00 AM - 11:00 AM</td>
                            <td>English</td>
                            <td>Jack</td>
                            <td>06th</td>
                            <td>C</td>
                            <td>34</td>
                          </tr>
                          <tr>
                            <td>11:00 AM - 12:00 PM</td>
                            <td>Accounting</td>
                            <td>Jhon</td>
                            <td>10th</td>
                            <td>A</td>
                            <td>21</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-xl-9">
                <div className="card m-b-20">
                  <div className="card-body">
                    <h4 className="mt-0 m-b-30 header-title">Invoices</h4>

                    <div className="table-responsive">
                      <table className="table table-vertical mb-0">
                        <tbody>
                          <tr>
                            <td>#</td>
                            <td>Title</td>
                            <td>Status</td>
                            <td>Date</td>
                            <td>Due Date</td>
                            <td>Amount</td>
                          </tr>

                          <tr>
                            <td>INVF-4</td>
                            <td>School feeds fees</td>
                            <td>
                              <i className="mdi mdi-checkbox-blank-circle text-danger"></i>{" "}
                              Unpaid
                            </td>
                            <td>5/12/2016</td>
                            <td>10/12/2019</td>
                            <td>$ 17.6</td>
                          </tr>

                          <tr>
                            <td>INVF-3</td>
                            <td>School feeds fees</td>
                            <td>
                              <i className="mdi mdi-checkbox-blank-circle text-danger"></i>{" "}
                              Unpaid
                            </td>
                            <td>5/12/2016</td>
                            <td>10/12/2019</td>
                            <td>$ 22.6</td>
                          </tr>

                          <tr>
                            <td>Recussing payment</td>
                            <td>Admission, Feed</td>
                            <td>
                              <i className="mdi mdi-checkbox-blank-circle text-success"></i>{" "}
                              Paid
                            </td>
                            <td>5/12/2016</td>
                            <td>10/12/2019</td>
                            <td>$ 30.6</td>
                          </tr>
                          <tr>
                            <td>INVF-7</td>
                            <td>School feeds fees</td>
                            <td>
                              <i className="mdi mdi-checkbox-blank-circle text-danger"></i>{" "}
                              Unpaid
                            </td>
                            <td>5/12/2016</td>
                            <td>10/12/2019</td>
                            <td>$ 22.6</td>
                          </tr>
                          <tr>
                            <td>INVF-9</td>
                            <td>School feeds fees</td>
                            <td>
                              <i className="mdi mdi-checkbox-blank-circle text-danger"></i>{" "}
                              Unpaid
                            </td>
                            <td>5/12/2016</td>
                            <td>10/12/2019</td>
                            <td>$ 22.6</td>
                          </tr>

                          <tr>
                            <td>INVF-9</td>
                            <td>School feeds fees</td>
                            <td>
                              <i className="mdi mdi-checkbox-blank-circle text-success"></i>{" "}
                              Paid
                            </td>
                            <td>5/12/2020</td>
                            <td>10/12/2010</td>
                            <td>$ 22.6</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-xl-3">
                <div className="card m-b-20">
                  <div className="card-body">
                    <h4 className="mt-0 header-title">Invoices</h4>

                    <ul className="list-inline widget-chart m-t-20 m-b-15 text-center">
                      <li className="list-inline-item">
                        <h5 className="mb-0">25610</h5>
                        <p className="text-muted font-14">Invoices</p>
                      </li>
                      <li className="list-inline-item">
                        <h5 className="mb-0">56210</h5>
                        <p className="text-muted font-14">Due Invoices</p>
                      </li>
                    </ul>

                    <div align="center">
                      <DonutChart />
                    </div>
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

export default dashboard1;
