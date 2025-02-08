import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div className="container">
      <div className="left">
        <h1 className="name">Narendra Dukhande</h1>
        <p className="bio">Passionate Developer | DSA & AI Enthusiast</p>
      </div>
      <div className="right">
        <div className="image-container">
          <img src="Images/profile-photo.png" alt="Profile" />
        </div>
      </div>
    </div>
  );
};

export default Home;
