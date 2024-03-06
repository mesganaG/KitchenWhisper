
import './Contact.css'
import Navigation from '../components/navigation'
import Footer from '../components/footer'
import { useState } from 'react';
function Contact() {

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can perform actions like sending the form data to the server
    console.log(formData);
    // For demonstration, let's just reset the form
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      message: ''
    });
  };
  console.log(formData);
  return (
    

    <>
      <Navigation />
      <div className="contact-main-container">
        <div className="contact-container">

          <div className="contact-us">
            <h1>Contact Us</h1>
            <p>Feel free to contact us for any queries or feedback. We are here to help you.</p>
            <div className="contact-info">

              <div className="contact-info-item">
                <div className="contact">
                  <span class="material-symbols-outlined">
                    distance
                  </span>
                  <h3>Address</h3>
                  <p>123, XYZ Street, ABC City, Country</p>
                </div>

                <div className="contact">
                  <span class="material-symbols-outlined">
                    call
                  </span> 
                  <h3>Phone</h3>
                  <p>+123 456 7890</p>
                </div>

                <div className="contact">
                  <span class="material-symbols-outlined">
                    email
                  </span>
                  <h3>Email</h3>
                  <p>KitchenWhisper@gmail.com </p>
                </div>

              </div>
            </div>
          </div>


          <form onSubmit={handleSubmit}>
       

            <div className="contact-form">
              <div className="contact-header">
                <h1>Send us a Message</h1>
              </div>
              <div className="contact-input">
                <input type="text" placeholder="First Name" />
              </div>
              <div className="contact-input">
                <input type="text" placeholder="Last Name" />
              </div>
              <div className="contact-input">
                <input type="text" placeholder="Email" />
              </div>
              <div className="contact-input">
                <input type="text" placeholder="Phone" />
              </div>
              <div className="contact-input">
                <textarea name="" id="" cols="20" rows="8" placeholder="Message"></textarea>
              </div>
              <div className="contact-input">
                <button type="submit">Send Message</button>
              </div>
            </div>

          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}
export default Contact; 