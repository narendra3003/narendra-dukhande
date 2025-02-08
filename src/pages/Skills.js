// src/pages/Skills.js

import React from "react";
import SkillBadge from "../components/SkillBadge";
import "../assets/styles/skills.css"; // Import CSS

const skillsData = {
  "Languages": ["Python", "Java", "JavaScript", "HTML", "CSS", "C", "C++"],
  "Database Systems": ["MySQL", "MongoDB", "SQLite"],
  "Frameworks": ["Django", "Flask", "Node.js", "React.js", "Tkinter", "Bootstrap"],
  "Other Tools & Technologies": ["VS Code", "IntelliJ IDEA", "Google Cloud Platforms", "Jenkins"]
};

const Skills = () => {
  return (
    <section className="skills-section">
      <h2 style={{ textAlign: "center", color: "white" }} className="section-title">Technical Skills</h2>
      <div className="skills-container">
        {Object.keys(skillsData).map((category) => (
          <div key={category} className="skill-category">
            <h3 className="category-title">{category}</h3>
            <div className="skill-badges">
              {skillsData[category].map((skill, index) => (
                <SkillBadge key={index} skill={skill} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
