import { Link } from "react-router-dom";
import React, { useState } from "react";

function EmployeeCreate() {
  const [formData, setFormData] = useState({
    empNo: "",
    joinDate: "",
    fullName: "",
    phoneNumber: "",
    email: "",
    presentAddress: "",
    permanentAddress: "",
    gender: "",
    designation: "",
    department: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };
console.log(formData);
  const handleSubmit = () => {
    // Store the form data in local storage
    localStorage.setItem("employeeData", JSON.stringify(formData));
    // You can also redirect the user to a different page or perform other actions here
  };    
    return(
        <div>
            <div className="top">
               <h1> <b> ITPS HRMS FULL SUITS</b></h1>
            </div>
            <div className="name">
                <h5><b>Create Employee</b></h5>
            <div className="conatiner">
                <div className="row">  
                    <div className="col-sm-2">
                         <h5>Step 1</h5>
                         <p>Basic Details</p>
                    </div>  
                    <div className="col-sm-2">
                        <Link to="/step2" style={{textDecoration:'none', color:'black'}}> 
                           <div className="step-box"style={{background:'red', borderRadius:'5px',}}>
                              <h5>Step 2</h5>
                              <p>Education Qualification</p>
                           </div> 
                        </Link>
                    </div> 
                    <div className="col-sm-2">
                        <Link to="/step3" style={{textDecoration:'none', color:'black'}}> 
                             <div style={{background:'red', borderRadius:'5px',}}>
                                  <h5>Step 3</h5>
                                 <p>Work Experience</p>
                             </div>
                        </Link>
                    </div> 
                    <div className="col-sm-2" >
                        <Link to="/step4" style={{textDecoration:'none', color:'black'}}> 
                            <div style={{background:'red', borderRadius:'5px',}}>
                                <h5>Step 4</h5>
                                <p>Bank Details</p>
                            </div>
                        </Link>
                    </div> 
                    <div className="col-sm-2" >
                        <Link to="/step5" style={{textDecoration:'none', color:'black', }}> 
                           <div style={{background:'red', borderRadius:'5px',}}>
                           <h5>Step 5</h5>
                           <p>Proof Details</p>
                           </div>
                        </Link>
                    </div> 
                </div>
            </div>
           </div>
            <div className="container">
            <div className="row">
                <div className="col-sm">
                    <form class="form">
                        <p type="Emp No" ><input placeholder="" ></input></p>
                        <p type="Join Date:"><input placeholder=""></input></p>
                        <p type="Full Name:"><input placeholder="" ></input></p>
                        <p type="phone number:"><input placeholder=""></input></p>
                        <p type="Email:"><input placeholder=""></input></p>
                    </form>
                </div>
                <div className="col-sm">

                    <form class="form">
                        <p type="Present Address"><input placeholder=""></input></p>
                        <p type="Perminent Address"><input placeholder=""></input></p>
                        <p type="Gender"><input placeholder=""></input></p>
                        <p type="Desigination"><input placeholder=""></input></p>
                        <p type="Department "><input placeholder=""></input></p>
                    </form>
                </div>
            </div>
        </div>
      </div>
    )
};

export default EmployeeCreate;