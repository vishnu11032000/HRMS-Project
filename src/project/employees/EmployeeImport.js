function EmployeeImport(){
    return(
        <div >
            <div className="top">
               <h1> <b> ITPS HRMS FULL SUITS</b></h1>
            </div>
            <div className="side">
                <h3>
                    Impoting the employee's details:
                </h3>
            </div>
            <div className="imports">
                <h2 className="low">Employee Imports</h2>
                <div className="inner"> 
                    <h3 className="text" >Employees</h3>
                    <p className="text">Imports</p>
                    <div className="col-sm">
                    <form class="form2">
                        <p  className= 'p2' type="Date" ><input placeholder="" ></input></p>
                        <p  className= 'p2'type="Attach excel"><input type="file" placeholder=""></input></p>
                        <p className='p2' type="sample file format">  <input type="file" accept=".xls, .xlsx , .docs,.jpg , .html," /></p>
                    </form>

                    <p className="button-container">
                        <button className="btn btn-secondary cancel" >Cancel</button>
                        <button className="btn btn-light reset " >Reset</button>
                        <button className="btn btn-dark import " >Import</button>
                    </p>

                </div>
                </div>

            </div>
        </div>
    )
}
export default EmployeeImport;