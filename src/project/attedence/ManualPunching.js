// import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function EmployeeCreate() {
  const navigate = useNavigate();

  // Step 1: Define state variables for the form fields
  const [empNo, setEmpNo] = useState('');
  const [cardNo, setCardNo] = useState('');
  const [fullName, setFullName] = useState('');
  const [fatherName, setFatherName] = useState('');
  const [email, setEmail] = useState('');
  const [presentAddress, setPresentAddress] = useState('');
  const [permanentAddress, setPermanentAddress] = useState('');
  const [city, setCity] = useState('');
  const [pincode, setPincode] = useState('');
  const [companyName, setCompanyName] = useState('');

  // Step 2: Define event handlers to update state variables
  const handleEmpNoChange = (event) => {
    setEmpNo(event.target.value);
  };

  const handleCardNoChange = (event) => {
    setCardNo(event.target.value);
  };

  const handleFullNameChange = (event) => {
    setFullName(event.target.value);
  };

  const handleFatherNameChange = (event) => {
    setFatherName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePresentAddressChange = (event) => {
    setPresentAddress(event.target.value);
  };

  const handlePermanentAddressChange = (event) => {
    setPermanentAddress(event.target.value);
  };

  const handleCityChange = (event) => {
    setCity(event.target.value);
  };

  const handlePincodeChange = (event) => {
    setPincode(event.target.value);
  };

  const handleCompanyNameChange = (event) => {
    setCompanyName(event.target.value);
  };

  // Step 3: Handle form submission
  const handleFormSubmit = (event) => {
    event.preventDefault();

    // Step 4: Collect form data from state variables
    const formData = {
      empNo,
      cardNo,
      fullName,
      fatherName,
      email,
      presentAddress,
      permanentAddress,
      city,
      pincode,
      companyName,
    };

    // Step 5: Add the formData to local storage
    localStorage.setItem('employeeData', JSON.stringify(formData));

    // Step 6: Redirect to another page after storing the data
    navigate('/nextPage');
  };

  return (
    <div>
      <div className="top">
        <h1>
          <b> ITPS HRMS FULL SUITS</b>
        </h1>
      </div>

      <div className="name">
        <h5>
          <b>Create Employee</b>
        </h5>

        <div className="container">
          <div className="row">
            <div className="col-sm-2">
              <h5>Step 1</h5>
              <p>Basic Details</p>
            </div>
            <div className="col-sm-2">
              <Link to="/step2" style={{ textDecoration: 'none', color: 'black' }}>
                <div className="step-box" style={{ background: 'red', borderRadius: '5px' }}>
                  <h5>Step 2</h5>
                  <p>Education Qualification</p>
                </div>
              </Link>
            </div>
            {/* Add links for other steps... */}
          </div>
        </div>

        <div className="container">
          <form onSubmit={handleFormSubmit}>
            {/* Input fields */}
            <input type="text" value={empNo} onChange={handleEmpNoChange} placeholder="Emp No" />
            <input type="text" value={cardNo} onChange={handleCardNoChange} placeholder="Card No" />
            <input type="text" value={fullName} onChange={handleFullNameChange} placeholder="Full Name" />
            <input type="text" value={fatherName} onChange={handleFatherNameChange} placeholder="Father Name" />
            <input type="email" value={email} onChange={handleEmailChange} placeholder="Email" />
            <input type="text" value={presentAddress} onChange={handlePresentAddressChange} placeholder="Present Address" />
            <input type="text" value={permanentAddress} onChange={handlePermanentAddressChange} placeholder="Permanent Address" />
            <input type="text" value={city} onChange={handleCityChange} placeholder="City" />
            <input type="text" value={pincode} onChange={handlePincodeChange} placeholder="Pincode" />
            <input type="text" value={companyName} onChange={handleCompanyNameChange} placeholder="Company Name" />
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default EmployeeCreate;
