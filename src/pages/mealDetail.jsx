import './mealDetail.css';
import Navigation from '../components/navigation.jsx'
import Footer from '../components/footer.jsx'
import PieChart from '../components/chart.jsx'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function MealDetail() {
    let { mealName } = useParams();
    const URL = `https://api.edamam.com/api/recipes/v2?app_id=e9933851&app_key=56c2d682ac2afaee562ae3bf46a67706&type=public&q=${mealName}`;

    const [recipe, setRecipe] = useState(null);
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
            }).catch(error => {
                console.error(error);
            });
    }, [URL]);

    if (!recipe) {
        return <div>Loading...</div>;
    }
    const ingredients = recipe.ingredients;
    return (
        <>

            <Navigation
            />

            <div className="meal-main-container">


                <div className="meal-detail">

                    <div className="left-section">
                        <div className="meal_image">
                            <img src={recipe.image} alt="meal" />

                        </div>
                        <div className="chart-container">
                            <div className="chart-display">
                                <PieChart
                                    labels={[recipe.digest[0].label, recipe.digest[1].label, recipe.digest[2].label, recipe.digest[3].label]}
                                    items={[recipe.digest[0].total, recipe.digest[1].total, recipe.digest[2].total, recipe.digest[3].total]}

                                />
                            </div>
                        </div>


                    </div>

                    <div className="bottom-section-container">

                        <div className="right-section">
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




                            <div className="ingredients-section">



                                <h3>Ingredients</h3>
                                {
                                    ingredients.slice(0,10).map((item, index) => {
                                        return (
                                            <div className="ingredient-list" key={index}>

                                                <div className="ingredient">
                                                    <img src={item.image} alt="" />
                                                </div>

                                                <div className="description">
                                                    <p>{item.text}</p>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>

                        <div className="healthlabels-container">
                            
                            <h3>Health Labels</h3>
                            <div className="health-labels">
                                {
                                    recipe.healthLabels.map((item, index) => {
                                        return (
                                            <div className="health-label" key={index}>
                                                <p>{item}</p>
                                            </div>
                                        )
                                    })
                                }
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
