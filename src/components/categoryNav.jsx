import React from 'react';
import './categoryNav.css';
import { Link } from 'react-router-dom';
function PopularNav(props) {
    return (
        <div className="category-container">
            <Link to={`/filter/${encodeURIComponent(props.category)}`}><img src={props.imageSrc} alt="category" /></Link>
            <h3>{props.category}</h3>
        </div>
    );
}

export default PopularNav;