import React from "react";
import ProjectCard from "../components/ProjectCard";
import { FaLaptopCode, FaSyncAlt } from "react-icons/fa";
import "../assets/styles/projects.css"; // Import CSS

const projects = [
  {
    title: "ExpenseEase - Expense Tracking App",
    techStack: "CSS, SceneBuilder, JavaFX, Java, MySQL",
    duration: "Sept 2023 - Dec 2023",
    impact:
      "Developed a user-friendly desktop app for efficient personal expense management. Features include tracking expenses, setting budgets, and managing borrowed/lent money.",
    githubLink: "https://github.com/narendra3003/Expense_Ease_JavaProject",
    icon: <FaLaptopCode size={24} />,
  },
  {
    title: "SwiftSynk: Auto-Syncing & Backup App",
    techStack: "pyQT5, Python, MySQL, Google Drive API",
    duration: "Feb 2024 - May 2024",
    impact:
      "Developed an app for seamless file sync and backup with Google Drive. Implemented versioning, selective sync, and enhanced user control by 70%.",
    githubLink: "https://github.com/narendra3003/SwiftSynk",
    icon: <FaSyncAlt size={24} />,
  },
];

const Projects = () => {
  return (
    <div className="projects-section">
      <h2 style={{ textAlign: "center", color: "white" }} className="section-title">Projects</h2>
      <div className="project-list">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
