import React, { Component } from "react";
import VisitiorList from "../MainContent/Visitors";
import PhoneCallList from "../MainContent/PhoneCalls";
import PostalList from "../MainContent/Postals";
import MessageList from "../MainContent/Messages";
import MailOrSMS from "../MainContent/MailOrSMS";
import MobileNotification from "../MainContent/MobileNotification";
import ClassSchedule from "../MainContent/ClassSchedule";
import Attendence from "../MainContent/Attendence";
import AttendenceReport from "../MainContent/Attendence/report";

import StaffAttendance from "../MainContent/StaffAttendance";
import StaffAttendanceReport from "../MainContent/StaffAttendance/staff-report";
import Vacation from "../MainContent/Vacation";
import ApproveVacation from "../MainContent/Vacation/approve-vacation";
import MyVacation from "../MainContent/Vacation/my-vacation";
import IssueBook from "../MainContent/IssueBook";
import ReturnBook from "../MainContent/IssueBook/return";
import ListBook from "../MainContent/IssueBook/list-book";
import Employees from "../MainContent/Employee/index";
import Teachers from "../MainContent/Employee/teachers";
import Departments from "../MainContent/Employee/departments";
import Designations from "../MainContent/Employee/designations";

import Students from "../MainContent/Students";
import Parents from "../MainContent/Parents";
import Grades from "../MainContent/GradeLevels";
import Exams from "../MainContent/Exams";
import NewsBoard from "../MainContent/NewsBoard";
import Classes from "../MainContent/Classes";
import Sections from "../MainContent/Sections";
import Subjects from "../MainContent/Subjects";
import Hostel from "../MainContent/Hostel";
import HostelCategory from "../MainContent/HostelCategory";
import Transportation from "../MainContent/Transportation";
import TransportVehicles from "../MainContent/TransportVehicles";
import TransportUsers from "../MainContent/Transportation/transport-users";

import UserStat from "../MainContent/Reports/user-stat";
import BiometricUsers from "../MainContent/Reports/biometric-users";
import StudentAttendance from "../MainContent/Reports/student-attendance";
import StaffSummary from "../MainContent/Reports/staff-attendance";
import AcademicYears from "../MainContent/Settings/academic-year-list";
import SelectLanguage from "../MainContent/Settings/language";
import SchoolTerm from "../MainContent/Settings/school-term";
import Administrators from "../MainContent/Settings/administrators";

//*************************************************************** */
import Dashboard from "../MainContent/Dashboard/Dashboard1";

import { Route, Switch } from "react-router-dom";
class mainbuilder extends Component {
  render() {
    return (
      <Switch>
        <Route path="/list-visitor" component={VisitiorList} />
        <Route path="/phone-calls" component={PhoneCallList} />
        <Route path="/list-postal" component={PostalList} />
        <Route path="/list-message" component={MessageList} />
        <Route path="/list-mail" component={MailOrSMS} />
        <Route path="/mobile-notifications" component={MobileNotification} />
        <Route path="/class-schedules" component={ClassSchedule} />
        <Route path="/take-attendance" component={Attendence} />
        <Route path="/attendance-report" component={AttendenceReport} />
        <Route path="/staff-attendance" component={StaffAttendance} />
        <Route
          path="/staff-attendance-report"
          component={StaffAttendanceReport}
        />
        <Route path="/request-vacation" component={Vacation} />
        <Route path="/approve-vacation" component={ApproveVacation} />
        <Route path="/my-vacation" component={MyVacation} />
        <Route path="/issue-book" component={IssueBook} />
        <Route path="/return-book" component={ReturnBook} />
        <Route path="/list-book" component={ListBook} />
        <Route path="/employees" component={Employees} />
        <Route path="/teachers" component={Teachers} />
        <Route path="/departments" component={Departments} />
        <Route path="/designations" component={Designations} />
        <Route path="/students" component={Students} />
        <Route path="/parents" component={Parents} />
        <Route path="/grade-levels" component={Grades} />
        <Route path="/list-exam" component={Exams} />
        <Route path="/news-board" component={NewsBoard} />
        <Route path="/classes" component={Classes} />
        <Route path="/sections" component={Sections} />
        <Route path="/subjects" component={Subjects} />
        <Route path="/hostels" component={Hostel} />
        <Route path="/hostel-category" component={HostelCategory} />
        <Route path="/transportation" component={Transportation} />
        <Route path="/transport-vehicles" component={TransportVehicles} />
        <Route path="/transport-users" component={TransportUsers} />
        <Route path="/users-statistics" component={UserStat} />
        <Route path="/biometric-users" component={BiometricUsers} />
        <Route path="/student-attendance" component={StudentAttendance} />
        <Route path="/staff-attendance-summary" component={StaffSummary} />
        <Route path="/academic-years" component={AcademicYears} />
        <Route path="/select-language" component={SelectLanguage} />
        <Route path="/school-term" component={SchoolTerm} />
        <Route path="/administrators" component={Administrators} />
        //************************** */
        <Route path="/" component={Dashboard} />
      </Switch>
    );
  }
}

export default mainbuilder;
