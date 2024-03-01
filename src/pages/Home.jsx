import Category from '../components/categoryNav'
import SearchBox from '../components/searchRecipe'
import Meal from '../components/mealCard'
import Footer from '../components/footer'
import searchIcon from '../assets/images/search-icon.svg';
import RecipeContainer from '../components/RecipeContainer'
import { useState, useEffect } from 'react';
// import photo from "https://pinchofyum.com/wp-content/uploads/Chicken-Sweet-Potato-Meal-Prep-Bowls-Recipe.jpg"
import './Home.css'

function Home() {
  const [inputValue, setInputValue] = useState('');
  const [fullWord, setFullWord] = useState('');

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      setInputValue(event.target.value);
    }
  };

  const handleSubmitButtonClick = () => {
    setFullWord(inputValue);
  };

  console.log(inputValue);


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
                <input type="text"  onKeyDown={handleKeyDown} placeholder="Search for a recipe" />
                <button onClick={handleSubmitButtonClick}><img src={searchIcon} alt="search icon" /></button>
              </div>
            </div>
          </div>


          <div className='recipe-container'>


            <RecipeContainer
              mealName={fullWord}
            />
            {/* <RecipeContainer />
            <div className="display-other">
              <h2>Other Recipes</h2>

            </div>

            <RecipeContainer />
            <RecipeContainer />

            <div className="display-other">
              <h2>Other Recipes</h2>
  
            </div> */}


          </div>


        </main>


      </div>

    </>
  );
}

export default Home;