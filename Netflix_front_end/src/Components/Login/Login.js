import React from 'react';
import './Login.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
import {useState} from 'react';
import { useNavigate } from 'react-router-dom';



import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Register from '../Register/Register';



function Login() {

  const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    async function login(event) {
        event.preventDefault();
        try {
          await axios.post("http://localhost:8090/api/v1/user/login", {
            email: email,
            password: password,
            }).then((res) => 
            {
             console.log(res.data);
             
             if (res.data.message === "Email not exits") 
             {
               alert("Email not exits");
             } 
             else if(res.data.message === "Login Success")
             { 
                
                navigate('/Display');
             } 
              else 
             { 
                alert("Incorrect Email and Password not match");
             }
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
                  <h5 className="card-title">Log In</h5>
                  <form >
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
                       id="inputField"
                       placeholder="Enter password" 
                       onChange={(e)=>{
                        setPassword(e.target.value)
                       }}
                     />
                   </div><br></br>
                   <button type="button" class="btn btn-success" onClick={login}>
                      Log In
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div><br></br>
          <div className="anchor">
          
        </div>
        <span>New User?</span><Link to="/register" className='signlink'>Sign-Up</Link>
        </div>
        
       ); 
      }




export default Login;