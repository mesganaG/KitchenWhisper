import MealCard from "./mealCard";
import SearchRecipe from "./searchRecipe";
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
            .catch(error => {
                console.error(error);
            });
    }, [URL]);

    return recipeList;


}
function RecipeContainer(props) {

    const URL = `https://api.edamam.com/api/recipes/v2?app_id=e9933851&app_key=56c2d682ac2afaee562ae3bf46a67706&type=public&q=${props.mealName}`;
    let recipe = fetchRecipes(URL);
    return (
        <>
            <div className="list-recipes">


                {
                    recipe.slice(0, 15).map((recipe) => {
                        return <MealCard
                            mealName={recipe.recipe.label}
                            mealDescription=" "
                            imageSrc={recipe.recipe.image}
                        />
                    })
                }

                {/* <SearchRecipe
                    mealName={props.mealName}
                    mealDescription=" " 
                    imageSrc="https://pinchofyum.com/wp-content/uploads/Chicken-Sweet-Potato-Meal-Prep-Bowls-Recipe.jpg"
                /> */}

                {/* <Meal
                    mealName={props.mealName}
                    mealDescription=" "
                    imageSrc="https://pinchofyum.com/wp-content/uploads/Chicken-Sweet-Potato-Meal-Prep-Bowls-Recipe.jpg"
                /> */}
{/* 
                <Meal
                    mealName="Chicken Sweet Potato Meal Prep Bowls"
                    mealDescription="Chicken-Sweet-Potato-Meal-Prep-Bowls Chicken-Sweet-Potato-Meal-Prep-Bowls Chicken-Sweet-Potato-Meal-Prep-Bowls"
                    imageSrc="https://pinchofyum.com/wp-content/uploads/Chicken-Sweet-Potato-Meal-Prep-Bowls-Recipe.jpg"
                />
                <Meal
                    mealName="Chicken Sweet Potato Meal Prep Bowls"
                    mealDescription=""
                    imageSrc="https://pinchofyum.com/wp-content/uploads/Chicken-Sweet-Potato-Meal-Prep-Bowls-Recipe.jpg"
                /> */}


            </div>

        </>

    );

}

export default RecipeContainer;