import './mealDetail.css';
import Navigation from '../components/navigation.jsx'
import Footer from '../components/footer.jsx'
import PieChart from '../components/chart.jsx'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';



// function fetchRecipes(URL) {
//     const [recipeList, setRecipeList] = useState([]);
//     useEffect(() => {
//         fetch(URL)
//             .then(response => {
//                 if (response.ok) {
//                     return response.json();
//                 } else {
//                     throw new Error('Error: ' + response.status);
//                 }
//             })
//             .then(data => {
//                 setRecipeList(data.hits);
//             })
//     }, [URL]);

//     return recipeList;


// }

function MealDetail() {
    let { mealName } = useParams();
    const URL = `https://api.edamam.com/api/recipes/v2?app_id=e9933851&app_key=56c2d682ac2afaee562ae3bf46a67706&type=public&q=${mealName}`;

    const [recipe, setRecipe] = useState(null); // Initialize recipe as null
    const [nutrients, setNutrients] = useState([]);
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
                setRecipe(data.hits[0].recipe); // Set recipe when data is fetched
            }). catch(error => {
                console.error(error);
            });
    }, [URL]);

    if (!recipe) {
        return <div>Loading...</div>;
    }
    // setNutrients(recipe.calories);
    let nutrientsList = [];
    // console.log(recipe.totalNutrients.FAT.quantity);
    nutrientsList.push(recipe.totalNutrients.FAT.quantity);
    nutrientsList.push(recipe.totalNutrients.PROCNT.quantity);
    nutrientsList.push(recipe.totalNutrients.CHOCDF.quantity);
    nutrientsList.push(recipe.totalNutrients.CHOLE.quantity);
    console.log(nutrientsList);
    

    // console.log(recipe.digest[0].label);
    return (
        <>

            <Navigation
            />

            <div className="meal-main-container">


                <div className="meal-detail">

                    <div className="left-section">


                        <div className="meal-name">
                            <h1>{mealName}</h1>
                            <a href="">source name</a>

                        </div>

                        <div className="meal_image">
                            <img src={recipe.image} alt="meal" />
                        </div>
                    </div>

                    <div className="right-section">


                        <div className="chart-display">

                            <div className="chart-container">
                                <PieChart
                                    labels={[recipe.digest[0].label, recipe.digest[1].label, recipe.digest[2].label, recipe.digest[3].label]}
                                    items={[recipe.digest[0].total, recipe.digest[1].total, recipe.digest[2].total, recipe.digest[3].total]}
                                />
                            </div>
                            <div className="nutrition-serving">

                                <div className="diet-serving">
                                    <h3>{Math.floor(recipe.digest[0].total)}</h3>
                                    <p>{[recipe.digest[0].label]}</p>
                                </div>
                                <div className="diet-serving">
                                    <h3>{Math.floor(recipe.digest[1].total)}</h3>
                                    <p>{[recipe.digest[1].label]}</p>
                                </div>
                                <div className="diet-serving">
                                    <h3>{Math.floor(recipe.digest[2].total)}</h3>
                                    <p>{[recipe.digest[2].label]}</p>
                                </div>
                                <div className="diet-serving">
                                    <h3>{Math.floor(recipe.digest[3].total)}</h3>
                                    <p>{[recipe.digest[3].label]}</p>
                                </div>

                            </div>

                        </div>


                        <div className="ingredients-section">

                         

                            <h3>Ingredients</h3>


                            <div className="ingredient-list">

                                <div className="ingredient">
                                    <img src="https://www.edamam.com/food-img/bb7/bb76cdd34c080bf65908c09812fd9c8d.jpg" alt="" />
                                </div>

                                <div className="description">
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                         Tempore, dolorem expedita vitae magnam, facere pariatur iure ipsam !</p>
                                </div>
                            </div>


                            <div className="ingredient-list">

                                <div className="ingredient">
                                    <img src="https://www.edamam.com/food-img/bb7/bb76cdd34c080bf65908c09812fd9c8d.jpg" alt="" />
                                </div>

                                <div className="description">
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                        Tempore, dolorem expedita vitae magnam, facere pariatur iure ipsam !</p>
                                </div>
                            </div>


                            <div className="ingredient-list">

                                <div className="ingredient">
                                    <img src="https://www.edamam.com/food-img/bb7/bb76cdd34c080bf65908c09812fd9c8d.jpg" alt="" />
                                </div>

                                <div className="description">
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                        Tempore, dolorem expedita vitae magnam, facere pariatur iure ipsam !</p>
                                </div>
                            </div>


                        </div>





                    </div>



                </div>

                <Footer />
            </div>



        </>
    )
}

export default MealDetail;