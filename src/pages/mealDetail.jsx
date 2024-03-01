import './mealDetail.css';
import Navigation from '../components/navigation.jsx'
import Footer from '../components/footer.jsx'
import PieChart from '../components/chart.jsx'

function MealDetail() {
    return (
        <>

            <Navigation
            />

            <div className="meal-main-container">
                <div className="meal-detail">

                    <div className="left-section">
                        <div className="meal_image">
                            <img src="https://www.themealdb.com/images/media/meals/ustsqw1468250014.jpg" alt="meal" />
                        </div>

                        <div className="meal-ingredients">
                            <h2>Ingredients</h2>

                            <div className="ingredient-list">
                                <div className="ingredient">
                                    <div className="measurement">
                                        <h3>Ingredient</h3>
                                        <p>1/2 cups</p>
                                    </div>
                                    <p className='measure'>560 g</p>
                                </div>
                                <div className="ingredient">
                                    <div className="measurement">
                                        <h3>Ingredient</h3>
                                        <p>1/2 cups</p>
                                    </div>
                                    <p className='measure'>560 g</p>
                                </div>
                                <div className="ingredient">
                                    <div className="measurement">
                                        <h3>Ingredient</h3>
                                        <p>1/2 cups</p>
                                    </div>
                                    <p className='measure'>560 g</p>
                                </div>
                                <div className="ingredient">
                                    <div className="measurement">
                                        <h3>Ingredient</h3>
                                        <p>1/2 cups</p>
                                    </div>
                                    <p className='measure'>560 g</p>
                                </div>
                                <div className="ingredient">
                                    <div className="measurement">
                                        <h3>Ingredient</h3>
                                        <p>1/2 cups</p>
                                    </div>
                                    <p className='measure'>560 g</p>
                                </div>

                            </div>
                        </div>
                    </div>


                    <div className="right-section">
                        <div className="heading">
                            <h1>Beef and Mustard Pie</h1>
                        </div>
                        <div className="nutrition-heading">
                            <h3>Nutrition per Serving</h3>

                        </div>
                      
                        <div className="chart-display">

                            <div className="description">
                                <h3>Beef and Mustard Pie</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac semper nisl. Nulla facilisi.
                                    Sed euismod, nunc id ultricies lacinia, nisl nunc tincidunt enim, ac lacinia nunc nunc id purus.
                                    Sed auctor, nunc id ultricies lacinia, nisl nunc tincidunt enim, ac lacinia nunc nunc id purus.</p>
                            </div>

                            <div className="chart-container">
                                <PieChart
                                    items={[90, 20, 20, 30, 100]}
                                />
                            </div>
                          
    
                        </div>


                        <div className="nutrition-serving">

                            <div className="diet-serving">
                                <h3>224</h3>
                                <p>Calories</p>
                            </div>
                            <div className="diet-serving">
                                <h3>224</h3>
                                <p>Calories</p>
                            </div>
                            <div className="diet-serving">
                                <h3>224</h3>
                                <p>Calories</p>
                            </div>
                            <div className="diet-serving">
                                <h3>224</h3>
                                <p>Calories</p>
                            </div>

                        </div>

                        <div className="meal-instructions">
                            <h2>Instructions</h2>
                            <div className="instruction">
                                <h3>1</h3>
                                <p>Preheat the oven to 180C/350F/Gas 4. Heat the oil in a large frying pan over a medium heat.</p>
                            </div>
                            <div className="instruction">
                                <h3>1</h3>
                                <p>Preheat the oven to 180C/350F/Gas 4. Heat the oil in a large frying pan over a medium heat.</p>
                            </div>
                            <div className="instruction">
                                <h3>1</h3>
                                <p>Preheat the oven to 180C/350F/Gas 4. Heat the oil in a large frying pan over a medium heat.</p>
                            </div>
                            <div className="instruction">
                                <h3>1</h3>
                                <p>Preheat the oven to 180C/350F/Gas 4. Heat the oil in a large frying pan over a medium heat.</p>
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