// src/App.js
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import NavBar from './components/Navbar';
import RoutesComponent from './routes';
import './assets/styles/global.css';

const App = () => {
  return (
    <Router>
      <NavBar />
      <RoutesComponent />
    </Router>
  );
};

export default App;
