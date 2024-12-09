import React, { useState, useEffect } from "react";

function EmployeeList() {
  const [employeeData, setEmployeeData] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredEmployeeList, setFilteredEmployeeList] = useState([]);

  // Step 1: Use useEffect to retrieve stored data from local storage
  useEffect(() => {
    const storedData = localStorage.getItem("employeeData");
    if (storedData) {
      const parsedData = JSON.parse(storedData);
      setEmployeeData(parsedData);
    }
  }, []);

  const handleSearchChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);

    const filteredData = employeeData.filter((employee) =>
      Object.values(employee)
        .join(" ")
        .toLowerCase()
        .includes(query.toLowerCase())
    );

    setFilteredEmployeeList(filteredData);
  };
           
  return (
    <div>
      <h1><b> ITPS HRMS FULL SUITS</b></h1>
      <div className="bottom">
        <h4>Listing the Employees:</h4>
        <hr className="bold-hr"></hr>
      </div>
      <div className="index">
        <h5>Employee List</h5>
        <p>{employeeData.length} of {employeeData.length} results found</p>
      </div>
      <div>
        <form className="form1">
        <p type="company" ><input placeholder="" ></input></p>
          <button className="btn btn-secondary">Filter</button>
        </form>
      </div>
      <div>
          <input
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={handleSearchChange}
            style={{ margin: '2%', width: '150px' }}
          />
    </div>

      <div>
        <table className="employee-table">
          <thead>
            <tr>
              <th>S.No</th>
              <th>Profile</th>
              <th>Join Date</th>
              <th>Employee ID</th>
              <th>Name</th>
              <th>Gender</th>
              <th>Designation</th>
              <th>Email/Mobile No</th>
              <th>Department</th>
            </tr>
          </thead>
          <tbody>
            {filteredEmployeeList.map((employee) => (
              <tr key={employee.sno}>
                <td>{employee.sno}</td>
                <td>{employee.profile}</td>
                <td>{employee.joindate}</td>
                <td>{employee.empID}</td>
                <td>{employee.Name}</td>
                <td>{employee.Gender}</td>
                <td>{employee.desigination}</td>
                <td>{employee.EmailMobileno}</td>
                <td>{employee.Department}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default EmployeeList;
