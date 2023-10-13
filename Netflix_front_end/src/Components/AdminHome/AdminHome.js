import React from 'react'
import Button from 'react-bootstrap/Button';
import './AdminHome.css'
import { useRef } from 'react';
import { Link } from 'react-router-dom';



function move_to_add_movie_details(){
  window.location.href = "/Add_movie_details";
}
function logout(){
  window.location.href = "/";
  return;
}
function delete_user(){
  window.location.href = "/DelAcc";
}
function AdminHome() {
  return (
    
    <div>
       
        {/* <img className='netlogo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png" alt="Netflix Logo"/> */}
        
        <div class="d-grid gap-2 col-6 mx-auto" id='d-grid'>
        
  <button onClick={move_to_add_movie_details}class="btn btn-primary" type="button" id='addmo'>ADD MOVIE</button>
  <button class="btn btn-primary" type="button" id='removem'>REMOVE MOVIE</button>
  <button onClick={delete_user}class="btn btn-primary" type="button" id='reusr' >REMOVE USER</button>
</div>

<div className='logout'>
<button onClick = {logout} type="button" class="btn btn-danger" >LOG-OUT</button>

</div>
    </div>
  )
}

export default AdminHome