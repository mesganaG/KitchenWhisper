import React from "react";
import './searchRecipe.css';
import searchIcon from '../assets/images/search-icon.svg';
import MealCard from "./mealCard";
import { useState, useEffect } from 'react';

function SearchRecipe(props) {
    // const URL = `https://api.edamam.com/api/recipes/v2?app_id=e9933851&app_key=56c2d682ac2afaee562ae3bf46a67706&type=public&q=${props.mealName}`;
    // const [recipeList, setRecipeList] = useState([]);

    // useEffect(() => {
    //     fetch(URL)
    //         .then(response => response.json())
    //         .then(data => {
    //             setRecipeList(data.hits);
    //         });
    // }, [URL]);

    // console.log(recipeList);
    return (
        <>
            <MealCard
                mealName={props.mealName}
                mealDescription=" "
                imageSrc="https://pinchofyum.com/wp-content/uploads/Chicken-Sweet-Potato-Meal-Prep-Bowls-Recipe.jpg"
            />
        </>
    );
}

export default SearchRecipe;    