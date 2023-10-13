import React from 'react';
import NavBar from './Components/NavBar/NavBar';
import {action,originals,trending,ComedyMovies,HorrorMovies,RomanceMovies,Documentaries} from './urls'
import "./App.css"
import Banner from './Components/Banner/Banner';
import RowPost from './Components/RowPost/RowPost';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import Button from 'react-bootstrap/esm/Button';
import { Link } from 'react-router-dom';
import Adminlogin from './Components/AdminLogin/AdminLogin';
import Home from './Components/Home/Home';
import AdminHome from './Components/AdminHome/AdminHome';
import First_home from './Components/first_home/first_home';
import Add_movie_details from './Components/Add_movie_details/Add_movie_details';
import Display from './Components/Display/Display';
import PasswordReset from './Components/PasswordReset/PasswordReset';




function App() {
  return (
    <div>

    <div className="App">
   
      
      
      <Router>
       
     <Routes>
      <Route path="/" element={<First_home/>}/>
      <Route path="/Display" element={<Display/>}/>
       <Route path="/register" element={<Register />} />
       <Route path="/login" element={<Login />} />
       <Route element={<Adminlogin/>} path='/admin'></Route>
       <Route path="/adminhome" element={<AdminHome/>}/>
       <Route path="/Add_movie_details" element={<Add_movie_details/>}/>
       <Route path="/PasswordReset" element={<PasswordReset/>}/>
       
       
     </Routes>
   </Router>
       {/* <NavBar/>
      <Banner/>
     <RowPost url={originals} title='Netflix Originals' />
      <RowPost url={action} title='Action' isSmall/> 
      <RowPost url={trending} title='Trending' isSmall/> 
      <RowPost url={ComedyMovies} title='ComedyMovies' isSmall/>
      <RowPost url={HorrorMovies} title='HorrorMovies' isSmall/>
      <RowPost url={RomanceMovies} title='RomanceMovies' isSmall/>
      <RowPost url={Documentaries} title='Documentaries' isSmall/>  */}

      
     
      </div>
     
    </div>
  );
}

export default App;
