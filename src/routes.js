// src/routes.js
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Education from './pages/Education';
import Projects from './pages/Projects';
import About from './pages/About';
import Extracurricular from './pages/Extracurricular';
import CP_DSA from './pages/CP_DSA';
import Skills from './pages/Skills';

const RoutesComponent = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/education" element={<Education />} />
    <Route path="/projects" element={<Projects />} />
    <Route path="/about" element={<About />} />
    <Route path="/extracurricular" element={<Extracurricular />} />
    <Route path="/cp_dsa" element={<CP_DSA />} />
    <Route path="/skills" element={<Skills />} />
  </Routes>
);

export default RoutesComponent;