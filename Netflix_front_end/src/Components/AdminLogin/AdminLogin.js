import React from 'react';
import './AdminLogin.css';
import Button from 'react-bootstrap/Button';

const handleLoginOk = async () => {
  
  var email = document.getElementById("email").value;
  var pass = document.getElementById("password").value;
  if(email=="cdac@gmail.com" && pass=="stdc"){
    window.location.href = "/adminhome";
  }
  else{
    if(email!="cdac@gmail.com"){
      window.alert("Please enter valid email ")
    }
    else if(pass!="stdc"){
      window.alert("Please enter valid password")
    }
  }
  return;
}
function Adminlogin() {

  return (
    
    <div className="container mt-5">
            
          <div className="row justify-content-center">
            <div className="col-md-4">
              <div className="card">
                <div className="card-body square-form-bg"> 
                  <h5 className="card-title">Admin Log In</h5>
                  <form>
                    <div className="form-group">
                     
                      <input
                        type="text"
                        className="form-control square-input"
                        id="email"
                        placeholder="Enter email or phone number"
                      />
                    </div><br></br>

                    <div className="form-group">
                     
                     <input
                       type="password"
                       className="form-control square-input"
                       id="password"
                       placeholder="Enter password"
                     />
                   </div><br></br>
                   <Button onClick={handleLoginOk}
                   variant="warning">Log In</Button>
                     
                   
                  </form>
                </div>
              </div>
            </div>
          </div><br></br>
          <div className="anchor">
          
        </div>
        
        </div>
  )
}

export default Adminlogin