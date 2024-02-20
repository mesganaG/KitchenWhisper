import './navStyle.css';

function Navigation() {
    return (
        <nav>
            <div className="logo">KITCHENWHISPER</div>
            <div className="nav-list">


                <div className="list-container">

                    <button className='nav-list-btn'>Meals</button>
                    <div className="dropdown-content">
                        <a href="#">Breakfast</a>
                        <a href="#">Lunch</a>
                        <a href="#">DINNER</a>
                        <a href="#">SNACKS</a>
                    </div>
                </div>

                <div className="list-container">
                    <button className='nav-list-btn'>Cuisine</button>
                    <div className="dropdown-content">
                        <a href="#">Breakfast</a>
                        <a href="#">Lunch</a>
                        <a href="#">Dinner</a>
                        <a href="#">Snacks</a>
                    </div>

                </div>

                <div className="list-container">
                    <button className='nav-list-btn'>Ingredients</button>
                    <div className="dropdown-content">
                        <a href="#">Breakfast</a>
                        <a href="#">Lunch</a>
                        <a href="#">Dinner</a>
                        <a href="#">Snacks</a>
                    </div>
                </div>

                <div className="list-container">
                    <button className='nav-list-btn'>Diets</button>
                    <div className="dropdown-content">
                        <a href="#">Breakfast</a>
                        <a href="#">Lunch</a>
                        <a href="#">Dinner</a>
                        <a href="#">Snacks</a>
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