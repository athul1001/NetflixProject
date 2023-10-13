import React from 'react'
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import RowPost from '../RowPost/RowPost';
import Banner from '../Banner/Banner';
import NavBar from '../NavBar/NavBar';
import {action,originals,trending,ComedyMovies,HorrorMovies,RomanceMovies,Documentaries} from '/Users/athulashok/Desktop/Netflix/netflix/src/urls.js'
function Display(){

    return (
        <div>
            <NavBar/>
      <Banner/>
     <RowPost url={originals} title='Netflix Originals' />
      <RowPost url={action} title='Action' isSmall/> 
      <RowPost url={trending} title='Trending' isSmall/> 
      <RowPost url={ComedyMovies} title='ComedyMovies' isSmall/>
      <RowPost url={HorrorMovies} title='HorrorMovies' isSmall/>
      <RowPost url={RomanceMovies} title='RomanceMovies' isSmall/>
      <RowPost url={Documentaries} title='Documentaries' isSmall/> 
        </div>
    )
}
export default Display
