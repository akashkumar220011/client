import React, { useState } from 'react';
import axios from 'axios';

const LoginForm = () => {
  const [credentials, setCredentials] = useState({
    username: '',
    password: ''
  });

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://survey-c356.onrender.com/api/login', credentials);
      // Check if the login was successful and isAdmin is true
      if (response.data.message === 'Login successful') {
        // Redirect to the admin dashboard or survey list page
        // (you may use react-router-dom for navigation)
        alert('login success');
      } else {
        // Handle unauthorized access
        console.error('Permission denied');
      }
    } catch (error) {
      // Handle other errors
      console.error('Login failed', error);
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="username" className="form-label">Username</label>
          <input
            type="text"
            className="form-control"
            id="username"
            name="username"
            value={credentials.username}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            value={credentials.password}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">Login</button>
      </form>
    </div>
  );
};

export default LoginForm;
