import React from 'react';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './filter.css';
import Footer from '../components/footer';
import MealCard from '../components/mealCard';
import Navigation from '../components/navigation';

function Filter() {
    let { category } = useParams();
    const URL = `https://api.edamam.com/api/recipes/v2?app_id=e9933851&app_key=56c2d682ac2afaee562ae3bf46a67706&type=public&q=${category}`;
    let badges;

    if(category === "Low-Carb"){
        badges = "https://t4.ftcdn.net/jpg/03/64/97/07/360_F_364970775_Xp9VenZQhV0HSD9qMu7hmt2stCAxcugz.jpg";
    }else if(category === "Balanced"){
        badges = "https://www.greatgrinskids.com/wp-content/uploads/sites/1049/2016/04/A-Braces-Friendly-Balanced-Diet.png";
    }else if(category === "High-Protein"){
        badges = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRp7QbeEwWfThR7CZJS40TovJJPKPyiOasdw&usqp=CAU";
    } else {
        badges = "https://as2.ftcdn.net/v2/jpg/01/64/66/21/1000_F_164662156_vdh3PB0XwgixruZY3sDDZnUc2AqSQkeB.jpg";
    }

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
                setRecipe(data.hits);
            }).catch(error => {
                console.error(error);
            });
    }, [URL]);

    if (!recipe) {
        return <div>Loading...</div>;
    }

    return (
        <>
            <Navigation />
            <div className='filter-main-container'>

                <div className="filter-header">
                    <h1>{category}{" Recipe List"}</h1>
                    <div className="filter-img-container">
                        <img src={badges} alt="category badge" />
                    </div>

                </div>
                <div className='filtered-container'>
                    <div className="carb-recipe">
                        {
                            recipe.map((item) => {
                                return (

                                    <div className="carb-meals">

                                        <MealCard
                                            mealName={item.recipe.label}
                                            imageSrc={item.recipe.image}
                                            style={{ width: "85%" }}
                                            carbs={item.recipe.totalNutrients.CHOCDF.quantity}
                                            fat={item.recipe.totalNutrients.FAT.quantity}
                                            protein={item.recipe.totalNutrients.PROCNT.quantity}
                                            calories={item.recipe.totalNutrients.ENERC_KCAL.quantity}
                                        />

                                    </div>

                                )
                            })
                        }
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Filter;