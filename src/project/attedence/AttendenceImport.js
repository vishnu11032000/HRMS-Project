import LoginPage from './login';
import './App.css';
import { useState} from "react";
import { Routes ,Route} from "react-router-dom";
import Dashboard from "./Dashboard";
import SideNavbar from "./SideNavbar";
import EmployeesCreate from "./employees/EmployeesCreate";
import EmployeesList from "./employees/EmployeesList";
import EmployeesImport from "./employees/EmployeesImport";
import EmployeesAwardList from "./employees/EmployeesAwardList";
import EmployeesNoticeList from "./employees/EmployeesNoticeList";
import AbsentDetails from "./attendance/AbsentsDetails";
import AttendanceImport from "./attendance/AttendenceImport";
import AttendanceVerification from "./attendance/AttendenceVerification";
import LeaveApplication from "./attendance/LeaveApplication";
import ManualPunching from "./attendance/ManualPunching";
import PaySlip from "./payroll/PaySlip";                
import SalaryProcess from "./payroll/SalaryProcess";
import SalarySetup from "./payroll/SalarySetup";
import EmployeeLoan from "./payroll/EmployeeLoan";
import EmployeeConveyance from "./payroll/EmployeeConveyance";
import TaxFileUpload from "./payroll/TaxFileUpload";
import Attendance from "./reports/Attendance";
import MonthlySalary from "./reports/MonthlySalary";
import PaySlipBulkDownload from "./reports/PaySlipBulkDownload";
import SalaryDeductionDetails from "./reports/SalaryDeductionDetails";
import YearlySalary from "./reports/YearlySalary";
import CandidateCreate from "./job/CandidateCreate";
import CandidatesList from "./job/CandidatesList";
import JobApplicationList from "./job/JobApplicationList";
import JobOpeningsList from "./job/JobOpeningsList";
import TrainingList from "./job/TrainingsList";
import Branch from "./masters/Branch";
import Company from "./masters/Company";
import City from "./masters/City";
import Conveyance from "./masters/Conveyance";
import Department from "./masters/Department";
import DepartmentAssign from "./masters/DepartmentAssign";
import Designations from "./masters/Designations";
import Holidays from "./masters/Holidays";
import Leave from "./masters/Leave";
import Location from "./masters/Location";
import Qualification from "./masters/Qualification";
import Sources from "./masters/Sources";
import AddUsers from "./appmasters/AddUsers";
import ListOfUsers from "./appmasters/ListOfUsers";
import CommonSettings from "./appmasters/Common Settings";
import Roles from "./appmasters/Roles";
import BankDetails from "./BankDetails";
import EducationQualification from "./EducationQualification";
import ProofDetails from "./ProofDetails";
import WorkExperience from "./WorkExperience";
import BasicDetails from "./BasicDetails";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem('isLoggedIn') === 'true');
  return (
    <div className="App">
      <div style={{ display: 'flex' }}>
        {isLoggedIn && <SideNavbar setIsLoggedIn={setIsLoggedIn}/>}
        <div style={{width:isLoggedIn ? '80%':"100%"}}>
          <Routes>
            <Route path="/" element={<LoginPage setIsLoggedIn={setIsLoggedIn}/>}></Route>
            <Route path="/dashboard" element={<Dashboard/>}></Route>
            <Route path="employeescreate" element={<EmployeesCreate/>}></Route>
            <Route path="employeeslist" element={<EmployeesList/>}></Route>
            <Route path="employeesimport" element={<EmployeesImport/>}></Route>
            <Route path="employeesaward-list" element={<EmployeesAwardList/>}></Route>
            <Route path="employeesnotice-list" element={<EmployeesNoticeList/>}></Route>
            <Route path="absent-details" element={<AbsentDetails/>}></Route>
            <Route path="attendance-import" element={<AttendanceImport/>}></Route>
            <Route path="attendance-verification" element={<AttendanceVerification/>}></Route>
            <Route path="leave-application" element={<LeaveApplication/>}></Route>
            <Route path="manualpunching" element={<ManualPunching/>}></Route>
            <Route path="payslip" element={<PaySlip/>}></Route>
            <Route path="salarysetup" element={<SalarySetup/>}></Route>
            <Route path="salaryprocess" element={<SalaryProcess/>}></Route>
            <Route path="employeeloan" element={<EmployeeLoan/>}></Route>
            <Route path="employeeconveyance" element={<EmployeeConveyance/>}></Route>
            <Route path="taxfileupload" element={<TaxFileUpload/>}></Route>
            <Route path="attendance" element={<Attendance/>}></Route>
            <Route path="monthlysalary" element={<MonthlySalary/>}></Route>
            <Route path="payslipbulkdownload" element={<PaySlipBulkDownload/>}></Route>
            <Route path="salarydeductiondetails" element={<SalaryDeductionDetails/>}></Route>
            <Route path="yearlysalary" element={<YearlySalary/>}></Route>
            <Route path="candidatecreate" element={<CandidateCreate/>}></Route>
            <Route path="candidateslist" element={<CandidatesList/>}></Route>
            <Route path="jobapplicationlist" element={<JobApplicationList/>}></Route>
            <Route path="jobopeningslist" element={<JobOpeningsList/>}></Route>
            <Route path="trainingslist" element={<TrainingList/>}></Route>
            <Route path="branch" element={<Branch/>}></Route>
            <Route path="city" element={<City/>}></Route>
            <Route path="company" element={<Company/>}></Route>
            <Route path="conveyance" element={<Conveyance/>}></Route>
            <Route path="department" element={<Department/>}></Route>
            <Route path="department-assign" element={<DepartmentAssign/>}></Route>
            <Route path="designations" element={<Designations/>}></Route>
            <Route path="holidays" element={<Holidays/>}></Route>
            <Route path="leave" element={<Leave/>}></Route>
            <Route path="location" element={<Location/>}></Route>
            <Route path="qualification" element={<Qualification/>}></Route>
            <Route path="sources" element={<Sources/>}></Route>
            <Route path="add-users" element={<AddUsers/>}></Route>
            <Route path="list-of-users" element={<ListOfUsers/>}></Route>
            <Route path="common-settings" element={<CommonSettings/>}></Route>
            <Route path="roles" element={<Roles/>}></Route>
            <Route path="/employeescreate" element={<EmployeesCreate/>}>
              <Route path="basicdetails" element={<BasicDetails/>}></Route>
              <Route path="educationqualification" element={<EducationQualification/>}></Route>
              <Route path="workexperience" element={<WorkExperience/>}></Route>
              <Route path="bankdetails" element={<BankDetails/>}></Route>
              <Route path="proofdetails" element={<ProofDetails/>}></Route>
            </Route>                                     
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;