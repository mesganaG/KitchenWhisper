import './mealCard.css';
import PieChart from './chart';

function MealCard(props) {

  return (
    <div className="meal-card">
      <div className="meal-image">
        <img src={props.imageSrc} alt="meal" />
      </div>


      <div className="meal-info">

        <div className="meal-description">
          <a href="">{props.mealName}</a>
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