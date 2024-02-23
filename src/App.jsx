import { useState } from 'react'
import Navigation from './components/navigation'
import Category from './components/categoryNav'
import SearchBox from './components/searchRecipe'
import Meal from './components/mealCard'
import Footer from './components/footer'
import './App.css'


function App() {


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
