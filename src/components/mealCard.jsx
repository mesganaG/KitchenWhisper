import './mealCard.css';
import stopwatch from '../assets/images/stopwatch.svg';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';


function MealCard(props) {

  return (
    <div className="meal-card">
      <div className="meal-image">
        <img src={props.imageSrc} alt="meal" />
      </div>


      <div className="meal-info">

        <div className="meal-description">
          <Link to="/mealDetail" id='meal-name'><h3>{props.mealName}</h3></Link>
        </div>
     

        <div className="meal-nutrition">        

      

          <div className="total-nutrients">
            <div className="diet-label">
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde, ea. Obcaecati quo cupiditate animi nobis </p>
            </div>
            <div className="time-to-cook">
              <img src={stopwatch} alt="stopwatch icon" />
              <p>60 mins</p>

            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default MealCard;