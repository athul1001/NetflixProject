import React from 'react'
import Button from 'react-bootstrap/Button';
import './first_home.css'
import { Link } from 'react-router-dom';

function First_home(){

    return (
    <Link className='Login' to='/login'>
    
               <img className="logomain" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png" alt="Netflix Logo"/>      
        <div className='button-div' id='entrylogin'>  
       <div className="mb-2" id='login'>
         <Button variant="primary" size="lg">
           LOGIN
         </Button>{' '}
         </div>
         </div> 
         <div className='Adminbtn'>
           <Link className='Signup' to='/admin'>
        <div className='button-div' id='entryadminlogin'>
       <div className="mb-2" id='signup'>
         <Button variant="primary" size="lg">
           ADMIN LOGIN
         </Button>{' '}
         </div>
         </div> 
            </Link>
           </div>
        
           </Link> 
    )

}
export default First_home
