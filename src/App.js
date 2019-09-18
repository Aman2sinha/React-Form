import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    
    <div>
    <form>
    <div className="img">
        <h1 className="display-4"><br/><h1>Welcome  To  Pvt Blood Bank  Form  Validaton.....</h1></h1><br/><br/>
    </div>
    <h2><br/><br/>Fill the Form:-
    <br/>  </h2>
    <div className="row">
    <div className="col">
    <h3>First Name</h3>
      <input type="text" className="form-control" placeholder="First name" required/>
    </div>
    <div className="col">
    <h3>Last Name</h3>
      <input type="text" className="form-control" placeholder="Last name" required/>
    </div>
  </div>
    <div className="form-group">
    <h3>Address:
    <input type="text" className="form-control" id="email" aria-describedby="address" placeholder="Enter address..." required /></h3>
    </div>
    <div className="form-group">
    <h3>Phone no:
    <input type="text" className="form-control" id="phoneNo" aria-describedby="phoneNo" placeholder="Enter Phone No..." required /></h3>
    </div>
    <div className="form-group">
    <h3>Email id:
    <input type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email..." required />
     </h3> </div>
    <div className="form-group">
    
    <h3>BloodGroup:
    <input type="text" className="form-control" id="bg" aria-describedby="bGroup" placeholder="Enter bloodGroup..." required /></h3>
    </div>
   <button className="btn btn-primary btn-lg btn-block">Submit</button>
     </form>
     <br /><br />
     <div className="footer">
<br /><br /><br /><br /><br />
     </div> 
     </div>  
  );
}

export default App;
