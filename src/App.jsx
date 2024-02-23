import { useState } from 'react'
import Navigation from './components/navigation'
import Category from './components/categoryNav'
import SearchBox from './components/searchRecipe'
import Meal from './components/mealCard'
import Footer from './components/footer'
import './App.css'
import Photo1 from './assets/images/photo1.jpg'




function App() {

  let i = 0;
  setInterval(() => {
    if (i > 3) {
      i = 0;
    }
    const imgContainer = document.querySelector('.image-container');
    const imagesList = [
      "https://media.post.rvohealth.io/wp-content/uploads/sites/2/2020/01/GRT-meal-prep-chicken-bean-1296x728-header-1296x728.jpg",
      "https://media.self.com/photos/5a3172fae1ef6d3e6b8801d8/master/pass/Gluten-Free.jpg",
      "https://foodtank.com/wp-content/uploads/2021/04/ella-olsson-rD3YrnhTmf0-unsplash.jpg",
      Photo1];
    imgContainer.style.backgroundImage = `url(${imagesList[i]})`;
    imgContainer.style.transition = "0.5s ease-out";

    i += 1;
  }, 3000);

  return (
    <>
      <Navigation
      />
      <div className="main-container">


        <section className="image-slide">
          <div className="image-container">
            <div className="header-intro">
              <h1>WELCOME TO THE KITCHEN WHISPER</h1>
              <p>First we eat, then we do everything else.</p>
            </div>
          </div>
        </section>

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
            <SearchBox />
          </div>

          <div className="recipe-container">
            <Meal />
            <Meal />
            <Meal />
            <Meal />
            <Meal />
            <Meal />


            {/* <div className="load-more-container">
            <button>Load More</button>
          </div> */}
          </div>



        </main>

        <div className="footer-section">
          <Footer />
        </div>

      </div>
    </>
  )
}

export default App
