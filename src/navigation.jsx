import './navStyle.css';

function Navigation(props) {
    return (
        <nav>
            <div className="logo">KITCHENWHISPER</div>
            <div className="nav-list">

                <div className="list-container">

                    <button className='nav-list-btn'>Meals</button>
                    <div className="dropdown-content">
                        <a href="#">Breakfast</a>
                        <a href="#">Lunch</a>
                        <a href="#">Dinner</a>
                        <a href="#">Snack</a>
                        <a href="#">Desserts</a>
                    </div>
                </div>

                <div className="list-container">
                    <button className='nav-list-btn'>Cuisine</button>
                    <div className="dropdown-content">
                        <a href="#">Ethiopian</a>
                        <a href="#">Mexican</a>
                        <a href="#">Chinese</a>
                        <a href="#">Indian</a>
                        <a href="#">Japanese</a>
             
                    </div>

                </div>

                <div className="list-container">
                    <button className='nav-list-btn'>Ingredients</button>
                    <div className="dropdown-content">
                        <a href="#">Chicken</a>
                        <a href="#">Beef</a>
                        <a href="#">Seafood</a>
                        <a href="#">Pasta</a>
                        <a href="#">Fruit</a>
                        <a href="#">Pork</a>
                    </div>
                </div>

                <div className="list-container">
                    <button className='nav-list-btn'>Diets</button>
                    <div className="dropdown-content">
                        <a href="#">Balanced</a>
                        <a href="#">High Protein</a>
                        <a href="#">Vegetarian</a>
                        <a href="#">Low fat</a>
                        <a href="#">Low Carb</a>
                        <a href="#">No Sugar</a>
                    </div>
                </div>
            </div>

            <div className="signup-container">
                <button className="signup">Sign Up</button>
            </div>
        </nav>
    );
}

export default Navigation;