// SignupForm.jsx
import React, { useState } from 'react';
import './pages/Login.css'; // Reuse styles from Login.css

function SignupForm({ onSignupSuccess }) {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    confirmEmail: '',
    password: '',
    confirmPassword: '',
  });

  // Handles form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Handles form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Simple validation: checks if emails and passwords match
    if (formData.email !== formData.confirmEmail) {
      alert("Emails do not match.");
      return;
    }
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match.");
      return;
    }
    // If validation passes, call onSignupSuccess
    onSignupSuccess(formData.firstName + " " + formData.lastName);
  };

  return (
    <div className="form-row">
      <form onSubmit={handleSubmit}>
        <input type="text" name="firstName" placeholder="First Name" value={formData.firstName} onChange={handleChange} required />
        <input type="text" name="lastName" placeholder="Last Name" value={formData.lastName} onChange={handleChange} required />
        <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
        <input type="email" name="confirmEmail" placeholder="Retype Email" value={formData.confirmEmail} onChange={handleChange} required />
        <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} required />
        <input type="password" name="confirmPassword" placeholder="Retype Password" value={formData.confirmPassword} onChange={handleChange} required />
        <button type="submit" className="logout-button">Sign Up</button>
      </form>
    </div>
  );
}

export default SignupForm;
