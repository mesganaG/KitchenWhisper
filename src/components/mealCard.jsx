import './mealCard.css';
import stopwatch from '../assets/images/stopwatch.svg';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

function MealCard(props) {
  return (

    <>

    <div className="meal-card" style={props.style}>

     
      <div className="meal-image">
        {/* <img src={props.imageSrc} alt="meal" /> */}
          <Link to={`/mealDetail/${encodeURIComponent(props.mealName)}`} style={{width:"100%"}}><img src={props.imageSrc} alt="meal" /></Link>
      </div>

      <div className="meal-info">

        <div className="meal-description">
            <Link to={`/mealDetail/${encodeURIComponent(props.mealName)}`} id='meal-name'><h3>{props.mealName}</h3></Link>
        </div>

        <div className="meal-nutrition">       

          <div className="total-nutrients">
            {/* <div className="diet-label">
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde, ea. Obcaecati quo cupiditate animi nobis </p>
            </div> */}

            <div className="list-nutrient">
              <ul>
                  <li><h3>{Math.floor(props.calories)}</h3> <p>kcal</p>Calories</li>
                  <li><h3>{Math.floor(props.fat) + "g"}</h3>Fat</li>
                  <li><h3>{Math.floor(props.protein) + "g"}</h3>Protein</li>
                  <li><h3>{Math.floor(props.carbs) + "g"}</h3>Carbs</li>
              </ul>
            </div>
            {/* <div className="time-to-cook">
              <img src={stopwatch} alt="stopwatch icon" />

            </div> */}
          </div>
        </div>

      </div>
    </div>

    </>
  );
}

export default MealCard;