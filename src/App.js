// src/App.js
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import NavBar from './components/Navbar';
import RoutesComponent from './routes';
import './assets/styles/global.css';
import { useEffect } from "react";

const App = () => {
  useEffect(() => {
    document.title = "Narendra | Portfolio"; // Change this as needed
  }, []);
  return (
    <Router>
      <NavBar />
      <RoutesComponent />
    </Router>
  );
};

export default App;