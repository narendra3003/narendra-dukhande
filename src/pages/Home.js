import React from "react";
import "../assets/styles/Home.css"; // Import CSS file for styling

const Home = () => {
  return (
    <div className="container">
      <div className="left">
        <h1 className="name">Narendra Dukhande</h1>
        <p className="bio">Passionate Developer | DSA & AI Enthusiast</p>
        <a 
  href="https://drive.google.com/file/d/1w98uybPI31MNSrC97hiFmFs2IbPKvQ2p/view?usp=sharing" 
  download 
  target="_blank" 
        rel="noopener noreferrer"
  className="resume-button"
>
  📄 View Resume
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
