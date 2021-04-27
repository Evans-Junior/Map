import React from 'react';
import Header from '../Header/Header';
import TodoList from '../location_input/TodoList';
import "./location.css";
import {Link} from "react-router-dom"

const title ="Find your location"

export default function Location() {
    return (
        <div className="categoies_Page">
        <div>
        <Header/>
        </div>
        <div className="title-home">
        {title}
    </div>
        <div className="choose">
            where are you in?
        </div>
        <div className="form_location">
        <TodoList />
        </div>
        <div className="map_L">
            <Link to="/map" className="map_link">Map</Link>
        </div>
        </div>
    )
}
