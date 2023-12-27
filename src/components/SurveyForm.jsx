import React, { useState } from 'react';
import axios from 'axios';

const SurveyForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    gender: '',
    nationality: '',
    email: '',
    phoneNumber: '',
    address: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('https://survey-c356.onrender.com/api/submit', formData);
      // Handle success, maybe show a success message or redirect
    } catch (error) {
      // Handle error, maybe show an error message
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Survey Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="gender" className="form-label">Gender</label>
          <select
            className="form-control"
            id="gender"
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            required
          >
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
        {/* Add similar Bootstrap-styled form elements for other fields */}
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};

export default SurveyForm;
