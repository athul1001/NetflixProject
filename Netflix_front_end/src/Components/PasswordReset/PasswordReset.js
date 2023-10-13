import React from 'react';
import axios from 'axios';
import {useState} from 'react';
import { useNavigate } from 'react-router-dom';


function PasswordReset() {
    const [email, setEmail] = useState("");
    const [newPassword, setnewPassword] = useState("");
    const[newPassword_2,setnewPassword_2]=useState("");

    const navigate = useNavigate();
    async function reset(event) {
        event.preventDefault();
        try {
          await axios.put("http://localhost:8090/api/v1/user/update-password",
          {
            email: email,
            newPassword: newPassword,
            newPassword_2:newPassword_2
            }).then((res) => 
            {
             console.log(res.data);
             navigate("/login")
          }, fail => {
           console.error(fail); // Error!

  });
        } 
 
         catch (err) {
          alert(err);
        }
      
      }
    return (
      
        <div className="container mt-5">
            
          <div className="row justify-content-center">
            <div className="col-md-4">
              <div className="card">
                <div className="card-body square-form-bg"> 
                  <h5 className="card-title">RESET PASSWORD</h5>
                  <form >
                    
                  <div className="form-group">
                     
                     <input
                       type="email"
                       className="form-control square-input"
                       id="inputField"
                       placeholder="Enter email id" 
                       onChange={(e)=>{
                        setEmail(e.target.value)
                      }}
                     />
                   </div><br></br>

                    <div className="form-group">
                     
                     <input
                       type="password"
                       className="form-control square-input"
                       id="inputField"
                       placeholder="Enter New Password" 
                       onChange={(e)=>{
                        setnewPassword(e.target.value)
                       }}
    
                     />
                   </div><br></br>

                   <div className="form-group">
                     
                     <input
                       type="password"
                       className="form-control square-input"
                       id="inputField"
                       placeholder="Confirm New Password" 
                       onChange={(e)=>{
                        setnewPassword_2(e.target.value)
                       }}
                      
                     />
                   </div><br></br>
                   <button type="button" class="btn btn-success" onClick={reset} >
                      Modify
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div><br></br>
          
          <div className="anchor">
          
        </div>
        </div>
        
       ); 
      }




export default PasswordReset;