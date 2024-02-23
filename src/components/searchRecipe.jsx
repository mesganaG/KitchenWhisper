import React from "react";
import './searchRecipe.css';
import searchIcon from '../assets/images/search-icon.svg';

function SearchRecipe() {
    return (
        <div className="search-container">
            <form>
                <input type="text" placeholder="Search for a recipe" />
                <button><img src={searchIcon} alt="search icon" /></button>
            </form>
        </div>
    );
}

export default SearchRecipe;    