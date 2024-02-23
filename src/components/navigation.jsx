import './navStyle.css';
import dropdownIcon from '../assets/images/expand_more.svg';
function Navigation(props) {
    const expand = () => {
        let dropdownContent = document.querySelectorAll('.dropdown-content');  
        let navListBtn = document.querySelectorAll('.list-container');
        for(let i = 0; i < navListBtn.length; i++ ){
            navListBtn[i].addEventListener('click', () => {
               dropdownContent[i].classList.add('show');
            });
            navListBtn[i].addEventListener('mouseleave', () => {
                dropdownContent[i].classList.remove('show');
            });
        }
    }
    return (
        <nav>
            <div className="logo">KITCHENWHISPER</div>
            <div className="nav-list">

                <div className="list-container">

                    <a className='nav-list-btn' onClick={expand}>Meals <span><img src={dropdownIcon} alt="" /></span></a>
                    <div className="dropdown-content">
                        <a href="#">Breakfast</a>
                        <a href="#">Lunch</a>
                        <a href="#">Dinner</a>
                        <a href="#">Snack</a>
                        <a href="#">Desserts</a>
                    </div>
                </div>

                <div className="list-container ">
                    <a className='nav-list-btn' onClick={expand}>Cuisine <span><img src={dropdownIcon} alt="" /></span></a>
                    <div className="dropdown-content">
                        <a href="#">Ethiopian</a>
                        <a href="#">Mexican</a>
                        <a href="#">Chinese</a>
                        <a href="#">Indian</a>
                        <a href="#">Japanese</a>
             
                    </div>

                </div>

                <div className="list-container">
                    <a className='nav-list-btn' onClick={expand}>Ingredient <span><img src={dropdownIcon} alt="" /></span></a>
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
                    <a className='nav-list-btn'onClick={expand}>Diets <span><img src={dropdownIcon} alt="" /></span></a>
                    <div className="dropdown-content">
                        <a href="#">Balanced</a>
                        <a href="#">High Protein</a>
                        <a href="#">Vegetarian</a>
                        <a href="#">Low fat</a>
                        <a href="#">Low Carb</a>
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