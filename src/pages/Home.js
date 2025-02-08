import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div className="container">
      <div className="left">
        <h1 className="name">Narendra Dukhande</h1>
        <p className="bio">Passionate Developer | DSA & AI Enthusiast</p>
        <a 
  href="/resume.pdf" 
  download 
  className="resume-button"
>
  📄 Download Resume
</a>

      </div>
      <div className="right">
        <div className="image-container">
          <img src="images/profile-photo.png" alt="Profile" />
        </div>
      </div>
    </div>
  );
};

export default Home;
