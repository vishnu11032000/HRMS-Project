import { useState } from "react";
function AwardsList(){
    const awardData = [
        {
            Sno: '1',
            EmployeeName: 'Kalarasi',
            Empcode: 'Ind000053',
            AwardName: 'Best Performance',
            Gift: 'Cash',
            AwardDate: '31/08/2021',
          
           
        },
        {
            Sno: '2',
            EmployeeName: 'Divya',
            Empcode: 'IND000055',
            AwardName: 'Best Performance',
            Gift: 'Dinner set',
            AwardDate: '31/08/2021',
         
           
        }
    ]
      const [searchQuery, setSearchQuery] = useState('');
      const [filteredAwardData, setFilteredAwardData] = useState(awardData);
      
        const handleEdit = (awardId) => {
            
            console.log(`Editing award with ID: ${awardId}`);
        };

        const handleDelete = (awardId) => {
            
            console.log(`Deleting award with ID: ${awardId}`);
        };
        const handleSearchChange = (e) => {
            const query = e.target.value;
            setSearchQuery(query);
        
            const filteredData = awardData.filter((award) =>
              Object.values(award)
                .join(" ")
                .toLowerCase()
                .includes(query.toLowerCase())
            );
        
            setFilteredAwardData(filteredData);
          };
   
        return (
            <div>
      <div>
        <h1 style={{ textDecoration: "underline" }}>
          <b>ITPS HRMS FULL SUITS</b>
        </h1>
      </div>
      <div style={{ textAlign: "left" }}>
        <h2 style={{ textDecoration: "underline" }}>Awards List:</h2>
      </div>
      <div className="itps1">
        <div>
          <h4 style={{ marginLeft: "2%" }}>Awards List:</h4>
        </div>
        <div className="awards">
          <div  style={{ marginLeft: "2%" }}> 
            <h5>Awards List</h5>
            <p>
              {filteredAwardData.length} of {awardData.length} results found
            </p>
          </div>
          <div>
          <form >
           <div className="container">
            <div className="row">
                <div className="col-sm">
                    <p  className= 'p2' type="Date from" ><input placeholder="" ></input></p>
                </div>
                <div className="col-sm">
                    <p  className= 'p2' type="Date upto" ><input placeholder="" ></input></p>
                </div>
            </div>
           </div>
          </form>

          </div>
          <div>
            <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={handleSearchChange}
              style={{margin:'2%', width: '150px'}}
            
            />
          </div>
          <div>
            <table className="employee-table">
              <thead>
                <tr>
                  <th>Sno</th>
                  <th>EmployeeName</th>
                  <th>EmpCode</th>
                  <th>AwardsName</th>
                  <th>Gift</th>
                  <th>AwardsDate</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {filteredAwardData.map((award) => (
                  <tr key={award.Sno}>
                    <td>{award.Sno}</td>
                    <td>{award.EmployeeName}</td>
                    <td>{award.Empcode}</td>
                    <td>{award.AwardName}</td>
                    <td>{award.Gift}</td>
                    <td>{award.AwardDate}</td>
                    <td>
                      <button style={{borderRadius:'50%',marginRight:'10px',backgroundColor:'lightgreen',fontSize:'20px'}}onClick={() => handleEdit(award.id)}><i class="fa-solid fa-pen"></i></button>
                      <button style={{borderRadius:'50%',backgroundColor:'orange',fontSize:'20px'}} onClick={() => handleDelete(award.id)}><i class="fa-solid fa-trash"></i></button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AwardsList;