import React from 'react';
import './Register.css';
import {useState} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function Register() {
  const [username,setUsername] = useState("");
  const [password,setPassword] =useState("");
  const [email,setEmail] = useState("");

  async function save(e){
    // const name = document.getElementById("name").value
    // const password = document.getElementById("password").value
    // const email = document.getElementById("email").value
    e.preventDefault();
    try{
      await axios.post("http://localhost:8090/api/v1/user/save",{
        username:username,
        email:email,
        password:password
      });
      alert("Account registered successfully")  
    }
    catch(e){
      alert(e)
    }


  }
    return (
        <div className="container mt-5">
           
          <div className="row justify-content-center">
            <div className="col-md-4">
              <div className="card">
                <div className="card-body square-form-bg">
                  <h5 className="card-title">Sign In</h5>
                  <form>
                  <div className="form-group">
                     
                     <input
                       type="text"
                       className="form-control square-input"
                       id="name"
                       placeholder="Enter name" 
                       onChange={(e)=>{
                        setUsername(e.target.value)
                       }}
                      
                     />
                   </div><br></br>
                    <div className="form-group">
                     
                      <input
                        type="text"
                        className="form-control square-input"
                        id="email"
                        placeholder="Enter email or phone number"
                        
                        onChange={(e)=>{
                          setEmail(e.target.value)
                        }}
                      />
                    </div><br></br>

                    <div className="form-group">
                     
                     <input
                       type="password"
                       className="form-control square-input"
                       id="password"
                       placeholder="Enter password to register account"
                       
                       onChange={(e)=>{
                        setPassword(e.target.value)
                       }}
                     />
                   </div><br></br>
                   <button type="button" class="btn btn-success" onClick={save}>
                      Save
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <span>Go to Login</span><Link to="/login" className='signlink'>Log In</Link>
        </div>
      );
}

export default Register