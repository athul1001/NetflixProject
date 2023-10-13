import React from 'react';
import axios from 'axios';
import {useState} from 'react';
import { useNavigate } from 'react-router-dom';


function EmailReset() {
    const [email, setEmail] = useState("");
    const [newEmail, setnewEmail] = useState("");
    const[newEmail_2,setnewEmail_2]=useState("");

    const navigate = useNavigate();
    async function reset(event) {
        event.preventDefault();
        try {
          await axios.put("http://localhost:8090/api/v1/user/update-email/1",
          {
            email: email,
            newEmail: newEmail,
            newEmail_2:newEmail_2
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
                  <h5 className="card-title">RESET E-MAIL</h5>
                  <form >
                    
                  <div className="form-group">
                     
                     <input
                       type="email"
                       className="form-control square-input"
                       id="inputField"
                       placeholder="Enter Email id" 
                       onChange={(e)=>{
                        setEmail(e.target.value)
                      }}
                     />
                   </div><br></br>

                    <div className="form-group">
                     
                     <input
                       type="email"
                       className="form-control square-input"
                       id="inputField"
                       placeholder="Enter New Email" 
                       onChange={(e)=>{
                        setnewEmail(e.target.value)
                       }}
    
                     />
                   </div><br></br>

                   <div className="form-group">
                     
                     <input
                       type="email"
                       className="form-control square-input"
                       id="inputField"
                       placeholder="Confirm New Email" 
                       onChange={(e)=>{
                        setnewEmail_2(e.target.value)
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




export default EmailReset;