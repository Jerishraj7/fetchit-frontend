import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Auth.css'; // Reuse the same Auth.css

const SignUp = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    address: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const signupRes = await axios.post('http://localhost:5005/api/users/register', formData);

      if (signupRes.status === 200 || signupRes.status === 201) {
        navigate('/signin');
      } else {
        alert(' Registration failed!');
      }
    } catch (err) {
      console.error(err);
      alert(' Registration failed!');
    }
  };

  return (
    <div className="auth-container">
      <h2 className="auth-title">📝 Sign Up</h2>
      <form className="auth-form" onSubmit={handleSubmit}>
        <div className="auth-group">
          <label>Name</label>
          <input
            name="name"
            type="text"
            placeholder="Enter your full name"
            onChange={handleChange}
            required
          />
        </div>

        <div className="auth-group">
          <label>Email</label>
          <input
            name="email"
            type="email"
            placeholder="Enter your email"
            onChange={handleChange}
            required
          />
        </div>

        <div className="auth-group">
          <label>Password</label>
          <input
            name="password"
            type="password"
            placeholder="Create a password"
            onChange={handleChange}
            required
          />
        </div>

        <div className="auth-group">
          <label>Address</label>
          <input
            name="address"
            type="text"
            placeholder="Enter your address"
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" className="auth-btn">Register</button>
      </form>
    </div>
  );
};

export default SignUp;
