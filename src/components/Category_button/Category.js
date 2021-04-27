import React from 'react'
import "./category.css"
import {Link} from "react-router-dom";

export default function Category() {
    return (
        <div className="categories-contnent">
        <button> <Link to="/categories" className="link">
            Categories
            </Link>
            </button>
        </div>
    )
}
