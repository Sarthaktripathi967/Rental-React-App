import React from "react";
import "./App.css";
import { HashRouter as Router } from 'react-router-dom';
import LandingPage from './LandingPage';

const App = () => {
  return (
       <Router>
       <LandingPage />
      </Router>
  );
};

export default App;
