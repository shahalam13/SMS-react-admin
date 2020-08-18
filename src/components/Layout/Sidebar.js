import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";
import "react-perfect-scrollbar/dist/css/styles.css";
import PerfectScrollbar from "react-perfect-scrollbar";
import $ from "jquery";

class sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Tab: "index",
      SubTab: "",
      MoreTab: "",
      dashboard_menu: false,
      email_menu: false,
      ui_menu: false,
      form_menu: false,
      chart_menu: false,
      table_menu: false,
      icon_menu: false,
      map_menu: false,
      auth_menu: false,
      extra_menu: false,
      eco_menu: false,
      emt_menu: false,
      hostel_menu: false,
      transportation: false,
      reports: false,
    };
  }

  setActiveTab = (tab, subtab, moretab, toggleTab, e) => {
    this.setState({ Tab: tab, SubTab: subtab, MoreTab: moretab });
  };

  componentDidMount() {
    var now_route = "";
    var pageUrl = window.location.pathname.split(/[?#]/)[0];
    now_route = pageUrl.substr(1).replace(/_/g, " ");
    $("#now_routing").empty();
    if (now_route === "") {
      now_route = "Dashboard";
    } else {
    }
    $("#now_routing").append(now_route);

    $(".toggle-search").on("click", function() {
      var targetId = $(this).data("target");
      var $searchBar;
      if (targetId) {
        $searchBar = $(targetId);
        $searchBar.toggleClass("open");
      }
    });

    $(".button-menu-mobile").on("click", function(event) {
      event.preventDefault();
      $("body").toggleClass("enlarged");
    });

    $("li.has_sub li").on("click", function(event) {
      $("body").toggleClass("enlarged");
    });
  }
  componentDidUpdate() {
    var now_route = "";
    var pageUrl = window.location.pathname.split(/[?#]/)[0];
    now_route = pageUrl.replace(/[^\w\s]/gi, " ");

    $("#now_routing").empty();
    if (now_route === "") {
      now_route = "Dashboard";
    } else {
    }
    $("#now_routing").append(now_route);
  }

  render() {
    return (
      <div className="left side-menu">
        <div className="topbar-left">
          <div className="">
            <Link to="/" className="logo">
              <img src="assets/images/logo-sm.png" height="36" alt="logo" />
            </Link>
          </div>
        </div>

        <div className="sidebar-inner slimscrollleft">
          <PerfectScrollbar>
            <div id="sidebar-menu">
              <ul>
                <li>
                  <Link to="/">
                    <i className="mdi mdi-view-dashboard"></i>
                    <span> Dashboard </span>
                  </Link>
                </li>

                <li
                  className={
                    this.state.email_menu
                      ? "has_sub active-menu nav-active"
                      : "has_sub"
                  }
                >
                  <Link
                    to="#"
                    onClick={() =>
                      this.setState({
                        email_menu: !this.state.email_menu,
                        dashboard_menu: false,
                        ui_menu: false,
                        form_menu: false,
                        chart_menu: false,
                        table_menu: false,
                        icon_menu: false,
                        map_menu: false,
                        auth_menu: false,
                        extra_menu: false,
                        eco_menu: false,
                        emt_menu: false,
                        hostel_menu: false,
                        transportation: false,
                        reports: false,
                      })
                    }
                    className={
                      this.state.Tab === "email"
                        ? "waves-effect active-menu"
                        : "waves-effect"
                    }
                  >
                    <i className="mdi mdi-chevron-double-right"></i>
                    <span>
                      {" "}
                      Welcome Office{" "}
                      <span className="pull-right">
                        <i className="mdi mdi-chevron-right"></i>
                      </span>{" "}
                    </span>
                  </Link>
                  <ul
                    className="list-unstyled"
                    style={{
                      display: this.state.email_menu ? "block" : "none",
                    }}
                  >
                    <li>
                      <Link
                        className={
                          this.state.SubTab === "email_inbox"
                            ? "active-menu"
                            : ""
                        }
                        onClick={this.setActiveTab.bind(
                          this,
                          "email",
                          "email_inbox",
                          ""
                        )}
                        to="list-visitor"
                      >
                        Visitors
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={
                          this.state.SubTab === "email_read"
                            ? "active-menu"
                            : ""
                        }
                        onClick={this.setActiveTab.bind(
                          this,
                          "email",
                          "email_read",
                          ""
                        )}
                        to="phone-calls"
                      >
                        Phone Calls
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={
                          this.state.SubTab === "email_compose"
                            ? "active-menu"
                            : ""
                        }
                        onClick={this.setActiveTab.bind(
                          this,
                          "email",
                          "email_compose",
                          ""
                        )}
                        to="list-postal"
                      >
                        Postal
                      </Link>
                    </li>
                  </ul>
                </li>

                <li>
                  <Link
                    to="list-message"
                    className={
                      this.state.Tab === "list-message"
                        ? "waves-effect active-menu"
                        : "waves-effect"
                    }
                    onClick={this.setActiveTab.bind(
                      this,
                      "list-message",
                      "",
                      ""
                    )}
                  >
                    <i className="mdi mdi-message"></i>
                    <span> Messages </span>
                  </Link>
                </li>

                <li>
                  <Link
                    to="list-mail"
                    className={
                      this.state.Tab === "mail"
                        ? "waves-effect active-menu"
                        : "waves-effect"
                    }
                    onClick={this.setActiveTab.bind(this, "mail", "", "")}
                  >
                    <i className="mdi mdi-cellphone"></i>
                    <span> Mail/SMS </span>
                  </Link>
                </li>

                <li>
                  <Link
                    to="mobile-notifications"
                    className={
                      this.state.Tab === "notification"
                        ? "waves-effect active-menu"
                        : "waves-effect"
                    }
                    onClick={this.setActiveTab.bind(
                      this,
                      "notification",
                      "",
                      ""
                    )}
                  >
                    <i className="mdi mdi-bell-ring"></i>
                    <span> MObile Notifications </span>
                  </Link>
                </li>

                <li>
                  <Link
                    to="class-schedules"
                    className={
                      this.state.Tab === "schedule"
                        ? "waves-effect active-menu"
                        : "waves-effect"
                    }
                    onClick={this.setActiveTab.bind(this, "schedule", "", "")}
                  >
                    <i className="mdi mdi-sort-numeric"></i>
                    <span> Classes Schedule </span>
                  </Link>
                </li>

                <li
                  className={
                    this.state.form_menu
                      ? "has_sub active-menu nav-active"
                      : "has_sub"
                  }
                >
                  <Link
                    to="#"
                    onClick={() =>
                      this.setState({
                        form_menu: !this.state.form_menu,
                        dashboard_menu: false,
                        email_menu: false,
                        ui_menu: false,
                        chart_menu: false,
                        table_menu: false,
                        icon_menu: false,
                        map_menu: false,
                        auth_menu: false,
                        extra_menu: false,
                        eco_menu: false,
                        emt_menu: false,
                        hostel_menu: false,
                        transportation: false,
                        reports: false,
                      })
                    }
                    className={
                      this.state.Tab === "form"
                        ? "waves-effect active"
                        : "waves-effect"
                    }
                  >
                    <i className="mdi mdi-check-all"></i>
                    <span>
                      {" "}
                      Attendance{" "}
                      <span className="pull-right">
                        <i className="mdi mdi-chevron-right"></i>
                      </span>{" "}
                    </span>
                  </Link>
                  <ul
                    className="list-unstyled"
                    style={{ display: this.state.form_menu ? "block" : "none" }}
                  >
                    <li>
                      <Link
                        className={
                          this.state.SubTab === "take-attendance"
                            ? "active-menu"
                            : ""
                        }
                        onClick={this.setActiveTab.bind(
                          this,
                          "form",
                          "take-attendance",
                          ""
                        )}
                        to="take-attendance"
                      >
                        Take Attendance
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={
                          this.state.SubTab === "attendance-report"
                            ? "active-menu"
                            : ""
                        }
                        onClick={this.setActiveTab.bind(
                          this,
                          "form",
                          "attendance-report",
                          ""
                        )}
                        to="attendance-report"
                      >
                        Attendance Report
                      </Link>
                    </li>
                  </ul>
                </li>

                <li
                  className={
                    this.state.chart_menu
                      ? "has_sub active-menu nav-active"
                      : "has_sub"
                  }
                >
                  <Link
                    to="#"
                    onClick={() =>
                      this.setState({
                        chart_menu: !this.state.chart_menu,
                        dashboard_menu: false,
                        email_menu: false,
                        ui_menu: false,
                        form_menu: false,
                        table_menu: false,
                        icon_menu: false,
                        map_menu: false,
                        auth_menu: false,
                        extra_menu: false,
                        eco_menu: false,
                        emt_menu: false,
                        hostel_menu: false,
                        transportation: false,
                        reports: false,
                      })
                    }
                    className={
                      this.state.Tab === "chart"
                        ? "waves-effect active"
                        : "waves-effect"
                    }
                  >
                    <i className="mdi mdi-check"></i>
                    <span>
                      {" "}
                      Staff Attendance{" "}
                      <span className="pull-right">
                        <i className="mdi mdi-chevron-right"></i>
                      </span>{" "}
                    </span>
                  </Link>
                  <ul
                    className="list-unstyled"
                    style={{
                      display: this.state.chart_menu ? "block" : "none",
                    }}
                  >
                    <li>
                      <Link
                        className={
                          this.state.SubTab === "staff-attendance"
                            ? "active-menu"
                            : ""
                        }
                        onClick={this.setActiveTab.bind(
                          this,
                          "chart",
                          "staff-attendance",
                          ""
                        )}
                        to="staff-attendance"
                      >
                        Take Attendance
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={
                          this.state.SubTab === "staff-attendance-report"
                            ? "active-menu"
                            : ""
                        }
                        onClick={this.setActiveTab.bind(
                          this,
                          "chart",
                          "staff-attendance-report",
                          ""
                        )}
                        to="staff-attendance-report"
                      >
                        Attendance Report
                      </Link>
                    </li>
                  </ul>
                </li>

                <li
                  className={
                    this.state.table_menu
                      ? "has_sub active-menu nav-active"
                      : "has_sub"
                  }
                >
                  <Link
                    to="#"
                    onClick={() =>
                      this.setState({
                        table_menu: !this.state.table_menu,
                        dashboard_menu: false,
                        email_menu: false,
                        ui_menu: false,
                        form_menu: false,
                        chart_menu: false,
                        icon_menu: false,
                        map_menu: false,
                        auth_menu: false,
                        extra_menu: false,
                        eco_menu: false,
                        emt_menu: false,
                        hostel_menu: false,
                        transportation: false,
                        reports: false,
                      })
                    }
                    className={
                      this.state.Tab === "table"
                        ? "waves-effect active-menu"
                        : "waves-effect"
                    }
                  >
                    <i className="mdi mdi-airplane"></i>
                    <span>
                      {" "}
                      Vacation{" "}
                      <span className="pull-right">
                        <i className="mdi mdi-chevron-right"></i>
                      </span>{" "}
                    </span>
                  </Link>
                  <ul
                    className="list-unstyled"
                    style={{
                      display: this.state.table_menu ? "block" : "none",
                    }}
                  >
                    <li>
                      <Link
                        className={
                          this.state.SubTab === "tables_basic"
                            ? "active-menu"
                            : ""
                        }
                        onClick={this.setActiveTab.bind(
                          this,
                          "table",
                          "tables_basic",
                          ""
                        )}
                        to="request-vacation"
                      >
                        Request Vacation
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={
                          this.state.SubTab === "tables_datatable"
                            ? "active-menu"
                            : ""
                        }
                        onClick={this.setActiveTab.bind(
                          this,
                          "table",
                          "tables_datatable",
                          ""
                        )}
                        to="approve-vacation"
                      >
                        Approve Vacation
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={
                          this.state.SubTab === "tables_responsive"
                            ? "active-menu"
                            : ""
                        }
                        onClick={this.setActiveTab.bind(
                          this,
                          "table",
                          "tables_responsive",
                          ""
                        )}
                        to="my-vacation"
                      >
                        My Vacation
                      </Link>
                    </li>
                  </ul>
                </li>

                <li
                  className={
                    this.state.icon_menu
                      ? "has_sub active-menu nav-active"
                      : "has_sub"
                  }
                >
                  <Link
                    to="#"
                    onClick={() =>
                      this.setState({
                        icon_menu: !this.state.icon_menu,
                        dashboard_menu: false,
                        email_menu: false,
                        ui_menu: false,
                        form_menu: false,
                        chart_menu: false,
                        table_menu: false,
                        map_menu: false,
                        auth_menu: false,
                        extra_menu: false,
                        eco_menu: false,
                        emt_menu: false,
                        hostel_menu: false,
                        transportation: false,
                        reports: false,
                      })
                    }
                    className={
                      this.state.Tab === "icon"
                        ? "waves-effect active-menu"
                        : "waves-effect"
                    }
                  >
                    <i className="mdi mdi-library"></i>{" "}
                    <span>
                      {" "}
                      Library{" "}
                      <span className="pull-right">
                        <i className="mdi mdi-chevron-right"></i>
                      </span>
                    </span>{" "}
                  </Link>
                  <ul
                    className="list-unstyled"
                    style={{ display: this.state.icon_menu ? "block" : "none" }}
                  >
                    <li>
                      <Link
                        className={
                          this.state.SubTab === "icons_material"
                            ? "active-menu"
                            : ""
                        }
                        onClick={this.setActiveTab.bind(
                          this,
                          "icon",
                          "icons_material",
                          ""
                        )}
                        to="issue-book"
                      >
                        Issue Book
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={
                          this.state.SubTab === "icons_ion" ? "active-menu" : ""
                        }
                        onClick={this.setActiveTab.bind(
                          this,
                          "icon",
                          "icons_ion",
                          ""
                        )}
                        to="return-book"
                      >
                        Return Book
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={
                          this.state.SubTab === "icons_fontawesome"
                            ? "active-menu"
                            : ""
                        }
                        onClick={this.setActiveTab.bind(
                          this,
                          "icon",
                          "icons_fontawesome",
                          ""
                        )}
                        to="list-book"
                      >
                        List Book
                      </Link>
                    </li>
                    {/* <li>
                      <Link
                        className={
                          this.state.SubTab === "icons_themify"
                            ? "active-menu"
                            : ""
                        }
                        onClick={this.setActiveTab.bind(
                          this,
                          "icon",
                          "icons_themify",
                          ""
                        )}
                        to="icons_themify"
                      >
                        Manage Subscription
                      </Link>
                    </li> */}
                  </ul>
                </li>

                <li
                  className={
                    this.state.map_menu
                      ? "has_sub active-menu nav-active"
                      : "has_sub"
                  }
                >
                  <Link
                    to="#"
                    onClick={() =>
                      this.setState({
                        map_menu: !this.state.map_menu,
                        dashboard_menu: false,
                        email_menu: false,
                        ui_menu: false,
                        form_menu: false,
                        chart_menu: false,
                        table_menu: false,
                        icon_menu: false,
                        auth_menu: false,
                        extra_menu: false,
                        eco_menu: false,
                        emt_menu: false,
                        hostel_menu: false,
                        transportation: false,
                        reports: false,
                      })
                    }
                    className={
                      this.state.Tab === "map"
                        ? "waves-effect active-menu"
                        : "waves-effect"
                    }
                  >
                    <i className="mdi mdi-wallet-travel"></i>
                    <span>
                      {" "}
                      Employees{" "}
                      <span className="pull-right">
                        <i className="mdi mdi-chevron-right"></i>
                      </span>
                    </span>
                  </Link>
                  <ul
                    className="list-unstyled"
                    style={{ display: this.state.map_menu ? "block" : "none" }}
                  >
                    <li>
                      <Link
                        className={
                          this.state.SubTab === "maps_google"
                            ? "active-menu"
                            : ""
                        }
                        onClick={this.setActiveTab.bind(
                          this,
                          "map",
                          "maps_google",
                          ""
                        )}
                        to="employees"
                      >
                        {" "}
                        Employees
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={
                          this.state.SubTab === "maps_vector"
                            ? "active-menu"
                            : ""
                        }
                        onClick={this.setActiveTab.bind(
                          this,
                          "map",
                          "maps_vector",
                          ""
                        )}
                        to="teachers"
                      >
                        {" "}
                        Teachers
                      </Link>
                    </li>

                    <li>
                      <Link
                        className={
                          this.state.SubTab === "department"
                            ? "active-menu"
                            : ""
                        }
                        onClick={this.setActiveTab.bind(
                          this,
                          "map",
                          "department",
                          ""
                        )}
                        to="departments"
                      >
                        {" "}
                        Departments
                      </Link>
                    </li>

                    <li>
                      <Link
                        className={
                          this.state.SubTab === "designation"
                            ? "active-menu"
                            : ""
                        }
                        onClick={this.setActiveTab.bind(
                          this,
                          "map",
                          "designation",
                          ""
                        )}
                        to="designations"
                      >
                        {" "}
                        Designations
                      </Link>
                    </li>
                  </ul>
                </li>

                <li>
                  <Link
                    to="students"
                    className={
                      this.state.Tab === "students" ? "active-menu" : ""
                    }
                    onClick={this.setActiveTab.bind(this, "students", "", "")}
                  >
                    <i className="mdi mdi-account-multiple"></i>
                    <span> Students </span>
                  </Link>
                </li>

                <li>
                  <Link
                    to="parents"
                    className={
                      this.state.Tab === "parents"
                        ? "waves-effect active-menu"
                        : "waves-effect"
                    }
                    onClick={this.setActiveTab.bind(this, "parents", "", "")}
                  >
                    <i className="mdi mdi-account-multiple-outline"></i>
                    <span> Parents </span>
                  </Link>
                </li>

                <li>
                  <Link
                    to="grade-levels"
                    className={
                      this.state.Tab === "grade_levels"
                        ? "waves-effect active-menu"
                        : "waves-effect"
                    }
                    onClick={this.setActiveTab.bind(
                      this,
                      "grade_levels",
                      "",
                      ""
                    )}
                  >
                    <i className="mdi mdi-layers"></i>
                    <span> Grade Levels </span>
                  </Link>
                </li>

                <li>
                  <Link
                    to="list-exam"
                    className={
                      this.state.Tab === "exam_list"
                        ? "waves-effect active-menu"
                        : "waves-effect"
                    }
                    onClick={this.setActiveTab.bind(this, "exam_list", "", "")}
                  >
                    <i className="mdi mdi-format-list-bulleted"></i>
                    <span> Exams List </span>
                  </Link>
                </li>
                {/* 
                <li>
                  <Link
                    to="calendar"
                    className={
                      this.state.Tab === "online_exam"
                        ? "waves-effect active-menu"
                        : "waves-effect"
                    }
                    onClick={this.setActiveTab.bind(
                      this,
                      "online_exam",
                      "",
                      ""
                    )}
                  >
                    <i className="mdi mdi-webcam"></i>
                    <span> Online Exams </span>
                  </Link>
                </li> */}

                <li>
                  <Link
                    to="news-board"
                    className={
                      this.state.Tab === "news_board"
                        ? "waves-effect active-menu"
                        : "waves-effect"
                    }
                    onClick={this.setActiveTab.bind(this, "news_board", "", "")}
                  >
                    <i className="mdi mdi-newspaper"></i>
                    <span> News Board </span>
                  </Link>
                </li>

                <li
                  className={
                    this.state.eco_menu
                      ? "has_sub active-menu nav-active"
                      : "has_sub"
                  }
                >
                  <Link
                    to="#"
                    onClick={() =>
                      this.setState({
                        eco_menu: !this.state.eco_menu,
                        dashboard_menu: false,
                        email_menu: false,
                        ui_menu: false,
                        form_menu: false,
                        chart_menu: false,
                        table_menu: false,
                        icon_menu: false,
                        map_menu: false,
                        auth_menu: false,
                        extra_menu: false,
                        emt_menu: false,
                        transportation: false,
                        hostel_menu: false,
                        reports: false,
                      })
                    }
                    className={
                      this.state.Tab === "eco"
                        ? "waves-effect active-menu"
                        : "waves-effect"
                    }
                  >
                    <i className="mdi mdi mdi-home-variant"></i>
                    <span>
                      {" "}
                      Classes{" "}
                      <span className="pull-right">
                        <i className="mdi mdi-chevron-right"></i>
                      </span>{" "}
                    </span>
                  </Link>
                  <ul
                    className="list-unstyled"
                    style={{ display: this.state.eco_menu ? "block" : "none" }}
                  >
                    <li>
                      <Link
                        className={
                          this.state.SubTab === "ecommerce_product_list"
                            ? "active-menu"
                            : ""
                        }
                        onClick={this.setActiveTab.bind(
                          this,
                          "eco",
                          "ecommerce_product_list",
                          ""
                        )}
                        to="classes"
                      >
                        Classes
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={
                          this.state.SubTab === "ecommerce_product_grid"
                            ? "active-menu"
                            : ""
                        }
                        onClick={this.setActiveTab.bind(
                          this,
                          "eco",
                          "ecommerce_product_grid",
                          ""
                        )}
                        to="sections"
                      >
                        Section
                      </Link>
                    </li>
                  </ul>
                </li>

                <li>
                  <Link
                    to="subjects"
                    className={
                      this.state.Tab === "subjects"
                        ? "waves-effect active-menu"
                        : "waves-effect"
                    }
                    onClick={this.setActiveTab.bind(this, "subjects", "", "")}
                  >
                    <i className="mdi mdi-webcam"></i>
                    <span> Subjects </span>
                  </Link>
                </li>

                <li
                  className={
                    this.state.hostel_menu
                      ? "has_sub active-menu nav-active"
                      : "has_sub"
                  }
                >
                  <Link
                    to="#"
                    onClick={() =>
                      this.setState({
                        hostel_menu: !this.state.hostel_menu,
                        dashboard_menu: false,
                        email_menu: false,
                        ui_menu: false,
                        form_menu: false,
                        chart_menu: false,
                        table_menu: false,
                        icon_menu: false,
                        map_menu: false,
                        auth_menu: false,
                        extra_menu: false,
                        eco_menu: false,
                        emt_menu: false,
                        transportation: false,
                        reports: false,
                      })
                    }
                    className={
                      this.state.Tab === "emt"
                        ? "waves-effect active-menu"
                        : "waves-effect"
                    }
                  >
                    <i className="mdi mdi-home"></i>
                    <span>
                      {" "}
                      Hostel Management{" "}
                      <span className="pull-right">
                        <i className="mdi mdi-chevron-right"></i>
                      </span>{" "}
                    </span>
                  </Link>

                  <ul
                    className="list-unstyled"
                    style={{
                      display: this.state.hostel_menu ? "block" : "none",
                    }}
                  >
                    <li>
                      <Link
                        className={
                          this.state.SubTab === "hostel_list"
                            ? "active-menu"
                            : ""
                        }
                        onClick={this.setActiveTab.bind(
                          this,
                          "emt",
                          "hostel_list",
                          ""
                        )}
                        to="hostels"
                      >
                        Hostel
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={
                          this.state.SubTab === "hostel_cat"
                            ? "active-menu"
                            : ""
                        }
                        onClick={this.setActiveTab.bind(
                          this,
                          "emt",
                          "hostel_cat",
                          ""
                        )}
                        to="hostel-category"
                      >
                        Hostel Categories
                      </Link>
                    </li>
                  </ul>
                </li>

                <li
                  className={
                    this.state.transportation
                      ? "has_sub active-menu nav-active"
                      : "has_sub"
                  }
                >
                  <Link
                    to="#"
                    onClick={() =>
                      this.setState({
                        transportation: !this.state.transportation,
                        dashboard_menu: false,
                        email_menu: false,
                        ui_menu: false,
                        form_menu: false,
                        chart_menu: false,
                        table_menu: false,
                        icon_menu: false,
                        map_menu: false,
                        auth_menu: false,
                        extra_menu: false,
                        eco_menu: false,
                        hostel_menu: false,
                        reports: false,
                      })
                    }
                    className={
                      this.state.Tab === "transport"
                        ? "waves-effect active-menu"
                        : "waves-effect"
                    }
                  >
                    <i className="mdi mdi-bus"></i>
                    <span>
                      {" "}
                      Transportation{" "}
                      <span className="pull-right">
                        <i className="mdi mdi-chevron-right"></i>
                      </span>{" "}
                    </span>
                  </Link>

                  <ul
                    className="list-unstyled"
                    style={{
                      display: this.state.transportation ? "block" : "none",
                    }}
                  >
                    <li>
                      <Link
                        className={
                          this.state.SubTab === "transportation"
                            ? "active-menu"
                            : ""
                        }
                        onClick={this.setActiveTab.bind(
                          this,
                          "transport",
                          "transportation",
                          ""
                        )}
                        to="transportation"
                      >
                        Transportation
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={
                          this.state.SubTab === "email_templates_alert"
                            ? "active-menu"
                            : ""
                        }
                        onClick={this.setActiveTab.bind(
                          this,
                          "transport",
                          "email_templates_alert",
                          ""
                        )}
                        to="transport-vehicles"
                      >
                        Transport vehicles
                      </Link>
                    </li>

                    <li>
                      <Link
                        className={
                          this.state.SubTab === "members" ? "active-menu" : ""
                        }
                        onClick={this.setActiveTab.bind(
                          this,
                          "transport",
                          "members",
                          ""
                        )}
                        to="transport-users"
                      >
                        Members
                      </Link>
                    </li>
                  </ul>
                </li>

                <li
                  className={
                    this.state.reports
                      ? "has_sub active-menu nav-active"
                      : "has_sub"
                  }
                >
                  <Link
                    to="#"
                    onClick={() =>
                      this.setState({
                        reports: !this.state.reports,
                        dashboard_menu: false,
                        email_menu: false,
                        ui_menu: false,
                        form_menu: false,
                        chart_menu: false,
                        table_menu: false,
                        icon_menu: false,
                        map_menu: false,
                        auth_menu: false,
                        extra_menu: false,
                        eco_menu: false,
                        hostel_menu: false,
                        transportation: false,
                      })
                    }
                    className={
                      this.state.Tab === "transport"
                        ? "waves-effect active-menu"
                        : "waves-effect"
                    }
                  >
                    <i className="mdi mdi-bus"></i>
                    <span>
                      {" "}
                      Reports{" "}
                      <span className="pull-right">
                        <i className="mdi mdi-chevron-right"></i>
                      </span>{" "}
                    </span>
                  </Link>

                  <ul
                    className="list-unstyled"
                    style={{
                      display: this.state.reports ? "block" : "none",
                    }}
                  >
                    <li>
                      <Link
                        className={
                          this.state.SubTab === "user_stat" ? "active-menu" : ""
                        }
                        onClick={this.setActiveTab.bind(
                          this,
                          "reports",
                          "user_stat",
                          ""
                        )}
                        to="users-statistics"
                      >
                        User Statistics
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={
                          this.state.SubTab === "user_attendance"
                            ? "active-menu"
                            : ""
                        }
                        onClick={this.setActiveTab.bind(
                          this,
                          "reports",
                          "user_attendance",
                          ""
                        )}
                        to="biometric-users"
                      >
                        Biometric Users
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={
                          this.state.SubTab === "student-attendance"
                            ? "active-menu"
                            : ""
                        }
                        onClick={this.setActiveTab.bind(
                          this,
                          "reports",
                          "student-attendance",
                          ""
                        )}
                        to="student-attendance"
                      >
                        Student Attendance
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={
                          this.state.SubTab === "staff-attendance"
                            ? "active-menu"
                            : ""
                        }
                        onClick={this.setActiveTab.bind(
                          this,
                          "reports",
                          "staff-attendance",
                          ""
                        )}
                        to="staff-attendance-summary"
                      >
                        Staff Attendance Report
                      </Link>
                    </li>
                  </ul>
                </li>

                {/* <li>
                  <Link
                    to="pages_faq"
                    className={
                      this.state.Tab === "faq"
                        ? "waves-effect active-menu"
                        : "waves-effect"
                    }
                    onClick={this.setActiveTab.bind(this, "faq", "", "")}
                  >
                    <i className="mdi mdi-school"></i>
                    <span> Certificates </span>
                  </Link>
                </li> */}

                {/* <li>
                  <Link
                    to="pages_faq"
                    className={
                      this.state.Tab === "faq"
                        ? "waves-effect active-menu"
                        : "waves-effect"
                    }
                    onClick={this.setActiveTab.bind(this, "faq", "", "")}
                  >
                    <i className="mdi mdi-credit-card"></i>
                    <span> ID Cards </span>
                  </Link>
                </li> */}

                {/* <li>
                  <Link
                    to="pages_faq"
                    className={
                      this.state.Tab === "faq"
                        ? "waves-effect active-menu"
                        : "waves-effect"
                    }
                    onClick={this.setActiveTab.bind(this, "faq", "", "")}
                  >
                    <i className="mdi mdi-chart-bar"></i>
                    <span> Reports </span>
                  </Link>
                </li> */}

                <li
                  className={
                    this.state.emt_menu
                      ? "has_sub active-menu nav-active"
                      : "has_sub"
                  }
                >
                  <Link
                    to="#"
                    onClick={() =>
                      this.setState({
                        emt_menu: !this.state.emt_menu,
                        dashboard_menu: false,
                        email_menu: false,
                        ui_menu: false,
                        form_menu: false,
                        chart_menu: false,
                        table_menu: false,
                        icon_menu: false,
                        map_menu: false,
                        auth_menu: false,
                        extra_menu: false,
                        eco_menu: false,
                        hostel_menu: false,
                        transportation: false,
                        reports: false,
                      })
                    }
                    className={
                      this.state.Tab === "settings"
                        ? "waves-effect active-menu"
                        : "waves-effect"
                    }
                  >
                    <i className="mdi mdi-settings"></i>
                    <span>
                      {" "}
                      Settings{" "}
                      <span className="pull-right">
                        <i className="mdi mdi-chevron-right"></i>
                      </span>{" "}
                    </span>
                  </Link>

                  <ul
                    className="list-unstyled"
                    style={{ display: this.state.emt_menu ? "block" : "none" }}
                  >
                    <li>
                      <Link
                        className={
                          this.state.SubTab === "email_templates_basic"
                            ? "active-menu"
                            : ""
                        }
                        onClick={this.setActiveTab.bind(
                          this,
                          "settings",
                          "email_templates_basic",
                          ""
                        )}
                        to="academic-years"
                      >
                        Academic Years
                      </Link>
                    </li>

                    <li>
                      <Link
                        className={
                          this.state.SubTab === "email_templates_alert"
                            ? "active-menu"
                            : ""
                        }
                        onClick={this.setActiveTab.bind(
                          this,
                          "emt",
                          "email_templates_alert",
                          ""
                        )}
                        to="select-language"
                      >
                        Language
                      </Link>
                    </li>

                    <li>
                      <Link
                        className={
                          this.state.SubTab === "school-term"
                            ? "active-menu"
                            : ""
                        }
                        onClick={this.setActiveTab.bind(
                          this,
                          "emt",
                          "school-term",
                          ""
                        )}
                        to="school-term"
                      >
                        School Terms
                      </Link>
                    </li>

                    <li>
                      <Link
                        className={
                          this.state.SubTab === "administrators"
                            ? "active-menu"
                            : ""
                        }
                        onClick={this.setActiveTab.bind(
                          this,
                          "emt",
                          "administrators",
                          ""
                        )}
                        to="administrators"
                      >
                        Administrators
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>

            <div className="clearfix"></div>
          </PerfectScrollbar>
        </div>
      </div>
    );
  }
}

export default withRouter(sidebar);
