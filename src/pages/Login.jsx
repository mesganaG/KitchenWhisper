import React from 'react';
import './Login.css';
import SalmonPlate from '../assets\images/SalmonPlate.png';
import FacebookLogo from '../assets\images/FacebookLogo.png';
import GoogleLogo from '../assets\images/GoogleLogo.png';
import EmailLogo from '../assets\images/EmailLogo.png';

function Login() {
  const loginWithFacebook = () => {
    console.log('Login with Facebook');
    // Facebook login 
  };

  const loginWithGoogle = () => {
    console.log('Login with Google');
    // Google login
  };

  const loginWithEmail = (event) => {
    event.preventDefault();
    console.log('Login with Email');
    // Email login
  };

  return (
    <div className="container">
      <div className="foodImage" style={{ backgroundImage: `url(${SalmonPlate})` }}></div>
      <div className="login-form">
        <h1 style={{ color: 'blue' }}>KitchenWhisper</h1>
        <h2>Log in</h2>
        <form id="loginForm" onSubmit={loginWithEmail}>
          <button type="submit">
            <img src={EmailLogo} alt="Email" className="logo" /> Log in with Email
          </button>
          <button type="button" onClick={loginWithFacebook}>
            <img src={FacebookLogo} alt="Facebook" className="logo" /> Log in with Facebook
          </button>
          <button type="button" onClick={loginWithGoogle}>
            <img src={GoogleLogo} alt="Google" className="logo" /> Log in with Google
          </button>
          <p>Don't have an account? <a href="#join">Join now</a></p>
        </form>
      </div>
    </div>
  );
}

export default Login;