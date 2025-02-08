// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';  // Importing icons

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark mt-3">  {/* Added mt-3 for top margin */}
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">My Portfolio</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/education">Education</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/projects">Projects</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/extracurricular">Extracurricular</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/cp_dsa">CP & DSA</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/skills">Skills</Link>
            </li>
            {/* Social media and email links */}
            <li className="nav-item ms-3">
              <a href="https://www.linkedin.com/in/narendra-dukhande" target="_blank" rel="noopener noreferrer" className="nav-link">
                <FaLinkedin size={20} />
              </a>
            </li>
            <li className="nav-item ms-3">
              <a href="https://github.com/narendra3003" target="_blank" rel="noopener noreferrer" className="nav-link">
                <FaGithub size={20} />
              </a>
            </li>
            <li className="nav-item ms-3">
              <a href="mailto:narendradukhande@gmail.com" className="nav-link">
                <FaEnvelope size={20} />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
