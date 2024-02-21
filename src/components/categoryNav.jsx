import React from 'react';
import './categoryNav.css';
function PopularNav(props) {
    return (

        <div className="category-container">
            <a href=""><img src={props.imageSrc} alt="category" /></a>
            <h3>{props.category}</h3>
        </div>
    );
}

export default PopularNav;