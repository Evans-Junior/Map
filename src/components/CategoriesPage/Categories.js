import React from 'react';
import Header from '../Header/Header';
import "./categories.css";
import {Link} from "react-router-dom"


const title ="Find your Continent"

export default function Categories() {


    return (
        <div className="categoies_Page">
        <div>
            <Header/>
        </div>
        <div className="title">
        {title}
        </div>
        <div className="choose">
            Which Continent are you?
        </div>
        <div className="select">
        
        <div className="continents">
        <Link to ="/location" className="link_continents">Asia</Link>
       </div>
       
       <div className="continents">
       <Link to path="/location" className="link_continents">Afica</Link>
      </div>
      
      <div className="continents">
      <Link to ="/location" className="link_continents">Europe</Link>
     </div>
     
     <div className="continents">
     <Link to ="/location" className="link_continents">North America</Link>
    </div>
    
    <div className="continents">
    <Link to ="/location" className="link_continents">South America</Link>
   </div>
   
   <div className="continents">
   <Link to ="/location" className="link_continents">Australia / Oceania</Link>
  </div>
  
  <div className="continents">
  <Link to ="/location" className="link_continents">Antarctica</Link>
 </div>
        </div>

        

        </div>
    )
}
