import React from 'react';
import "./header.css";
import Location from "../Location_button/Location";
import Category from '../Category_button/Category';
import {Link} from "react-router-dom";

const title ="My-location ";

export default function Header() {
    return (
        <div className="header">
        <div className="title">
        <Link to ="/" className="title_link">
        {title}
        </Link>
        </div>
        <div className="two-categories">
        <Category/>
        <Location/>
        </div>
        </div>
    )
}
