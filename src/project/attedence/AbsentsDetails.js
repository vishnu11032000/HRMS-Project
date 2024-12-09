import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserGroup, faMinus, faPlus,faDisplay,faBookOpen,faIndianRupeeSign,faClipboardUser,faCube,faBorderAll,faPowerOff} from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate } from "react-router-dom";
import { useState } from 'react';

const Sidenavbar = ({setIsLoggedIn}) => {
  const [isEmployeesDropdownOpen, setEmployeesDropdownOpen] = useState(false);
  const [isAttendanceDropdownOpen,setAttendancDropdowneOpen]=useState(false);
  const [isPayrollDropdownOpen,setPayrollDropdowneOpen]=useState(false);
  const [isReportsDropdownOpen,setReportsDropdowneOpen]=useState(false);
  const [isjobDropdownOpen,setjobDropdowneOpen]=useState(false);
  const [isMastersDropdownOpen,setMastersDropdowneOpen]=useState(false);
  const [isAppMastersDropdownOpen,setAppMastersDropdowneOpen]=useState(false);

  const [employeesDivBackground, setEmployeesDivBackground] = useState('white');
  const [attendanceDivBackground, setAttendanceDivBackground] = useState('white');
  const [payrollDivBackground, setPayrollDivBackground] = useState('white');
  const [reportsDivBackground, setReportsDivBackground] = useState('white');
  const [jobDivBackground, setJobDivBackground] = useState('white');
  const [mastersDivBackground, setMastersDivBackground] = useState('white');
  const [appmastersDivBackground, setAppMastersDivBackground] = useState('white');

  const EmployeesDropdown = () => {
    setEmployeesDropdownOpen(!isEmployeesDropdownOpen);
    setEmployeesDivBackground(isEmployeesDropdownOpen ? 'white' : '#E6E4E4');
  };

  const attendanceDropdown = () => {
    setAttendancDropdowneOpen(!isAttendanceDropdownOpen);
    setAttendanceDivBackground(isAttendanceDropdownOpen ? 'white' : '#E6E4E4');
  };

  const PayrollDropdown = () => {
    setPayrollDropdowneOpen(!isPayrollDropdownOpen);
    setPayrollDivBackground(isPayrollDropdownOpen ? 'white' : '#E6E4E4');
  };
  
  const ReportsDropdown = () => {
    setReportsDropdowneOpen(!isReportsDropdownOpen);
    setReportsDivBackground(isReportsDropdownOpen ? 'white' : '#E6E4E4');
  };

  const jobDropdown = () => {
    setjobDropdowneOpen(!isjobDropdownOpen);
    setJobDivBackground(isjobDropdownOpen ? 'white' : '#E6E4E4');
  };

  const mastersDropdown = () => {
    setMastersDropdowneOpen(!isMastersDropdownOpen);
    setMastersDivBackground(isMastersDropdownOpen ? 'white' : '#E6E4E4');
  };

  const appmastersDropdown = () => {
    setAppMastersDropdowneOpen(!isAppMastersDropdownOpen);
    setAppMastersDivBackground(isAppMastersDropdownOpen ? 'white' : '#E6E4E4');
  };
  const navigate=useNavigate();
  const handleLogout=()=>{
    setIsLoggedIn(false);
    navigate("/")
  }

  return (
    <div className="container-fluid sidenav sidenav-container" style={{ width: '20%' }}>
      <div className="mb-4" style={{paddingLeft:'90px'}}>
        <img style={{ width: '90px', height: '90px' }} src="https://media.licdn.com/dms/image/C560BAQHNdMSSU2ORsw/company-logo_200_200/0/1610428330552?e=2147483647&v=beta&t=wXgKFAhioDh4pVZ4lFZYFwu6_PX9exbuLM4DtOzU7Bw" alt="Company Logo"/><br/>
        <img style={{ width: '80px', height: '80px',borderRadius:"8px",backgroundColor:"#E6E4E4" }} src="https://www.topmediai.com/micro/passport-photo-maker/assets/pic4-741b179b.png" alt='girl'/>
      </div>
      <div className="nav-menu ">
        <ul style={{ listStyleType: 'none'}}>
          <li style={{marginBottom:"10px"}}>
            <FontAwesomeIcon icon={faDisplay} style={{paddingRight:'10px',color:"blue"}}/>
            <Link to="dashboard" style={{color:"blue"}}> <b>Dashboard</b></Link>
          </li>
          <li style={{marginBottom:"10px"}}>
            <div style={{display: 'flex', justifyContent: 'space-between',alignItems:"center",height:'45px',cursor:'pointer',backgroundColor: employeesDivBackground }} onClick={ EmployeesDropdown}>
              <div>
                <FontAwesomeIcon icon={faUserGroup} />
                <span style={{paddingLeft:'10px'}}>Employees</span>
              </div>
              <FontAwesomeIcon icon={isEmployeesDropdownOpen? faMinus : faPlus} style={{paddingRight:'20px',paddingTop:'3px',display:'flex',justifyContent:'center',alignItems:'center'}}/>
            </div>
            <div className="elements" style={{ display: isEmployeesDropdownOpen ? 'block' : 'none' }}>
              <ul style={{listStyleType:'none'}}>
                <li><Link to="employeescreate">EmployeesCreate</Link></li>
                <li><Link to="employeeslist">EmployeesList</Link></li>
                <li><Link to="employeesimport">EmployeesImport</Link></li>
                <li><Link to="employeesaward-list">EmployeesAwardList</Link></li>
                <li><Link to="employeesnotice-list">EmployeesNoticeList</Link></li>
              </ul>
            </div>
          </li>
          <li style={{marginBottom:"10px"}}>
            <div style={{ display: 'flex', justifyContent: 'space-between',alignItems:"center",height:'45px',cursor:'pointer',backgroundColor:attendanceDivBackground }} onClick={attendanceDropdown}>
              <div>
                <FontAwesomeIcon icon={faBookOpen} />
                <span style={{paddingLeft:'10px'}}>Attendance</span>
              </div>
              <FontAwesomeIcon icon={isAttendanceDropdownOpen ? faMinus : faPlus} style={{paddingRight:'20px',paddingTop:'3px',display:'flex',justifyContent:'center',alignItems:'center'}}/>
            </div>
            <div className="elements" style={{ display: isAttendanceDropdownOpen ? 'block' : 'none' }}>
              <ul style={{listStyleType:'none'}}>
                <li><Link to="attendance-import">AttendanceImport</Link></li>
                <li><Link to="manualpunching">ManualPunching</Link></li>
                <li><Link to="leave-application">LeaveApplication</Link></li>
                <li><Link to="absent-details">AbsentDetails</Link></li>
                <li><Link to="attendance-verification">AttendanceVerification</Link></li>
              </ul>
            </div>
          </li>
          <li style={{marginBottom:"10px"}}>
          <div style={{ display: 'flex', justifyContent: 'space-between',alignItems:"center",height:'45px',cursor:'pointer',backgroundColor: payrollDivBackground }} onClick={PayrollDropdown}>
              <div>
                <FontAwesomeIcon icon={faIndianRupeeSign} />
                <span style={{paddingLeft:'10px'}}>Payroll</span>
              </div>
              <FontAwesomeIcon icon={isPayrollDropdownOpen ? faMinus : faPlus} style={{paddingRight:'20px',paddingTop:'3px',display:'flex',justifyContent:'center',alignItems:'center'}}/>
            </div>
            <div className="elements" style={{ display: isPayrollDropdownOpen ? 'block' : 'none' }}>
              <ul style={{listStyleType:'none'}}>
                <li><Link to="payslip">Payslip</Link></li>
                <li><Link to="salarysetup">Salary Setup</Link></li>
                <li><Link to="salaryprocess">Salary Process</Link></li>
                <li><Link to="employeeloan">Employee Loan</Link></li>
                <li><Link to="employeeconveyance">Employee Conveyance</Link></li>
                <li><Link to="taxfileupload">Tax File Upload</Link></li>
              </ul>
            </div>
          </li>
          <li style={{marginBottom:"10px"}}>
          <div style={{ display: 'flex', justifyContent: 'space-between',alignItems:"center",height:'45px',cursor:'pointer',backgroundColor: reportsDivBackground }} onClick={ReportsDropdown}>
              <div>
                <FontAwesomeIcon icon={faClipboardUser} />
                <span style={{paddingLeft:'10px'}}>Reports</span>
              </div>
              <FontAwesomeIcon icon={isReportsDropdownOpen ? faMinus : faPlus} style={{paddingRight:'20px',paddingTop:'3px',display:'flex',justifyContent:'center',alignItems:'center'}}/>
            </div>
            <div className="elements" style={{ display: isReportsDropdownOpen ? 'block' : 'none' }}>
              <ul style={{listStyleType:'none'}}>
                <li><Link to="attendance">Attendance</Link></li>
                <li><Link to="payslipbulkdownload">PaySlip Bulk Download</Link></li>
                <li><Link to="monthlysalary">Monthly Salary</Link></li>
                <li><Link to="yearlysalary">Yearly Salary</Link></li>
                <li><Link to="salarydeductiondetails">Salary Deduction Details</Link></li>
              </ul>
            </div>
          </li>
          <li style={{marginBottom:"10px"}}>
          <div style={{ display: 'flex', justifyContent: 'space-between',alignItems:"center",height:'45px',cursor:'pointer',backgroundColor: jobDivBackground }} onClick={jobDropdown}>
              <div>
                <FontAwesomeIcon icon={faCube} />
                <span style={{paddingLeft:'10px'}}>Job</span>
              </div>
              <FontAwesomeIcon icon={isjobDropdownOpen ? faMinus : faPlus} style={{paddingRight:'20px',paddingTop:'3px',display:'flex',justifyContent:'center',alignItems:'center'}}/>
            </div>
            <div className="elements" style={{ display: isjobDropdownOpen ? 'block' : 'none' }}>
              <ul style={{listStyleType:'none'}}>
                <li><Link to="candidatecreate">Candidate Create</Link></li>
                <li><Link to="candidateslist">Candidates List</Link></li>
                <li><Link to="jobopeningslist">Job Openings List</Link></li>
                <li><Link to="jobapplicationlist">Job Application List</Link></li>
                <li><Link to="trainingslist">Trainings List</Link></li>
              </ul>
            </div>
          </li>
          <li style={{marginBottom:"10px"}}>
          <div style={{ display: 'flex', justifyContent: 'space-between',alignItems:"center",height:'45px',cursor:'pointer',backgroundColor:mastersDivBackground }} onClick={mastersDropdown}>
              <div>
                <FontAwesomeIcon icon={faBorderAll} />
                <span style={{paddingLeft:'10px'}}>Masters</span>
              </div>
              <FontAwesomeIcon icon={isMastersDropdownOpen ? faMinus : faPlus} style={{paddingRight:'20px',paddingTop:'3px',display:'flex',justifyContent:'center',alignItems:'center'}}/>
            </div>
            <div className="elements" style={{ display: isMastersDropdownOpen ? 'block' : 'none' }}>
              <ul style={{listStyleType:'none'}}>
                <li><Link to="company">Company</Link></li>
                <li><Link to="location">Location</Link></li>
                <li><Link to="branch">Branch</Link></li>
                <li><Link to="department">Department</Link></li>
                <li><Link to="department-assign">Department Assign</Link></li>
                <li><Link to="designations">Designations</Link></li>
                <li><Link to="conveyance">Conveyance</Link></li>
                <li><Link to="leave">Leave</Link></li>
                <li><Link to="sources">Sources</Link></li>
                <li><Link to="qualification">Qualification</Link></li>
                <li><Link to="holidays">Holidays</Link></li>
                <li><Link to="city">City</Link></li>
              </ul>
            </div>
          </li>
          <li style={{marginBottom:"10px"}}>
          <div style={{ display: 'flex', justifyContent: 'space-between',alignItems:"center",height:'45px',cursor:'pointer',backgroundColor: appmastersDivBackground}} onClick={appmastersDropdown}>
              <div>
                <FontAwesomeIcon icon={faCube} />
                <span style={{paddingLeft:'10px'}}>App Masters</span>
              </div>
              <FontAwesomeIcon icon={isAppMastersDropdownOpen ? faMinus : faPlus} style={{paddingRight:'20px',paddingTop:'3px',display:'flex',justifyContent:'center',alignItems:'center'}}/>
            </div>
            <div className="elements" style={{ display: isAppMastersDropdownOpen ? 'block' : 'none' }}>
              <ul style={{listStyleType:'none'}}>
                <li><Link to="add-users">Add Users</Link></li>
                <li><Link to="list-of-users">List Of Users</Link></li>
                <li><Link to="common-settings">Common Settings</Link></li>
                <li><Link to="roles">Roles</Link></li>
              </ul>
            </div>
          </li>
          <li style={{marginBottom:"10px",height:'45px',}} onClick={handleLogout}>
            <FontAwesomeIcon icon={faPowerOff} style={{paddingRight:'10px'}}/>
            <Link>Logout</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidenavbar;