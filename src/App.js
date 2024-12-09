
import './App.css';
import React,{useEffect, useState} from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './project/login';
import Dashboard from './project/dashboard';
import SideNavbar from './project/sidenavbar';
import EmployeeCreate from './project/employees/EmployeeCreate';
import EmployeeList from './project/employees/EmployeeList';
import EmployeeImport from './project/employees/EmployeeImport';
import Employee from './project/employees/employee';
import AwardsList from './project/employees/AwarsList';
import NoticeList from './project/employees/NoticeList';
import Step1 from './project/Step1'; 
import Step2 from './project/Step2';
import Step3 from './project/Step3';
import Step4 from './project/Step4';
import Step5 from './project/Step5';
// import Attendanceverification from './project/attedence/AttendenceVerification';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  useEffect(() => {
    const loggedInStatus = localStorage.getItem('isLoggedIn') === 'true';
    setIsLoggedIn(loggedInStatus);
    },[])

  return (
    <div className="App">
      {isLoggedIn && (
        <div style={{ width: '20%' }}>
          <SideNavbar setIsLoggedIn={setIsLoggedIn} />
      </div>
         )}
            <div style={{ width: '80%' }}>
                <Routes>
                    <Route path='/' element={<Login setIsLoggedIn={setIsLoggedIn}  />} />
                    <Route path='/dashboard' element ={<Dashboard/>}/>
                    {/* <Route path = '/sidenavbar' element={<SideNavbar/>}></Route> */}
                     <Route path='/employee' element ={<Employee/>}>
                          <Route path='Create' element ={<EmployeeCreate/>}></Route>
                          <Route path='List' element ={<EmployeeList/>}></Route>
                          <Route path = 'Import' element ={<EmployeeImport/>}></Route>
                          <Route path = 'awardlist' element = {<AwardsList/>}></Route>
                          <Route path = 'notice' element={<NoticeList/>}></Route>
                    </Route>
                    <Route path ='step1' element={<Step1/>}></Route>
                    <Route path ='step2' element={<Step2/>}></Route>
                    <Route path ='step3' element={<Step3/>}></Route>
                    <Route path ='step4' element={<Step4/>}></Route>
                    <Route path ='step5' element={<Step5/>}></Route>
                </Routes>
            </div>
    </div>
  );
} 

export default App;