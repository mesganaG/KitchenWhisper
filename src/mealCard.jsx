


function MealCard(props) {
  return (
    <div className="meal-card">
      <h1>{props.meal.name}</h1>
      <img src={props.meal.image} alt={props.meal.name} />
      <p>{props.meal.description}</p>
      <p>{props.meal.price}</p>
    </div>
  );
}