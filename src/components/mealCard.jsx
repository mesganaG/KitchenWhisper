import './mealCard.css';


function MealCard() {
  return (
    <div className="meal-card">
      <div className="meal-image">
        <img src="https://pinchofyum.com/wp-content/uploads/Chicken-Sweet-Potato-Meal-Prep-Bowls-Recipe.jpg" alt="meal" />
      </div>
      <div className="meal-info">
        <h3>Chicken Sweet Potato Meal Prep Bowls</h3>
        <p>Chicken Sweet Potato Meal Prep Bowls are a healthy and nutritious meal that is perfect for lunch or dinner. This meal is perfect for meal prep and is a great way to stick to your healthy eating goals.</p>
      </div>
    </div>
  );
}

export default MealCard;