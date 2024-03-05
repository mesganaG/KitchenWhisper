import React, { useEffect, useState } from 'react';
import './pages/Login.css';
import Logo from '../assets/images/Logo.png';
import SalmonPlate from '../assets/images/SalmonPlate.png';
import facebookLogo from '../assets/images/facebook-icon.svg';
import { jwtDecode } from 'jwt-decode'; // import Utility to decode JWT tokens
import SignupForm from './pages/SignupForm';

function Login() {
  // state hooks to manage user data and UI states.
  const [user, setUser] = useState(null); // hold user data from Google
  const [fbUser, setFbUser] = useState(null); // hold user data from Facebook
  const [isLoggedInWithFB, setIsLoggedInWithFB] = useState(false); // state to track Facebook login status
  const [showSignup, setShowSignup] = useState(false); // state to control the visibility of the signup form

  // Function to handle the response after Google sign-in
  const handleCallbackResponse = (response) => {
    console.log("Encoded JWT ID token: " + response.credential);
    const userObject = jwtDecode(response.credential); // Decode the JWT token to get user data
    console.log(userObject);
    setUser(userObject); // Update the user state with the decoded user data
  };

  // Function to handle user sign-out (Google)
  const handleSignOut = () => {
    setUser(null); // Reset the user state to an empty object
    const auth2 = window.gapi && window.gapi.auth2.getAuthInstance();
    if (auth2) {
      auth2.signOut().then(() => {
        console.log('User signed out.');
      });
    }
  };

  // Function to check the user's login status with Facebook
  const checkLoginStatus = () => {
    window.FB.getLoginStatus(function(response) {
      if (response.status === 'connected') {
        setIsLoggedInWithFB(true);
        fetchUserData(); // Fetch Facebook user data if logged in
      } else {
        setIsLoggedInWithFB(false);
      }
    });
  };

  // Function to handle login with Facebook
  const handleFBLogin = () => {
    window.FB.login(response => {
      if (response.authResponse) {
        setIsLoggedInWithFB(true);
        fetchUserData();
      } else {
        console.log('User cancelled login or did not fully authorize.');
      }
    }, {scope: 'public_profile,email', auth_type: 'reauthenticate'});
  };

  // Function to handle logout with Facebook
  const handleFBLogout = () => {
    if (isLoggedInWithFB) {
      window.FB.logout(response => {
        setIsLoggedInWithFB(false);
        setFbUser(null);
        console.log('User logged out from Facebook.', response);
      });
    }
  };

  // Function to fetch Facebook user data
  const fetchUserData = () => {
    window.FB.api('/me', {fields: 'name,email,picture.width(200).height(200)'}, function(response) {
      setFbUser(response);
      console.log('Good to see you, ' + response.name + '.');
    });
  };

  useEffect(() => {
    // Load the Google API script for Google sign-in
    const scriptGoogle = document.createElement('script');
    scriptGoogle.src = 'https://accounts.google.com/gsi/client';
    scriptGoogle.async = true;
    scriptGoogle.defer = true;
    scriptGoogle.onload = () => {
      window.google.accounts.id.initialize({
        client_id: '187137953345-mnp2sbh1rb9re0d7crgi6v3qph8jvg8p.apps.googleusercontent.com', // Google Client ID
        callback: handleCallbackResponse
      });

      window.google.accounts.id.renderButton(
        document.getElementById('googleSignInDiv'),
        { theme: 'outline', size: 'large' }
      );
    };
    document.body.appendChild(scriptGoogle);

    // Load the Facebook SDK script for Facebook login
    (function(d, s, id){
       var js, fjs = d.getElementsByTagName(s)[0];
       if (d.getElementById(id)) return;
       js = d.createElement(s); js.id = id;
       js.src = "https://connect.facebook.net/en_US/sdk.js";
       fjs.parentNode.insertBefore(js, fjs);
     }(document, 'script', 'facebook-jssdk'));

    window.fbAsyncInit = function() {
      window.FB.init({
        appId      : '410608658214691', // Facebook App ID
        cookie     : true,
        xfbml      : true,
        version    : 'v10.0'
      });
      
      window.FB.AppEvents.logPageView();
      checkLoginStatus(); // Check the user's login status with Facebook
    };

    return () => {
      document.body.removeChild(scriptGoogle);
    };
  }, []);

  const handleSignupSuccess = (userName) => {
    alert(`Welcome, ${userName}!`); // Placeholder action
    setShowSignup(true); 
  };
  
  return (
    <div className="container">
      <div className="foodImage" style={{ backgroundImage: `url(${SalmonPlate})` }}></div>
      <div className="login-form">
        <img src={Logo} alt="Kitchen Whisper Logo" className="logo" />
        {!user && !fbUser && !showSignup && (
          <>
            <div id="googleSignInDiv"></div> {/* Google Sign-in button will be rendered here */}
            <button onClick={handleFBLogin} className="logout-button fb-login-btn">
              <img src={facebookLogo} alt="Facebook logo" /> Login with Facebook
            </button>
            <button onClick={() => setShowSignup(true)} className="logout-button signup-button">Sign Up</button>
          </>
        )}
        {showSignup && <SignupForm onSignupSuccess={handleSignupSuccess} />}
        {user && (
          <>
            <button onClick={handleSignOut} className="logout-button">Sign Out from Google</button>
            <div className="user-info">
              <img src={user.picture} alt="User profile" />
              <h3>{user.name}</h3>
            </div>
          </>
        )}
        {fbUser && (
          <>
            <button onClick={handleFBLogout} className="logout-button fb-login-btn">Logout from Facebook</button>
            <div className="user-info">
              <img src={fbUser.picture?.data?.url} alt="User profile" />
              <h3>{fbUser.name}</h3>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Login;