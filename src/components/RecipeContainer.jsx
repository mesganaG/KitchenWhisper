import Meal from "./mealCard";
import SearchRecipe from "./searchRecipe";
import './RecipeContainer.css';
function RecipeContainer(props) {
    return (
        <>
            <div className="list-recipes">

                <SearchRecipe
                    mealName={props.mealName}
                    mealDescription=" " 
                    imageSrc="https://pinchofyum.com/wp-content/uploads/Chicken-Sweet-Potato-Meal-Prep-Bowls-Recipe.jpg"
                />
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