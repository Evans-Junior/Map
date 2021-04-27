import React from 'react'
import "./home.css";
import CategoryInfo from "../Category_Info/Category";
import LocationInfo from "../Location_Info/Location";



export default function Home() {

    // setTimeout(useEffect(() =>{
    //     prompt("What is your name")
    // ,[]
    // }),1000)
    //<form onClick="getname">
  //  <input placeholder="your name" type='text' value={name} onChange={e => setName(e.target.value)}/>
    //</form>
    
   

    return (
        <div className="home">
           
            <div className="categories_info">
                <CategoryInfo/>
                <LocationInfo/>
            </div>
            <div className="comment">
                Hello, Let's find your location 
            </div>
        </div>
    )
}
