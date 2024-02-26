import './mealCard.css';
import PieChart from './chart';
import { Link } from 'react-router-dom';
function MealCard(props) {

  return (
    <div className="meal-card">
      <div className="meal-image">
        <img src={props.imageSrc} alt="meal" />
      </div>


      <div className="meal-info">

        <div className="meal-description">
          {/* <Link to="/mealDetail"><h3>{props.mealName}</h3></Link>  */}
          <Link to="/mealDetail" id='meal-name' replace><h3>{props.mealName}</h3></Link>
        </div>
     

        <div className="meal-nutrition">

          <div className="chart-container">
            <PieChart
              items={[20, 20, 20]}
            />
          </div>
         

          <div className="total-nutrients">
            <h3>250 <sub>kcal</sub></h3>
            <ul>
              <li className='protien'>Protien <span>34g</span></li>
              <li className='carbs'>Carbs <span>34g</span></li>
              <li>Fat <span className='fat'>34g</span></li>
              <li>Sugar<span className='sugar'>34g</span></li>
            </ul>
          </div>
        </div>

      </div>
    </div>
  );
}

export default MealCard;