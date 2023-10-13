import React from 'react';
// import './DelAcc.css';
import Button from 'react-bootstrap/Button';
import { useRef } from 'react';




function DelAcc() {
  
  return (
    <div>
    <div className="container mt-5">
            
          <div className="row justify-content-center">
            <div className="col-md-4">
              <div className="card">
                <div className="card-body square-form-bg"> 
                  <h5 className="card-title">Remove User</h5>
                  <form>
                    <div className="form-group">
                     
                      <input
                        type="text"
                        className="form-control square-input"
                        id="movie_name"
                        placeholder="Enter user email "
                      />
                   

                    

                   
      <button  type="button" id='imagebtn'>REMOVE USER</button>
                     
                   </div><br></br>
                   
                    
                   
                  </form>
                </div>
              </div>
            </div>
          </div><br></br>
         
        
        </div>
        </div>
  );
}

export default DelAcc;