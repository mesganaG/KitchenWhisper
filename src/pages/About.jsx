import './about.css'
import Navigation from '../components/navigation'
import Footer from '../components/footer'
function About() {
    return (
        <>
            <Navigation />

            <div className="section">
                <div className='container'>
                    <div className='container-section'>
                        <div className='title'>
                            <h1>About Us</h1>
                        </div>
                        <div className='content'>
                            <p>KitchenWhisper is dedicated to providing a comprehensive solution for individuals
                                looking to effectively monitor and manage their diets. At the heart of our platform
                                lies a vast collection of recipes, each accompanied by detailed nutrition information
                                to empower users in making informed dietary choices. Moreover, our innovative feature
                                allows users to input their available ingredients, enabling our platform to analyze and
                                present tailored nutrition facts for their chosen recipes. We firmly believe that our
                                application will revolutionize the way individuals approach their dietary goals by
                                simplifying the process of finding recipes that align with their preferences and
                                nutritional needs.</p>
                        </div>
                        <div className="address">
                            <h2>Address</h2>
                            <p>
                                5038 11th Ave NE <br></br>
                                Seattle WA <br></br>
                                98105 <br></br>
                                206-480-6425 <br></br>
                                KitchenWhisper@gmail.com
                            </p>
                        </div>
                    </div>

                    <div className='image'>
                        <img src="https://pinchofyum.com/wp-content/uploads/Chicken-Sweet-Potato-Meal-Prep-Bowls-Recipe.jpg" alt="meal" />
                    </div>

                </div>

            </div>
            <Footer />
        </>

    );

} export default About