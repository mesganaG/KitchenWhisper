import { Link } from "react-router-dom";
import MealCard from "./mealCard";
import './RecipeContainer.css';
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
    }, [URL]);

    return recipeList;


}
function RecipeContainer(props) {
    const URL = `https://api.edamam.com/api/recipes/v2?app_id=e9933851&app_key=56c2d682ac2afaee562ae3bf46a67706&type=public&q=${props.mealName}`;
    let recipe = fetchRecipes(URL);
    // console.log(recipe[0].recipe);
    return (
        <>
            <div className="section-text">
                <Link to={`/filter/${encodeURIComponent(props.mealName)}`} id='meal-name' style={{color:"black"}}><h3>{props.sectionHeader}</h3></Link>
                {/* <h3>{props.sectionHeader}</h3> */}
            </div>
            <div className="list-recipes">             
                {
                    recipe.slice(0, props.rowNumber).map((recipe) => {
                        return <MealCard
                            mealName={recipe.recipe.label}
                            mealDescription=" "
                            imageSrc={recipe.recipe.image}
                            carbs={recipe.recipe.totalNutrients.CHOCDF.quantity}
                            fat={recipe.recipe.totalNutrients.FAT.quantity}
                            protein={recipe.recipe.totalNutrients.PROCNT.quantity}
                            calories={recipe.recipe.totalNutrients.ENERC_KCAL.quantity}
                        />
                    })
                }


            </div>

        </>

    );

}

export default RecipeContainer;