import React from "react";
import './searchRecipe.css';
import MealCard from "./mealCard";
import { useState, useEffect } from 'react';

function fetchRecipes(URL) {
    const [recipeList, setRecipeList] = useState([]);
    useEffect(() => {
        fetch(URL)
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error('Error: ' + response.status);
                }
            })
            .then(data => {
                setRecipeList(data.hits);
            })
            .catch(error => {
                console.error(error);
            });
    }, [URL]);

    return recipeList;


}

function SearchRecipe(props) {
    const URL = `https://api.edamam.com/api/recipes/v2?app_id=e9933851&app_key=56c2d682ac2afaee562ae3bf46a67706&type=public&q=${props.mealName}`;
    let recipe = fetchRecipes(URL);
    return (
        <> 
        {
            recipe.map((recipe) => {
                return <MealCard
                    mealName={recipe.recipe.label}
                    mealDescription=" "
                    imageSrc={recipe.recipe.image}
                    // nutrition={recipe.recipe.totalNutrients}
                />
            })
        }
        </>
    );
}

export default SearchRecipe;    