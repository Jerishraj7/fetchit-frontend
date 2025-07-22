import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Auth.css'; //  Import CSS styles

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const loginResponse = await axios.post('http://localhost:5005/api/users/login', {
        email,
        password,
      });

      if (loginResponse.status === 200) {
        localStorage.setItem('user', JSON.stringify(loginResponse.data));
        navigate('/products');
      } else {
        alert('Login unsuccessful. Try again.');
      }
    } catch (error) {
      alert('Login failed. Please check your email or password.');
      console.error(error);
    }
  };

  return (
    <div className="auth-container">
      <h2 className="auth-title">🔐 Sign In</h2>
      <form className="auth-form" onSubmit={handleLogin}>
        <div className="auth-group">
          <label>Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="auth-group">
          <label>Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <button type="submit" className="auth-btn">
          Sign In
        </button>
      </form>
    </div>
  );
};

export default SignIn;
