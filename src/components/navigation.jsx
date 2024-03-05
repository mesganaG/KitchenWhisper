import './navStyle.css';
import dropdownIcon from '../assets/images/expand_more.svg';
import { Link } from 'react-router-dom';
import Twitter from '../assets/images/twitter-icon.svg'
import Facebook from '../assets/images/facebook-icon.svg'
import Instagram from '../assets/images/instagram-icon.svg'
import Youtube from '../assets/images/youtube-icon.svg'
import Logo from '../assets/images/logo.png'
function Navigation(props) {
    const expand = () => {
        let dropdownContent = document.querySelectorAll('.dropdown-content');
        let navListBtn = document.querySelectorAll('.list-container');
        for (let i = 0; i < navListBtn.length; i++) {
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
            <div className="nav-list">

                <div className="logo">

                    <Link to="/"><img src={Logo} alt="" /></Link>
                </div>
                <div className="list-container">
                    <Link to="/"><h3>Home</h3></Link>
                    <Link to="/About"><h3>About</h3></Link>
                    <Link to="/Contact"><h3>Contact</h3></Link>

                </div>


                {/* <div className="social">
                    <ul>
                        <li><a href="#"><img src={Youtube} alt="Youtube" /></a></li>
                        <li><a href="#"><img src={Instagram} alt="Instagram" /></a></li>
                        <li><a href="#"><img src={Facebook} alt="Facebook" /></a></li>
                        <li><a href="#"><img src={Twitter} alt="Twitter" /></a></li>
                    </ul>
                </div> */}

                {/* <div className="list-container ">
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
                </div> */}
            </div>

            {/* <div className="signup-container">
                <button className="signup">Sign Up</button>
            </div> */}
        </nav>
    );
}

export default Navigation;