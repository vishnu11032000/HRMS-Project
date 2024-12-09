import { useState } from "react";
     function NoticeList(){
        const noticeData = [
                {
                    Sno: '1',
                    Title: 'Company Inovation Award Function',
                    Description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do elusmod tempor incididunt ut labore et dolore madgna aliqua. ut enim ad minim veniam, quis nostrud.',
                    Status: 'Active',
                    CreatedOn: '//2021/03/08',
                    
                  
                   
                },
                {
                    Sno: '1',
                    Title: 'Attention: WFH User Attendence Verfication',
                    Description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do elusmod tempor incididunt ut labore et dolore madgna aliqua. ut enim ad minim veniam, quis nostrud.',
                    Status: 'Active',
                    CreatedOn: '//2021/03/08',
                    
                 
                   
                }
            ]
              const [searchQuery, setSearchQuery] = useState('');
              const [filteredNoticeData, setFilteredNoticeData] = useState(noticeData);
              
                const handleEdit = (noticeId) => {
                    
                    console.log(`Editing award with ID: ${noticeId}`);
                };
        
                const handleDelete = (noticeId) => {
                    
                    console.log(`Deleting award with ID: ${noticeId}`);
                };
                const handleSearchChange = (e) => {
                    const query = e.target.value;
                    setSearchQuery(query);
                
                    const filteredData = noticeData.filter((notice) =>
                      Object.values(notice)
                        .join(" ")
                        .toLowerCase()
                        .includes(query.toLowerCase())
                    );
                
                    setFilteredNoticeData(filteredData);
                  };
           
                return (
                    <div style={{width:'100%' ,}}>
              <div>
                <h1 style={{ textDecoration: "underline" }}>
                  <b>ITPS HRMS FULL SUITS</b>
                </h1>
              </div>
              <div style={{ textAlign: "left" }}>
                <h2 style={{ textDecoration: "underline" }}>Notice List:</h2>
              </div>
              <div className="itps1">
                <div>
                  <h4 style={{ marginLeft: "2%" }}>Awards List:</h4>
                </div>
                <div className="awards">
                  <div  style={{ marginLeft: "2%" }}> 
                    <h5>Notice List</h5>
                    <p>
                      {filteredNoticeData.length} of {noticeData.length} results found
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
                          <th>Title</th>
                          <th>Description</th>
                          <th>tatus</th>
                          <th>CreatedOn</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {filteredNoticeData.map((notice) => (
                          <tr key={notice.id}>
                            <td>{notice.Sno}</td>
                            <td>{notice.Title}</td>
                            <td>{notice.Description}</td>
                            <td>{notice.Status}</td>
                            <td>{notice.CreatedOn}</td>
                            <td>
                              <button style={{borderRadius:'50%',marginBottom:'10px',backgroundColor:'lightgreen',fontSize:'20px'}}onClick={() => handleEdit(notice.id)}><i class="fa-solid fa-pen"></i></button>
                              <button style={{borderRadius:'50%',backgroundColor:'orange',fontSize:'20px'}} onClick={() => handleDelete(notice.id)}><i class="fa-solid fa-trash"></i></button>
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
        
        
   
export default NoticeList;