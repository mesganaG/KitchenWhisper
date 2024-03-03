import Category from '../components/categoryNav'
import searchIcon from '../assets/images/search-icon.svg';
import RecipeContainer from '../components/RecipeContainer'
import { useState, useEffect } from 'react';
// import photo from "https://pinchofyum.com/wp-content/uploads/Chicken-Sweet-Potato-Meal-Prep-Bowls-Recipe.jpg"
import './Home.css'

function Home() {
  const [inputValue, setInputValue] = useState('');
  const [meal, setMeal] = useState('');
  const [displayStatus, setDisplayStatus] = useState(false);

  const handleKeyDown = (event) => {
    setInputValue(event.target.value);
    if (event.key === 'Enter') {
      setMeal(inputValue);
      setDisplayStatus(true);
      if (inputValue === '') {
        setDisplayStatus(false);
      }
    }
  };

  const handleSubmitButtonClick = () => {
    setMeal(inputValue);
    setDisplayStatus(true);

    if (inputValue === '') {
      setDisplayStatus(false);
    }
  };



  return (
    <>
      <section className="image-slide">
        <div className="image-container">
          <div className="header-intro">
            <h1>WELCOME TO THE KITCHEN WHISPER</h1>
            <p>First we eat, then we do everything else.</p>
          </div>
        </div>
      </section>

      <div className="main-container">

        <main>
          <div className="category-list-container">

            <h2>Categories</h2>
            <Category
              category="Breakfast"
              imageSrc="https://pinchofyum.com/wp-content/uploads/Chicken-Sweet-Potato-Meal-Prep-Bowls-Recipe.jpg"
            />
            <Category
              category="Lunch"
              imageSrc="https://pinchofyum.com/wp-content/uploads/Chicken-Sweet-Potato-Meal-Prep-Bowls-Recipe.jpg"
            />
            <Category
              category="Dinner"
              imageSrc="https://pinchofyum.com/wp-content/uploads/Chicken-Sweet-Potato-Meal-Prep-Bowls-Recipe.jpg"
            />
            <Category
              category="Snacks"
              imageSrc="https://pinchofyum.com/wp-content/uploads/Chicken-Sweet-Potato-Meal-Prep-Bowls-Recipe.jpg"
            />
          </div>

          <div className="search-box-container">
            <div className="search-container">
              <div className='input-container'>
                <input type="text" onKeyDown={handleKeyDown} placeholder="Search for a recipe" />
                <button onClick={handleSubmitButtonClick}><img src={searchIcon} alt="search icon" /></button>
              </div>
            </div>
          </div>


          <div className='recipe-container'>


            

            {
              displayStatus === false ? <RecipeContainer
                mealName={"chicken"}
                rowNumber={3}
                sectionHeader={"Chicken Recipes"}
              /> : <RecipeContainer
                mealName={meal}
                rowNumber={15}
              />
            }

            {
              displayStatus === false ? <RecipeContainer
                mealName={"beef"}
                rowNumber={3}
                sectionHeader={"Beef Recipes"}
              /> : null
            }

            {
              displayStatus === false ? <RecipeContainer
                mealName={"pork"}
                rowNumber={3}
                sectionHeader={"Pork Recipes"}
              /> : null
            }

            {
              displayStatus === false ? <RecipeContainer
                mealName={"vegetarian"}
                rowNumber={3}
                sectionHeader={"Vegetarian Recipes"}
              /> : null
            }
          


          </div>


        </main>


      </div>

    </>
  );
}

export default Home;