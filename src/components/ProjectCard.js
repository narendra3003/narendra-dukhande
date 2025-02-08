import React from "react";
import { Card } from "react-bootstrap";

const ProjectCard = ({ title, description, techStack, duration, impact, githubLink, icon }) => {
  return (
    <Card className="project-card bg-dark text-light mb-4 p-3">
      <div className="d-flex align-items-center mb-2">
        {icon}
        <h3 className="h4 ms-3">{title}</h3>
        <a href={githubLink} target="_blank" rel="noopener noreferrer">
          <img
            src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" // Online GitHub logo
            alt="GitHub Link"
            className="ms-3"
            style={{ width: "40px", height: "40px" }}
          />
        </a>
      </div>
      <p><strong>Tech Stack:</strong> {techStack}</p>
      <p><strong>Duration:</strong> {duration}</p>
      <p><strong>Impact:</strong> {impact}</p>
    </Card>
  );
};

export default ProjectCard;
