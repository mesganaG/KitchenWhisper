import Category from '../components/categoryNav'
import searchIcon from '../assets/images/search-icon.svg';
import RecipeContainer from '../components/RecipeContainer'
import { useState, useEffect } from 'react';
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
              category="Low-Carb"
              imageSrc="https://t4.ftcdn.net/jpg/03/64/97/07/360_F_364970775_Xp9VenZQhV0HSD9qMu7hmt2stCAxcugz.jpg"
            />
            <Category
              category="Balanced"
              imageSrc="https://www.greatgrinskids.com/wp-content/uploads/sites/1049/2016/04/A-Braces-Friendly-Balanced-Diet.png"
            />
            <Category
              category="High-Protein"
              imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRp7QbeEwWfThR7CZJS40TovJJPKPyiOasdw&usqp=CAU"
            />
            <Category
              category="Low-Fat"
              imageSrc="https://as2.ftcdn.net/v2/jpg/01/64/66/21/1000_F_164662156_vdh3PB0XwgixruZY3sDDZnUc2AqSQkeB.jpg"
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
                mealName={"Dinner"}
                rowNumber={3}
                sectionHeader={"Dinner Recipes"}
              /> : <RecipeContainer
                mealName={meal}
                rowNumber={15}
              />
            }


            {
              displayStatus === false ? <RecipeContainer
                mealName={"Snacks"}
                rowNumber={3}
                sectionHeader={"Snacks"}
              /> : null
            }

            {
              displayStatus === false ? <RecipeContainer
                mealName={"Breakfast"}
                rowNumber={3}
                sectionHeader={"Breakfast Recipes"}
              /> : null
            }

            {
              displayStatus === false ? <RecipeContainer
                mealName={"Lunch vegan"}
                rowNumber={3}
                sectionHeader={"Lunch Recipes"}
              /> : null
            }

         



          </div>


        </main>


      </div>

    </>
  );
}

export default Home;