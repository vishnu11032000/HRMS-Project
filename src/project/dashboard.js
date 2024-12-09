function Dashboard(){
    return( 
        <div> 
           <div className="top">
              <h1> <b> ITPS HRMS FULL SUITS</b></h1>
           </div>      
            <div  className="dashboard">
                        <div className="dash">
                            <h4>Dashboard</h4>
                        </div>
                <div >
                    <div className="row">
                        <div className="color-boxes-container">
                            <div className="color-box red">
                                <h4> Total Employes</h4>
                                <div className="number">
                                    <h1>7</h1>
                                </div>
                            </div>
                            <div className="color-box green">
                                <h4> Total Present</h4>
                                <div className="number">
                                    <h1>0</h1>
                                </div>
                            </div>
                            <div className="color-box blue">
                                <h4>Total Absent</h4>
                                <div className="number">
                                    <h1>7</h1>
                                </div>
                            </div>
                       </div>
                    </div>
                 </div>

                <div className="summary">
                         <div className="dash">
                            <h4> <b>Department Summary</b></h4>
                        </div>
                    <div >
                        <div className="row">
                            <div className="color-boxes-container">
                                <div className="color-box white scrollable-container">
                                    <p> Acounts</p>
                                    <h4>1</h4>
                                </div>
                                <div className="color-box white scrollable-container">
                                    <p>Development</p>
                                    <h4>1</h4>
                                </div>
                                <div className="color-box white scrollable-container">
                                    <p>Adminstrator</p>
                                    <h4>1</h4>
                                </div>
                                <div className="color-box white scrollable-container ">
                                    <p>Sales</p>
                                    <h4>4</h4>
                                </div>
                                
                             </div>
                             
                        </div>
                    </div> 
                </div>
        </div>

        </div>
    )
}
export default Dashboard;