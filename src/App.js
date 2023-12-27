import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SurveyForm from './components/SurveyForm';
import SurveyList from './components/SurveyList';
import LoginForm from './components/LoginForm';
import SignupForm from './components/SignupForm';

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/surveys" element={<SurveyList />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/signup" element={<SignupForm />} />
          <Route path="/" element={<SurveyForm />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
