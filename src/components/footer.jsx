import './footer.css'
import Twitter from '../assets/images/twitter-icon.svg'
import Facebook from '../assets/images/facebook-icon.svg'
import Instagram from '../assets/images/instagram-icon.svg'
import Youtube from '../assets/images/youtube-icon.svg'
function Footer() {
    return (
        <>
        <div className="footer">

            <div className="top-section">
                <div className="footer-logo">
                    <h1>The Kitchen Whisper</h1>
                </div>

                <div className="footer-links">
                    <div className="connect">
                        <h3>Connect</h3>
                        <ul>
                            <li><a href="#">Facebook</a></li>
                            <li><a href="#">Instagram</a></li>
                            <li><a href="#">Twitter</a></li>
                            <li><a href="#">YouTube</a></li>
                        </ul>    
                        
                    </div>    
                    
                    <div className="about">
                        <h3>More</h3>
                        <ul>
                            <li><a href="#">About</a></li>
                            <li><a href="#">Contact</a></li>
                            <li><a href="#">Privacy Policy</a></li>
                            <li><a href="#">Terms of Service</a></li>
                        </ul>
                    
                    
                    </div>
                    
                </div>


            </div>
            <div className="bottom-section">
                <p>© 2024 The Kitchen Whisper</p>

                <div className="social-icons">
                    <ul>
                        <li><a href="#"><img src={Youtube} alt="Youtube" /></a></li>
                        <li><a href="#"><img src={Instagram} alt="Instagram" /></a></li>
                        <li><a href="#"><img src={Facebook} alt="Facebook" /></a></li>
                        <li><a href="#"><img src={Twitter} alt="Twitter" /></a></li>
                    </ul>
                </div>
            </div>
        </div>
        </>
    );
}

export default Footer;