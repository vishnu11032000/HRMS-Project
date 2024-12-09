import React,{useState} from 'react';
import { Link , useNavigate} from 'react-router-dom';

const SideNavBar = ({isLoggedIn , setIsLoggedIn}) => {
    const [employeeDropdownVisible, setEmployeeDropdownVisible] = useState(false);
    const [attendenceDropdownVisible , setAttendenceDropdownVisible] =useState(false);
    const [payrollDropdownVisible , setpayrollDropdownVisible] =useState(false);
    const [reportsDropdownVisible , setreportsDropdownVisible] =useState(false);
    const [jobDropdownVisible , setjobDropdownVisible] =useState(false);
    const [MastersDropdownVisible , setMastersDropdownVisible] =useState(false);
    const [appMasterDropdownVisible , setappMasterDropdownVisible] =useState(false);



    const toggleEmployeeDropdown = () => {
      setEmployeeDropdownVisible(!employeeDropdownVisible);
    }

    const toggleAttendenceDropdown =()=>{
        setAttendenceDropdownVisible(!attendenceDropdownVisible)
    }
    const togglePayrollDropdown =()=>{
        setpayrollDropdownVisible(!payrollDropdownVisible)
    }
    const toggleReportsDropdown =()=>{
        setreportsDropdownVisible(!reportsDropdownVisible)
    }
    const toggleJobDropdown = () => {
        setjobDropdownVisible(!jobDropdownVisible);
      };
    
      const toggleMastersDropdown = () => {
        setMastersDropdownVisible(!MastersDropdownVisible);
      };
    
      const toggleAppMastersDropdown = () => {
        setappMasterDropdownVisible(!appMasterDropdownVisible);
      };

        const navigate=useNavigate();
        const handleLogout=()=>{
        setIsLoggedIn(false);
        localStorage.setItem('isLoggedIn', 'false');
        navigate("/")
      };
  return (
   <div >
     <nav className="sidenav">
        <h4 style={{textDecoration:'underline', marginBottom:'0px', paddingBottom:'0px'}}>Dashboard</h4>
        <button className='drop'></button>
         <div>
            <img style={{width:'80px',height:'80px'}} src="https://media.licdn.com/dms/image/C560BAQHNdMSSU2ORsw/company-logo_200_200/0/1610428330552?e=2147483647&v=beta&t=wXgKFAhioDh4pVZ4lFZYFwu6_PX9exbuLM4DtOzU7Bw"alt="Company Logo"/>
        </div>
        <img style={{width:'80px',height:'80px'}} src="https://www.topmediai.com/micro/passport-photo-maker/assets/pic4-741b179b.png"alt="Company Logo"/> 
        
        <div className='icon' >
            <ul>
                <li>
                    <Link to="/dashboard" style={{color:"blue", paddingLeft:"5px",marginBottom:"20px"}} > <i class="fa-solid fa-computer"></i>  Dashboard</Link>
                </li>
                    
                <li>
                        <button className="dropdown-toggle" onClick={toggleEmployeeDropdown}>
                        <i className="fa-solid fa-users"></i> Employee
                        </button>
                    {employeeDropdownVisible && (
                        <ul className="dropdown" >
                            <li>
                            <Link to="/employee/Create">Employee Create</Link>
                            </li>
                            <li>
                            <Link to="/employee/List">Employee List</Link>
                            </li>
                            <li>
                            <Link to="/employee/Import">Employee Imports</Link>
                            </li>
                            <li>
                            <Link to="/employee/awardlist">Awards List</Link>
                            </li>
                            <li>
                            <Link to="/employee/notice">Notice List</Link>
                            </li>
                        </ul>
                    )}
                </li>

                <li style={{ height: '10px', border: 'none' }}></li>

                <li>
            <button className="dropdown-toggle" onClick={toggleAttendenceDropdown}>
              <i className="fa-solid fa-book-open"></i> Attendance
            </button>
            {attendenceDropdownVisible && (
              <ul className="dropdown">
                <li>
                  <Link to="/attendance/details">Attendance Import</Link>
                </li>
                <li>
                  <Link to="/attendance/report">Manual Punching</Link>
                </li>
                <li>
                  <Link to="/attendance/report">Leave Application</Link>
                </li>
                <li>
                  <Link to="/attendance/report">Absent Details</Link>
                </li>
                <li>
                  <Link to="/attendance/report">Attendence Verification</Link>
                </li>
              </ul>
            )}
          </li>

          <li style={{ height: '10px', border: 'none' }}></li>

          <li>
            <button className="dropdown-toggle" onClick={togglePayrollDropdown}>
              <i className="fa-solid fa-indian-rupee-sign"></i> Payroll
            </button>
            {payrollDropdownVisible && (
              <ul className="dropdown">
                <li>
                  <Link to="/payroll/details">Payslip</Link>
                </li>
                <li>
                  <Link to="/payroll/report">Salary Setup</Link>
                </li>
                <li>
                  <Link to="/payroll/report">Salary Process</Link>
                </li> <li>
                  <Link to="/payroll/report">Employee Loan</Link>
                </li> <li>
                  <Link to="/payroll/report">Employee Conveyance</Link>
                </li> <li>
                  <Link to="/payroll/report">Tax File Upload</Link>
                </li>
              </ul>
            )}
          </li>

          <li style={{ height: '10px', border: 'none' }}></li>

          <li>
            <button className="dropdown-toggle" onClick={toggleReportsDropdown}>
              <i className="fa-regular fa-credit-card"></i> Reports
            </button>
            {reportsDropdownVisible && (
              <ul className="horizontal-dropdown">
                <li>
                  <Link to="/reports/report1">Attendance</Link>
                </li>
                <li>
                  <Link to="/reports/report2">Payslip Bulk Dowmload</Link>
                </li>
                <li>
                  <Link to="/reports/report2">Montly Salary</Link>
                </li>
                <li>
                  <Link to="/reports/report2">Yearly Salary</Link>
                </li>
                <li>
                  <Link to="/reports/report2">Salary Deduction Details</Link>
                </li>
               
              </ul>
            )}
          </li>

          <li style={{ height: '10px', border: 'none' }}></li>

          <li>
              <button className="dropdown-toggle" onClick={toggleJobDropdown}>
              <i className="fa-solid fa-cube"></i> Job
              </button>
            {jobDropdownVisible && (
              <ul className="horizontal-dropdown">
                <li>
                  <Link to="/job/job1">Candidate Create</Link>
                </li>
                <li>
                  <Link to="/job/job2">Candidate List</Link>
                </li>
                <li>
                  <Link to="/job/job2">Job Opening List</Link>
                </li>
                <li>
                  <Link to="/job/job2">Job Applicatin List List</Link>
                </li>
                <li>
                  <Link to="/job/job2">TRainings List</Link>
                </li>
              </ul>
              )}
          </li>
          
          <li style={{ height: '10px', border: 'none' }}></li>

          <li>
            <button className="dropdown-toggle" onClick={toggleMastersDropdown}>
              <i className="fa-regular fa-building"></i> Masters
            </button>
            {MastersDropdownVisible && (
              <ul className="horizontal-dropdown">
                <li>
                  <Link to="/masters/master1">Company</Link>
                </li>
                <li>
                  <Link to="/masters/master2">Location</Link>
                </li>
                <li>
                  <Link to="/job/job2">Branch</Link>
                </li>
                <li>
                  <Link to="/job/job2">Department</Link>
                </li>
                <li>
                  <Link to="/job/job2">Department Assign</Link>
                </li>
                <li>
                  <Link to="/job/job2">Desigination</Link>
                </li>
                <li>
                  <Link to="/job/job2">Conveyance</Link>
                </li>
                <li>
                  <Link to="/job/job2">Leave</Link>
                </li>
                <li>
                  <Link to="/job/job2">Candidate List</Link>
                </li>
                <li>
                  <Link to="/job/job2">Source</Link>
                </li>
                <li>
                  <Link to="/job/job2">Qualification</Link>
                </li>
                <li>
                  <Link to="/job/job2">Holidays</Link>
                </li>
                <li>
                  <Link to="/job/job2">City</Link>
                </li>

                
              </ul>
            )}
          </li>

          <li style={{ height: '10px', border: 'none' }}></li>

          <li>
            <button className="dropdown-toggle" onClick={toggleAppMastersDropdown}>
              <i className="fa-solid fa-cube"></i> App Masters
            </button>
            {appMasterDropdownVisible && (
              <ul className="horizontal-dropdown">
                <li>
                  <Link to="/app-masters/app1">Add Users</Link>
                </li>
                <li>
                  <Link to="/app-masters/app2">List of Users</Link>
                </li>
                <li>
                  <Link to="/app-masters/app2">Common Settings</Link>
                </li>
                <li>
                  <Link to="/app-masters/app2">Roles</Link>
                </li>
              </ul>
            )}
          </li>

          <li style={{ height: '10px', border: 'none' }}></li>

          <li style={{marginBottom:"40px",height:'45px', paddingLeft:"30px" }} onClick={handleLogout}>
            {/* <FontAwesomeIcon icon={faPowerOff} style={{paddingRight:'10px'}}/> */}
            <Link>Logout</Link>
          </li>
                
            </ul>   
        </div>
    </nav>
   </div>
  );
};

export default SideNavBar