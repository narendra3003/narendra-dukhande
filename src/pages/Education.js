import React from "react";
import EducationCard from "../components/EducationCard";
import "../assets/styles/education.css"; // Import CSS file for styling

const Education = () => {
  const educationData = [
    {
      institution: "Don Bosco Institute of Technology",
      degree: "Bachelor of Engineering (Information Technology)",
      duration: "July 2022 - Present",
      location: "Kurla, Maharashtra",
      details: "GPA: 8.67 (Till Sem-4)",
    },
    {
      institution: "Ramniranjan Jhunjhunwala College",
      degree: "11th - 12th",
      duration: "July 2020 - March 2022",
      location: "Ghatkopar, Maharashtra",
      details: "Percentage: 77.17%",
    },
  ];

  return (
    <section id="education" className="education-section">
      <h2 style={{ textAlign: "center", color: "white" }} className="section-title">Education</h2>
      <div className="education-list">
        {educationData.map((edu, index) => (
          <EducationCard key={index} {...edu} />
        ))}
      </div>
    </section>
  );
};

export default Education;
